import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { blogPosts } from '../data/blogPosts'

const BlogList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        title="마마몽떼 블로그 - 몬테소리 육아 칼럼"
        description="몬테소리 교육 전문가가 전하는 자율적인 아이 육아법, 환경 구성, 교구 활용 팁 등을 만나보세요."
        keywords="몬테소리 블로그, 육아 칼럼, 자율 학습, 몬테소리 환경, 육아 팁"
        canonicalPath="/blog"
      />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-mamamonte-orange mb-4">마마몽떼 인사이트</h2>
        <p className="text-mamamonte-brown">
          아이의 성장을 위한 깊이 있는 고민과 실질적인 노하우를 나눕니다.
        </p>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-mamamonte-border"
          >
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="bg-orange-100 text-mamamonte-orange px-2 py-1 rounded-md mr-3 font-medium">
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>
            <Link to={`/blog/${post.id}`}>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-mamamonte-orange transition-colors">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-mamamonte-orange font-semibold hover:underline"
            >
              칼럼 읽기 →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogList
