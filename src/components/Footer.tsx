import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="mt-16 text-center text-sm text-mamamonte-lightBrown border-t border-mamamonte-border pt-8 pb-12">
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        <Link to="/about" className="hover:text-mamamonte-orange transition-colors">소개</Link>
        <Link to="/faq" className="hover:text-mamamonte-orange transition-colors">FAQ</Link>
        <Link to="/resources" className="hover:text-mamamonte-orange transition-colors">리소스</Link>
        <Link to="/privacy" className="hover:text-mamamonte-orange transition-colors">{t('footer.privacy')}</Link>
      </div>
      <p className="mb-2">{t('footer.copy')}</p>
    </footer>
  )
}

export default Footer
