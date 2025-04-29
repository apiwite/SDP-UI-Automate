import { defineConfig } from 'cypress'
import { existsSync } from 'fs'
import * as path from 'path'

export default defineConfig({
  e2e: {
    baseUrl: 'http://192.168.10.95',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
      on('task', {
        fileExists(filePath) {
          return existsSync(path.resolve(filePath))
        },
        getFileSize(filePath) {
          const resolvedPath = path.resolve(filePath)
          return existsSync(resolvedPath) ? existsSync(resolvedPath) : 0
        }
      })
    },
  },
}) 