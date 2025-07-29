import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function ssrRenderer(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Angular SSR function processed a request.');

    try {
        // Get the Express app instance
        const expressApp = (await import("../../dist/intellibyte-website/server/server.mjs")).app();
        
        // Create a mock response object that captures the response
        let responseBody = '';
        let statusCode = 200;
        let headers = {};

        const mockRes = {
            send: (data: any) => {
                responseBody = data;
            },
            status: (code: number) => {
                statusCode = code;
                return mockRes;
            },
            set: (name: string, value: string) => {
                headers[name] = value;
                return mockRes;
            },
            redirect: (url: string) => {
                statusCode = 302;
                headers['Location'] = url;
            }
        };

        // Create a request object compatible with Express
        const expressReq = {
            url: request.url || '/',
            method: request.method,
            headers: Object.fromEntries(request.headers.entries()),
            protocol: 'https',
            secure: true,
            originalUrl: request.url || '/',
            baseUrl: ''
        };

        // Handle the request using Express middleware
        expressApp.handle(expressReq, mockRes, (err: any) => {
            if (err) {
                context.error('Error handling request:', err);
                statusCode = 500;
                responseBody = 'Internal Server Error';
            }
        });

        return {
            status: statusCode,
            headers: {
                'Content-Type': 'text/html',
                ...headers
            },
            body: responseBody
        };

    } catch (error) {
        context.error('Function execution error:', error);
        return {
            status: 500,
            body: 'Internal Server Error'
        };
    }
}

app.http('ssr-renderer', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: '{*segments}',
    handler: ssrRenderer
});