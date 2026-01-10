import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SelfDirectedLearning: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="leading-relaxed">
      <Helmet>
        <title>{t('intro.seo.title')}</title>
        <meta name="description" content={t('intro.seo.description')} />
        <meta property="og:title" content={t('intro.seo.title')} />
        <meta property="og:description" content={t('intro.seo.description')} />
      </Helmet>
      <section className="text-center mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h3 className="text-2xl font-semibold mb-4 text-mamamonte-orange">{t('intro.hero.title')}</h3>
        <p className="text-mamamonte-brown">
          {t('intro.hero.description')}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border-l-4 border-mamamonte-orange shadow-sm hover:-translate-y-1 transition-transform">
          <h4 className="text-lg font-bold text-mamamonte-orange mb-3">{t('intro.card1.title')}</h4>
          <p className="text-sm">{t('intro.card1.description')}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-mamamonte-orange shadow-sm hover:-translate-y-1 transition-transform">
          <h4 className="text-lg font-bold text-mamamonte-orange mb-3">{t('intro.card2.title')}</h4>
          <p className="text-sm">{t('intro.card2.description')}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-mamamonte-orange shadow-sm hover:-translate-y-1 transition-transform">
          <h4 className="text-lg font-bold text-mamamonte-orange mb-3">{t('intro.card3.title')}</h4>
          <p className="text-sm">{t('intro.card3.description')}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-mamamonte-orange shadow-sm hover:-translate-y-1 transition-transform">
          <h4 className="text-lg font-bold text-mamamonte-orange mb-3">{t('intro.card4.title')}</h4>
          <p className="text-sm">{t('intro.card4.description')}</p>
        </div>
      </div>

      <section className="text-center italic text-xl text-mamamonte-lightBrown py-8 border-t border-mamamonte-border">
        <p>{t('intro.quote')}</p>
      </section>
    </div>
  )
}

export default SelfDirectedLearning
