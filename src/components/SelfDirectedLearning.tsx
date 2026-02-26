import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from './SEO'
import { Card, HeroSection } from './ui/Layout'
import { blogPosts } from '../data/blogPosts'

const SelfDirectedLearning: React.FC = () => {
  const { t } = useTranslation()

  // 최신 포스트 4개 가져오기
  const latestPosts = blogPosts.slice(0, 4)

  return (
    <div className="leading-relaxed">
      <SEO
        title={t('intro.seo.title')}
        description={t('intro.seo.description')}
        keywords={t('intro.seo.keywords')}
        canonicalPath="/"
      />

      <HeroSection
        title={t('intro.hero.title')}
        description={t('intro.hero.description')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="border-l-4 border-l-mamamonte-orange">
          <h4 className="text-xl font-bold text-mamamonte-orange mb-2">{t(`intro.card1.title`)}</h4>
          <p className="text-mamamonte-brown leading-relaxed text-sm">{t(`intro.card1.description`)}</p>
        </Card>
        <Card className="border-l-4 border-l-mamamonte-orange">
          <h4 className="text-xl font-bold text-mamamonte-orange mb-2">{t(`intro.card2.title`)}</h4>
          <p className="text-mamamonte-brown leading-relaxed text-sm">{t(`intro.card2.description`)}</p>
        </Card>
      </div>

      {/* 최신 블로그 포스트 섹션 */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-mamamonte-orange">최신 블로그 글</h2>
          <Link
            to="/blog"
            className="text-mamamonte-orange font-semibold hover:underline flex items-center gap-1"
          >
            전체보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-xl shadow-sm border border-mamamonte-border hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-orange-100 text-mamamonte-orange px-2 py-1 rounded-md font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-mamamonte-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center italic text-xl text-mamamonte-lightBrown py-12 border-t border-mamamonte-border">
        <p className="max-w-2xl mx-auto line-height-relaxed">
          {t('intro.quote')}
        </p>
      </section>
    </div>
  )
}

export default SelfDirectedLearning
