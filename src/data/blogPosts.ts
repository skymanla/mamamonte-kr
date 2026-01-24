import { ComponentType } from 'react'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  component: ComponentType
}

import * as post1 from '../posts/montessori-environment-guide.mdx'
import * as post2 from '../posts/tantrum-solution-3steps.mdx'
import * as post3 from '../posts/independence-kids-dressing.mdx'
import * as post4 from '../posts/significance-of-practical-life.mdx'
import * as post5 from '../posts/montessori-materials-vs-toys.mdx'

export const blogPosts: BlogPost[] = [
  { ...post1.meta, component: post1.default },
  { ...post2.meta, component: post2.default },
  { ...post3.meta, component: post3.default },
  { ...post4.meta, component: post4.default },
  { ...post5.meta, component: post5.default },
]
