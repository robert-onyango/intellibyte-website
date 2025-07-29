import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

interface HealthStatus {
    status: 'healthy' | 'unhealthy' | 'degraded';
    timestamp: string;
    version: string;
    environment: string;
    checks: {
        angular_ssr: {
            status: 'healthy' | 'unhealthy';
            responseTime?: number;
        };
        debezium_sync: {
            status: 'healthy' | 'unhealthy';
            lastSync?: string;
        };
        azure_functions: {
            status: 'healthy' | 'unhealthy';
            runtime: string;
        };
    };
}

export async function healthCheck(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Health check function triggered.');

    try {
        const startTime = Date.now();
        
        // Perform health checks
        const healthStatus: HealthStatus = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            version: '2.0.0', // Phase 2 version
            environment: process.env.AZURE_FUNCTIONS_ENVIRONMENT || 'development',
            checks: {
                angular_ssr: await checkAngularSSR(context),
                debezium_sync: await checkDebeziumSync(context),
                azure_functions: checkAzureFunctions(context)
            }
        };

        // Determine overall status
        const checkStatuses = Object.values(healthStatus.checks).map(check => check.status);
        if (checkStatuses.includes('unhealthy')) {
            healthStatus.status = 'unhealthy';
        }

        const responseTime = Date.now() - startTime;
        context.log(`Health check completed in ${responseTime}ms with status: ${healthStatus.status}`);

        return {
            status: healthStatus.status === 'healthy' ? 200 : 503,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            jsonBody: healthStatus
        };

    } catch (error) {
        context.error('Health check error:', error);
        return {
            status: 500,
            jsonBody: {
                status: 'unhealthy',
                timestamp: new Date().toISOString(),
                error: 'Health check failed'
            }
        };
    }
}

async function checkAngularSSR(context: InvocationContext): Promise<{ status: 'healthy' | 'unhealthy'; responseTime?: number }> {
    try {
        const startTime = Date.now();
        
        // Try to import the Angular app to verify it's available
        await import("../../dist/intellibyte-website/server/server.mjs");
        
        const responseTime = Date.now() - startTime;
        
        return {
            status: 'healthy',
            responseTime
        };
    } catch (error) {
        context.error('Angular SSR health check failed:', error);
        return { status: 'unhealthy' };
    }
}

async function checkDebeziumSync(context: InvocationContext): Promise<{ status: 'healthy' | 'unhealthy'; lastSync?: string }> {
    try {
        // Check if Debezium endpoint is configured
        const debeziumEndpoint = process.env.DEBEZIUM_ENDPOINT;
        
        if (!debeziumEndpoint) {
            return { 
                status: 'unhealthy',
                lastSync: 'No endpoint configured'
            };
        }

        // TODO: In a real implementation, you might check the last successful sync
        // For now, we'll just verify the configuration exists
        return {
            status: 'healthy',
            lastSync: new Date().toISOString()
        };
    } catch (error) {
        context.error('Debezium sync health check failed:', error);
        return { status: 'unhealthy' };
    }
}

function checkAzureFunctions(context: InvocationContext): { status: 'healthy' | 'unhealthy'; runtime: string } {
    try {
        const runtime = process.version;
        return {
            status: 'healthy',
            runtime
        };
    } catch (error) {
        context.error('Azure Functions health check failed:', error);
        return {
            status: 'unhealthy',
            runtime: 'unknown'
        };
    }
}

app.http('health-check', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: healthCheck
});