/**
 * Azure Functions for Intellibyte Website - Phase 2 Implementation
 * 
 * This file registers all Azure Functions for the application.
 * Functions are defined using the v4 programming model.
 */

// Import all function modules to register them
import '../ssr-renderer';
import '../debezium-sync';
import '../health-check';

// Export for potential testing or other use cases
export * from '../ssr-renderer';
export * from '../debezium-sync';
export * from '../health-check';