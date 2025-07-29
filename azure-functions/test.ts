/**
 * Simple test script to validate Azure Functions Phase 2 implementation
 */

console.log('=== Azure Functions Phase 2 Validation ===\n');

// Test 1: Verify modules can be imported
try {
    console.log('Testing module imports...');
    require('./health-check');
    require('./debezium-sync');
    require('./ssr-renderer');
    console.log('✅ All Azure Function modules imported successfully\n');
} catch (error) {
    console.error('❌ Module import failed:', error);
    process.exit(1);
}

// Test 2: Verify build artifacts exist
const fs = require('fs');
const path = require('path');

console.log('Testing build artifacts...');
const requiredFiles = [
    'health-check/index.js',
    'debezium-sync/index.js', 
    'ssr-renderer/index.js',
    'src/index.js',
    '../host.json',
    '../package.json'
];

let allFilesExist = true;
for (const file of requiredFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} exists`);
    } else {
        console.error(`❌ ${file} missing (${filePath})`);
        allFilesExist = false;
    }
}

if (!allFilesExist) {
    console.error('\n❌ Some required files are missing');
    process.exit(1);
}

console.log('\n✅ All required build artifacts exist');

// Test 3: Verify configuration
console.log('\nTesting configuration...');
try {
    const hostConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../host.json'), 'utf8'));
    const packageConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
    
    console.log(`✅ Host.json version: ${hostConfig.version}`);
    console.log(`✅ Package version: ${packageConfig.version}`);
    console.log(`✅ Extension bundle: ${hostConfig.extensionBundle.id}@${hostConfig.extensionBundle.version}`);
} catch (error) {
    console.error('❌ Configuration validation failed:', error);
    process.exit(1);
}

console.log('\n=== Phase 2 Implementation Validation Complete ===');
console.log('✅ ALL TESTS PASSED - Azure Functions Phase 2 is ready for deployment');
console.log('\nNext steps:');
console.log('1. Deploy to Azure using: npm run azure:deploy');
console.log('2. Test endpoints manually or with Azure Functions Core Tools');
console.log('3. Monitor using the health-check endpoint: /api/health-check');