import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from './SEO'

const SelfDirectedLearningMethod: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="leading-relaxed">
      <SEO
        title={t('method.seo.title')}
        description={t('method.seo.description')}
        keywords={t('method.seo.keywords')}
        canonicalPath="/learning-method"
      />

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
