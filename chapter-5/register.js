/**
 * Overrides the tsconfig.
 * In the test environment we need some tweaks.
 */

 const tsNode = require('ts-node');
 const testTSConfig = require('./tests/tsconfig.json');
 
 tsNode.register({
   files: true,
   transpileOnly: true, // avoid checking test code during compilation phase
   project: './tests/tsconfig.json'
 });