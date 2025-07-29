import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

interface DebeziumRecord {
    before?: any;
    after?: any;
    source: {
        version: string;
        connector: string;
        name: string;
        ts_ms: number;
        snapshot?: string;
        db: string;
        sequence?: string;
        table?: string;
        server_id?: number;
        gtid?: string;
        file?: string;
        pos?: number;
        row?: number;
        thread?: number;
        query?: string;
    };
    op: 'c' | 'u' | 'd' | 'r'; // create, update, delete, read
    ts_ms: number;
    transaction?: any;
}

interface SyncResponse {
    success: boolean;
    recordsProcessed: number;
    errors?: string[];
    metadata?: {
        processedAt: string;
        functionVersion: string;
    };
}

export async function debeziumSync(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Debezium record sync function triggered.');

    try {
        // Parse request body
        const body = await request.json() as any;
        
        // Validate request body
        if (!body || !Array.isArray(body.records)) {
            return {
                status: 400,
                jsonBody: {
                    success: false,
                    error: 'Invalid request format. Expected { records: DebeziumRecord[] }'
                }
            };
        }

        const records: DebeziumRecord[] = body.records;
        const errors: string[] = [];
        let processedCount = 0;

        context.log(`Processing ${records.length} Debezium records`);

        // Process each record
        for (const record of records) {
            try {
                await processDebeziumRecord(context, record);
                processedCount++;
            } catch (error) {
                const errorMsg = `Failed to process record: ${error.message}`;
                context.error(errorMsg);
                errors.push(errorMsg);
            }
        }

        const response: SyncResponse = {
            success: errors.length === 0,
            recordsProcessed: processedCount,
            metadata: {
                processedAt: new Date().toISOString(),
                functionVersion: '2.0.0'
            }
        };

        if (errors.length > 0) {
            response.errors = errors;
        }

        return {
            status: errors.length === 0 ? 200 : 207, // 207 for partial success
            jsonBody: response
        };

    } catch (error) {
        context.error('Function execution error:', error);
        return {
            status: 500,
            jsonBody: {
                success: false,
                error: 'Internal server error during record processing'
            }
        };
    }
}

async function processDebeziumRecord(context: InvocationContext, record: DebeziumRecord): Promise<void> {
    context.log(`Processing ${record.op} operation for table ${record.source.table}`);

    // Phase 2 enhancements: Advanced record processing
    switch (record.op) {
        case 'c': // Create
            await handleCreateOperation(context, record);
            break;
        case 'u': // Update
            await handleUpdateOperation(context, record);
            break;
        case 'd': // Delete
            await handleDeleteOperation(context, record);
            break;
        case 'r': // Read (snapshot)
            await handleReadOperation(context, record);
            break;
        default:
            throw new Error(`Unsupported operation: ${record.op}`);
    }

    // Log metrics for monitoring
    context.log(`Record processed successfully: ${record.source.table}:${record.op}:${record.ts_ms}`);
}

async function handleCreateOperation(context: InvocationContext, record: DebeziumRecord): Promise<void> {
    // Phase 2: Enhanced create operation handling
    if (!record.after) {
        throw new Error('Create operation missing "after" data');
    }

    // TODO: Implement actual data persistence logic
    // This could involve writing to Azure Storage, Cosmos DB, etc.
    context.log('CREATE operation:', {
        table: record.source.table,
        data: record.after,
        timestamp: record.ts_ms
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 10));
}

async function handleUpdateOperation(context: InvocationContext, record: DebeziumRecord): Promise<void> {
    // Phase 2: Enhanced update operation handling
    if (!record.after) {
        throw new Error('Update operation missing "after" data');
    }

    // TODO: Implement actual data update logic
    context.log('UPDATE operation:', {
        table: record.source.table,
        before: record.before,
        after: record.after,
        timestamp: record.ts_ms
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 10));
}

async function handleDeleteOperation(context: InvocationContext, record: DebeziumRecord): Promise<void> {
    // Phase 2: Enhanced delete operation handling
    if (!record.before) {
        throw new Error('Delete operation missing "before" data');
    }

    // TODO: Implement actual data deletion logic
    context.log('DELETE operation:', {
        table: record.source.table,
        data: record.before,
        timestamp: record.ts_ms
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 5));
}

async function handleReadOperation(context: InvocationContext, record: DebeziumRecord): Promise<void> {
    // Phase 2: Enhanced read operation handling (snapshot data)
    if (!record.after) {
        throw new Error('Read operation missing "after" data');
    }

    // TODO: Implement snapshot data handling
    context.log('READ operation (snapshot):', {
        table: record.source.table,
        data: record.after,
        timestamp: record.ts_ms
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 5));
}

app.http('debezium-sync', {
    methods: ['POST'],
    authLevel: 'function',
    handler: debeziumSync
});