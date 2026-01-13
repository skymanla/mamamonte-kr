import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SelfDirectedLearningMethod: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="leading-relaxed">
      <Helmet>
        <title>{t('method.seo.title')}</title>
        <meta name="description" content={t('method.seo.description')} />
        <meta name="keywords" content={t('method.seo.keywords')} />
        <link rel="canonical" href="https://mamamonte.kr/learning-method" />
        <meta property="og:title" content={t('method.seo.title')} />
        <meta property="og:description" content={t('method.seo.description')} />
        <meta property="og:url" content="https://mamamonte.kr/learning-method" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('method.seo.title')} />
        <meta name="twitter:description" content={t('method.seo.description')} />
      </Helmet>

      <section className="text-center mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h3 className="text-2xl font-semibold mb-4 text-mamamonte-orange">{t('method.hero.title')}</h3>
        <p className="text-mamamonte-brown">
          {t('method.hero.description')}
        </p>
      </section>

      <div className="space-y-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="bg-white p-8 rounded-xl border-l-8 border-mamamonte-orange shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-mamamonte-orange mb-4">
              {t(`method.steps.step${step}.title`)}
            </h4>
            <p className="text-mamamonte-brown leading-7">
              {t(`method.steps.step${step}.description`)}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default SelfDirectedLearningMethod
