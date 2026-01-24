declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const component: ComponentType
  export default component

  export const meta: {
    id: string
    title: string
    excerpt: string
    date: string
    category: string
    author: string
  }
}
