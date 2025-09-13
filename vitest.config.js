import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default', 'junit'],   // add junit reporter
    outputFile: './reports/junit/test-results.xml',
  },
})
