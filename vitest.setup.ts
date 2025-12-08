// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        // ... other settings
    },
})