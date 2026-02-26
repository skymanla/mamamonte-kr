import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from './SEO'
import { blogPosts } from '../data/blogPosts'

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const ContentComponent = post.component

  return (
    <article className="max-w-3xl mx-auto">
      <SEO
        title={`${post.title} | 마마몽떼`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.id}`}
        ogType="article"
      />

      <div className="mb-8 text-center">
        <div className="flex justify-center items-center space-x-2 text-sm text-gray-500 mb-4">
          <span className="text-mamamonte-orange font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
          {post.title}
        </h1>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-9 md:leading-10 space-y-6 prose-p:mb-6 prose-headings:mb-8 prose-headings:text-mamamonte-orange prose-headings:font-bold prose-a:text-mamamonte-orange hover:prose-a:underline prose-strong:text-gray-900">
        <ContentComponent />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          to="/blog"
          className="inline-block bg-white border border-mamamonte-border text-mamamonte-brown px-6 py-2 rounded-full hover:bg-mamamonte-border hover:text-white transition-colors"
        >
          ← 목록으로 돌아가기
        </Link>
      </div>
    </article>
  )
}

export default BlogPost
