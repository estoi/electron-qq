import { createProdMockServer } from 'vite-plugin-mock/client'

const modules = import.meta.glob('./modules/*.ts', { eager: true })

const mockModules: any[] = []

Object.keys(modules).forEach((key) => {
  if (key.includes('_')) return
  mockModules.push(...(modules as Recordable)[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
