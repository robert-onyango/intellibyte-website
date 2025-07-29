# Azure Functions Implementation - Phase 2

This document describes the Phase 2 implementation of Azure Functions for the Intellibyte Website project.

## Overview

Phase 2 enhances the basic Azure Function setup with:

1. **Server-Side Rendering (SSR) Function**: Handles Angular SSR requests through Azure Functions
2. **Debezium Record Sync Function**: Processes Debezium change data capture records
3. **Health Check Function**: Provides monitoring and health status endpoints
4. **Enhanced Configuration**: Improved settings and deployment scripts

## Architecture

```
intellibyte-website/
├── azure-functions/
│   ├── host.json                    # Azure Functions runtime configuration
│   ├── local.settings.json          # Local development settings
│   ├── package.json                 # Function-specific dependencies
│   ├── tsconfig.json               # TypeScript configuration
│   ├── ssr-renderer/               # Angular SSR handler
│   │   ├── function.json
│   │   └── index.ts
│   ├── debezium-sync/              # Debezium record processor
│   │   ├── function.json
│   │   └── index.ts
│   └── health-check/               # Health monitoring
│       ├── function.json
│       └── index.ts
└── ...
```

## Functions

### 1. SSR Renderer (`/api/ssr-renderer`)

**Purpose**: Handles all web requests and renders Angular pages server-side.

**Route**: `{*segments}` (catches all routes)  
**Methods**: GET, POST  
**Auth Level**: Anonymous

**Features**:
- Integrates with existing Express SSR setup
- Handles Angular routing
- Supports HTTPS redirects
- Compatible with Azure Functions runtime

### 2. Debezium Sync (`/api/debezium-sync`)

**Purpose**: Processes Debezium change data capture records in batches.

**Methods**: POST  
**Auth Level**: Function (requires API key)

**Features**:
- Batch processing of CDC records
- Support for all operation types (Create, Update, Delete, Read)
- Error handling and partial success responses
- Detailed logging and metrics
- Configurable endpoints via environment variables

**Request Format**:
```json
{
  "records": [
    {
      "before": {...},
      "after": {...},
      "source": {
        "version": "1.9.0",
        "connector": "mysql",
        "name": "dbserver1",
        "ts_ms": 1644329762000,
        "db": "mydb",
        "table": "users"
      },
      "op": "c",
      "ts_ms": 1644329762000
    }
  ]
}
```

### 3. Health Check (`/api/health-check`)

**Purpose**: Provides application health status and monitoring data.

**Methods**: GET  
**Auth Level**: Anonymous

**Features**:
- Checks Angular SSR availability
- Monitors Debezium sync configuration
- Azure Functions runtime status
- Response time metrics
- Overall health status calculation

**Response Format**:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "2.0.0",
  "environment": "production",
  "checks": {
    "angular_ssr": {
      "status": "healthy",
      "responseTime": 45
    },
    "debezium_sync": {
      "status": "healthy",
      "lastSync": "2024-01-15T10:29:30.000Z"
    },
    "azure_functions": {
      "status": "healthy",
      "runtime": "v18.17.0"
    }
  }
}
```

## Configuration

### Environment Variables

Set these in `local.settings.json` for local development or in Azure Function App Settings for production:

- `DEBEZIUM_ENDPOINT`: The Debezium connector endpoint URL
- `DEBEZIUM_API_KEY`: API key for Debezium authentication
- `AzureWebJobsStorage`: Azure Storage connection string
- `FUNCTIONS_WORKER_RUNTIME`: Set to "node"

### Local Development

1. Install dependencies:
   ```bash
   npm install
   cd azure-functions && npm install
   ```

2. Build the Angular app:
   ```bash
   npm run build
   ```

3. Start Azure Functions:
   ```bash
   npm run azure:start
   ```

### Deployment

1. Build everything:
   ```bash
   npm run azure:build
   ```

2. Deploy to Azure (replace `<function-app-name>`):
   ```bash
   npm run azure:deploy
   ```

## Phase 2 Enhancements

### Improvements over Phase 1:

1. **Enhanced Error Handling**: Comprehensive error catching and reporting
2. **Batch Processing**: Efficient handling of multiple Debezium records
3. **Health Monitoring**: Built-in health checks and status reporting
4. **Type Safety**: Full TypeScript implementation with proper types
5. **Configuration Management**: Environment-based configuration
6. **Logging**: Structured logging for monitoring and debugging
7. **Performance**: Optimized request handling and response times

### Future Phases:

- **Phase 3**: Could include database persistence, caching, and advanced monitoring
- **Phase 4**: Could add authentication, rate limiting, and advanced CDC features

## Testing

### Manual Testing

1. **SSR Function**:
   ```bash
   curl http://localhost:7071/api/ssr-renderer/
   ```

2. **Health Check**:
   ```bash
   curl http://localhost:7071/api/health-check
   ```

3. **Debezium Sync**:
   ```bash
   curl -X POST http://localhost:7071/api/debezium-sync \
     -H "Content-Type: application/json" \
     -d '{"records": [{"op": "c", "after": {"id": 1, "name": "test"}, "source": {"table": "users", "ts_ms": 1644329762000}, "ts_ms": 1644329762000}]}'
   ```

## Monitoring

The health check endpoint provides comprehensive monitoring data. In production, you should:

1. Set up Application Insights for detailed telemetry
2. Monitor the health check endpoint for service availability
3. Set up alerts for failed Debezium sync operations
4. Monitor function execution times and error rates

## Security

- SSR function allows anonymous access for public website content
- Debezium sync requires function-level authentication
- Health check is anonymous but doesn't expose sensitive data
- All functions should be deployed behind Azure's built-in security features