import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from './SEO'

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <SEO
        title={`${t('privacy.title')} | mamamonte.kr`}
        description={t('privacy.content').substring(0, 160)}
        canonicalPath="/privacy"
      />
      <h1 className="text-3xl font-bold text-mamamonte-orange mb-8">{t('privacy.title')}</h1>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border leading-relaxed text-mamamonte-brown">
        <p className="whitespace-pre-line">{t('privacy.content')}</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
