import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from './SEO'

const SelfDirectedLearning: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="leading-relaxed">
      <SEO
        title={t('intro.seo.title')}
        description={t('intro.seo.description')}
        keywords={t('intro.seo.keywords')}
        canonicalPath="/"
      />
      <section className="text-center mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h3 className="text-2xl font-semibold mb-4 text-mamamonte-orange">{t('intro.hero.title')}</h3>
        <p className="text-mamamonte-brown">
          {t('intro.hero.description')}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="bg-white p-6 rounded-xl border-l-4 border-mamamonte-orange shadow-sm hover:-translate-y-1 transition-transform">
            <h4 className="text-lg font-bold text-mamamonte-orange mb-3">{t(`intro.card${num}.title`)}</h4>
            <p className="text-sm">{t(`intro.card${num}.description`)}</p>
          </div>
        ))}
      </div>

      <section className="text-center italic text-xl text-mamamonte-lightBrown py-8 border-t border-mamamonte-border">
        <p>{t('intro.quote')}</p>
      </section>
    </div>
  )
}

export default SelfDirectedLearning
