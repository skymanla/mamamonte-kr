import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const ParentingTips: React.FC = () => {
  const { t } = useTranslation()

  const tips = ['environment', 'respect', 'tantrums']

  return (
    <div className="leading-relaxed">
      <Helmet>
        <title>{t('parenting.seo.title')}</title>
        <meta name="description" content={t('parenting.seo.description')} />
        <meta name="keywords" content={t('parenting.seo.keywords')} />
        <link rel="canonical" href="https://mamamonte.kr/parenting-tips" />
        <meta property="og:title" content={t('parenting.seo.title')} />
        <meta property="og:description" content={t('parenting.seo.description')} />
        <meta property="og:url" content="https://mamamonte.kr/parenting-tips" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('parenting.seo.title')} />
        <meta name="twitter:description" content={t('parenting.seo.description')} />
      </Helmet>

      <section className="text-center mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h3 className="text-2xl font-semibold mb-4 text-mamamonte-orange">{t('parenting.hero.title')}</h3>
        <p className="text-mamamonte-brown">
          {t('parenting.hero.description')}
        </p>
      </section>

      <div className="grid gap-6">
        {tips.map((tip, _) => (
          <div
            key={tip}
            className="bg-white rounded-xl shadow-sm border border-mamamonte-border p-6"
          >
            <h4 className="text-xl font-bold text-mamamonte-orange mb-4">
              {t(`parenting.tips.${tip}.title`)}
            </h4>
            <div className="text-mamamonte-brown leading-7">
              <p>{t(`parenting.tips.${tip}.description`)}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default ParentingTips
