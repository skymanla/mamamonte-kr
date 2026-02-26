import React, { useState, useEffect } from 'react'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // 화면 스크롤 시 버튼 표시 여부 제어
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // 최상단으로 부드럽게 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      // md:flex로 데스크톱 이상에서만 노출 (모바일 hidden 처리)
      className={`fixed bottom-8 right-8 z-[60] p-3 rounded-full bg-mamamonte-orange text-white shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 hidden md:flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}

export default ScrollToTop
