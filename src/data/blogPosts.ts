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
import * as post6 from '../posts/concentration-development-guide.mdx'
import * as post7 from '../posts/reading-habit-before-7.mdx'
import * as post8 from '../posts/emotional-intelligence-guide.mdx'
import * as post9 from '../posts/sleep-training-montessori-way.mdx'
import * as post10 from '../posts/outdoor-play-importance.mdx'
import * as post11 from '../posts/sensitive-periods-guide.mdx'
import * as post12 from '../posts/picky-eater-solutions.mdx'
import * as post13 from '../posts/potty-training-success.mdx'
import * as post14 from '../posts/screen-time-management.mdx'
import * as post15 from '../posts/sibling-harmony-guide.mdx'

export const blogPosts: BlogPost[] = [
  { ...post15.meta, component: post15.default },
  { ...post14.meta, component: post14.default },
  { ...post13.meta, component: post13.default },
  { ...post12.meta, component: post12.default },
  { ...post11.meta, component: post11.default },
  { ...post10.meta, component: post10.default },
  { ...post9.meta, component: post9.default },
  { ...post8.meta, component: post8.default },
  { ...post7.meta, component: post7.default },
  { ...post6.meta, component: post6.default },
  { ...post3.meta, component: post3.default },
  { ...post4.meta, component: post4.default },
  { ...post5.meta, component: post5.default },
  { ...post2.meta, component: post2.default },
  { ...post1.meta, component: post1.default },
]
