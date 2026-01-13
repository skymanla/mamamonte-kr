import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const ParentingTips: React.FC = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<number | null>(0)

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
        {tips.map((tip, index) => (
          <div
            key={tip}
            className={`
              bg-white rounded-xl shadow-sm transition-all duration-300 overflow-hidden
              ${activeTab === index
                ? 'border-2 border-mamamonte-orange ring-2 ring-mamamonte-orange/10'
                : 'border border-mamamonte-border hover:border-mamamonte-lightBrown'
              }
            `}
          >
            <button
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className="w-full text-left p-6 flex justify-between items-center outline-none"
            >
              <h4 className={`text-xl font-bold transition-colors ${activeTab === index ? 'text-mamamonte-orange' : 'text-mamamonte-brown'}`}>
                {t(`parenting.tips.${tip}.title`)}
              </h4>
              <span className={`transform transition-transform duration-300 ${activeTab === index ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-mamamonte-lightBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div
              className={`
                transition-all duration-300 ease-in-out
                ${activeTab === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="p-6 pt-0 text-mamamonte-brown border-t border-dashed border-mamamonte-border mt-2">
                <p className="leading-7">
                  {t(`parenting.tips.${tip}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default ParentingTips
