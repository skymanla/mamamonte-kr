import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface AdSenseProps {
  /**
   * 광고 슬롯 ID (data-ad-slot)
   * 예: "1234567890"
   */
  adSlot: string;

  /**
   * 광고 형식 (data-ad-format)
   * 기본값: "auto"
   * 옵션: "auto", "fluid", "rectangle", "vertical", "horizontal"
   */
  adFormat?: string;

  /**
   * 반응형 광고 여부 (data-full-width-responsive)
   * 기본값: true
   */
  fullWidthResponsive?: boolean;

  /**
   * 광고 스타일 (CSS)
   */
  style?: React.CSSProperties;

  /**
   * 광고 클래스명
   */
  className?: string;
}

/**
 * Google AdSense 광고 컴포넌트
 *
 * 사용 예시:
 * ```tsx
 * <AdSense
 *   adSlot="1234567890"
 *   adFormat="auto"
 *   style={{ display: 'block', minHeight: '250px' }}
 * />
 * ```
 */
export const AdSense = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = '',
}: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null)
  const isAdPushed = useRef(false)

  useEffect(() => {
    try {
      // AdSense 스크립트가 로드되었는지 확인
      if (typeof window !== 'undefined' && window.adsbygoogle && !isAdPushed.current) {
        // 광고 푸시
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
        isAdPushed.current = true
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-1586372003132738"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  )
}
