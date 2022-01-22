import { defineConfig } from '@peeky/test'

export default defineConfig({
  match: ['**/__tests__/**/*.spec.ts'],
  ignored: ['**/node_modules/**']
  // runtimeEnv: 'node', defailt is node
})
