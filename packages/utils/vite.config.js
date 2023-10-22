import { resolve } from 'path'
import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'utils',
			fileName: 'utils',
			formats: ['cjs', 'es', 'umd', 'iife'],
		},
	},
})
