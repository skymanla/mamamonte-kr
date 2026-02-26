import React from 'react'
import SEO from '../components/SEO'

interface Resource {
  category: string
  title: string
  description: string
  ageRange?: string
  icon: string
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    // 교구 추천
    {
      category: '교구 추천',
      title: '감각 교구',
      description: '분홍탑, 갈색계단, 색판, 촉감판, 소리통 등 감각 발달을 위한 교구',
      ageRange: '2~6세',
      icon: '🎨',
    },
    {
      category: '교구 추천',
      title: '일상생활 영역',
      description: '붓기, 따르기, 집게 활동, 단추 끼우기 등 실생활 기술 연습',
      ageRange: '18개월~5세',
      icon: '🥄',
    },
    {
      category: '교구 추천',
      title: '수학 교구',
      description: '숫자 막대, 스핀들 박스, 분수 원판, 골든 비즈 등',
      ageRange: '3~6세',
      icon: '🔢',
    },
    {
      category: '교구 추천',
      title: '언어 교구',
      description: '사포 글자, 움직이는 알파벳, 물체와 카드 매칭',
      ageRange: '3~6세',
      icon: '✏️',
    },

    // DIY 활동
    {
      category: 'DIY 활동',
      title: '이쑤시개 꽂기',
      description: '구멍 뚫린 소금통에 이쑤시개를 꽂아 소근육 발달',
      ageRange: '18개월~3세',
      icon: '📍',
    },
    {
      category: 'DIY 활동',
      title: '콩 옮기기',
      description: '숟가락이나 집게로 콩을 다른 그릇에 옮기기',
      ageRange: '2~4세',
      icon: '🥜',
    },
    {
      category: 'DIY 활동',
      title: '빨래집게 활동',
      description: '상자 가장자리에 빨래집게 끼우며 손가락 힘 기르기',
      ageRange: '2~4세',
      icon: '📎',
    },
    {
      category: 'DIY 활동',
      title: '물 따르기',
      description: '작은 주전자로 컵에 물 따르기 연습',
      ageRange: '2~5세',
      icon: '💧',
    },
    {
      category: 'DIY 활동',
      title: '자연물 분류',
      description: '나뭇잎, 돌, 솔방울 등을 수집하고 분류하기',
      ageRange: '3~6세',
      icon: '🍂',
    },

    // 추천 도서
    {
      category: '추천 도서',
      title: '몬테소리, 마음을 읽다',
      description: '김은희 저 - 몬테소리 교육의 핵심 원리와 가정 적용법',
      icon: '📕',
    },
    {
      category: '추천 도서',
      title: '아이의 흡수하는 마음',
      description: '마리아 몬테소리 저 - 몬테소리 교육의 고전',
      icon: '📗',
    },
    {
      category: '추천 도서',
      title: '0~3세 민감기 육아',
      description: '김정미 저 - 영아기 민감기와 실전 육아법',
      icon: '📘',
    },
    {
      category: '추천 도서',
      title: '감정 코칭',
      description: '존 가트맨 저 - 아이의 감정 지능을 키우는 법',
      icon: '📙',
    },

    // 환경 구성 가이드
    {
      category: '환경 구성',
      title: '낮은 책장 (50~60cm)',
      description: '아이가 스스로 책을 꺼낼 수 있는 높이의 오픈형 책장',
      icon: '📚',
    },
    {
      category: '환경 구성',
      title: '바닥 침대 (Floor Bed)',
      description: '아이가 자유롭게 드나들 수 있는 낮은 매트리스',
      ageRange: '0세~',
      icon: '🛏️',
    },
    {
      category: '환경 구성',
      title: '낮은 옷걸이',
      description: '아이가 스스로 옷을 걸고 꺼낼 수 있는 높이',
      ageRange: '2세~',
      icon: '👔',
    },
    {
      category: '환경 구성',
      title: '작업 매트/러그',
      description: '활동 공간을 정의하고 심리적 안정감 제공',
      icon: '🧘',
    },
    {
      category: '환경 구성',
      title: '전신 거울',
      description: '자기 인식 발달과 옷 입기 연습에 활용',
      ageRange: '12개월~',
      icon: '🪞',
    },

    // 온라인 리소스
    {
      category: '온라인 리소스',
      title: 'AMI (국제 몬테소리 협회)',
      description: '공식 몬테소리 교육 자료와 교사 양성 프로그램',
      icon: '🌐',
    },
    {
      category: '온라인 리소스',
      title: 'Montessori Print Shop',
      description: '무료 프린터블 몬테소리 자료 (영문)',
      icon: '🖨️',
    },
    {
      category: '온라인 리소스',
      title: '한국몬테소리',
      description: '한국어 몬테소리 교구 및 교육 자료',
      icon: '🇰🇷',
    },

    // 체크리스트
    {
      category: '체크리스트',
      title: '환경 구성 체크리스트',
      description: '안전성, 접근성, 질서, 미학 등 확인 사항',
      icon: '✅',
    },
    {
      category: '체크리스트',
      title: '민감기 관찰 시트',
      description: '아이의 민감기를 파악하고 기록하는 양식',
      icon: '📋',
    },
    {
      category: '체크리스트',
      title: '일일 루틴 차트',
      description: '아침, 저녁 루틴을 시각화한 그림 차트',
      icon: '🕐',
    },
  ]

  const categories = Array.from(new Set(resources.map((item) => item.category)))

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title="리소스 & 도구 - 마마몽떼"
        description="가정에서 바로 활용할 수 있는 몬테소리 교구 추천, DIY 활동, 추천 도서, 환경 구성 가이드, 체크리스트 등 다양한 리소스를 제공합니다."
        keywords="몬테소리 교구, DIY 활동, 육아 도서, 환경 구성, 체크리스트, 몬테소리 자료"
        canonicalPath="/resources"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-mamamonte-orange mb-4">리소스 & 도구</h1>
        <p className="text-xl text-mamamonte-brown">
          가정에서 바로 활용할 수 있는 몬테소리 교육 자료
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-12 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-4">💡 리소스 활용 팁</h2>
        <div className="space-y-3 text-mamamonte-brown">
          <p>
            <strong>1. 한 번에 하나씩:</strong> 모든 것을 한꺼번에 시도하지 마세요. 아이의 흥미와 발달 단계에 맞춰 하나씩 도입하세요.
          </p>
          <p>
            <strong>2. 관찰이 먼저:</strong> 교구나 활동을 제공하기 전에 아이가 무엇에 관심 있는지 관찰하세요.
          </p>
          <p>
            <strong>3. 완벽함 버리기:</strong> 비싼 정품 교구가 아니어도 괜찮습니다. 원리만 이해하면 DIY로도 충분합니다.
          </p>
          <p>
            <strong>4. 순환하기:</strong> 교구는 2~4주마다 바꿔주면 아이의 흥미가 유지됩니다.
          </p>
        </div>
      </div>

      {/* Resources by Category */}
      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-3xl font-bold text-mamamonte-orange mb-6 pb-2 border-b-2 border-mamamonte-orange">
            {category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((item) => item.category === category)
              .map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-mamamonte-border hover:shadow-md transition-shadow"
                >
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-mamamonte-brown mb-2">{resource.title}</h3>
                  {resource.ageRange && (
                    <div className="inline-block bg-orange-100 text-mamamonte-orange text-xs px-2 py-1 rounded-md mb-2 font-semibold">
                      {resource.ageRange}
                    </div>
                  )}
                  <p className="text-mamamonte-lightBrown text-sm leading-relaxed">{resource.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Download Section */}
      <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6 text-center">📥 다운로드 가능한 자료</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-dashed border-mamamonte-orange rounded-lg text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-mamamonte-brown mb-2">환경 구성 체크리스트</h3>
            <p className="text-sm text-mamamonte-lightBrown mb-4">
              우리 집이 몬테소리 환경인지 확인하는 20개 항목
            </p>
            <button className="px-4 py-2 bg-mamamonte-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
              PDF 다운로드 (준비 중)
            </button>
          </div>

          <div className="p-6 border-2 border-dashed border-mamamonte-orange rounded-lg text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-mamamonte-brown mb-2">민감기 관찰 시트</h3>
            <p className="text-sm text-mamamonte-lightBrown mb-4">
              아이의 민감기를 기록하고 추적하는 양식
            </p>
            <button className="px-4 py-2 bg-mamamonte-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
              PDF 다운로드 (준비 중)
            </button>
          </div>

          <div className="p-6 border-2 border-dashed border-mamamonte-orange rounded-lg text-center">
            <div className="text-4xl mb-3">🕐</div>
            <h3 className="font-bold text-mamamonte-brown mb-2">일일 루틴 차트</h3>
            <p className="text-sm text-mamamonte-lightBrown mb-4">
              아이가 스스로 확인할 수 있는 그림 루틴표
            </p>
            <button className="px-4 py-2 bg-mamamonte-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
              PDF 다운로드 (준비 중)
            </button>
          </div>

          <div className="p-6 border-2 border-dashed border-mamamonte-orange rounded-lg text-center">
            <div className="text-4xl mb-3">😊</div>
            <h3 className="font-bold text-mamamonte-brown mb-2">감정 카드</h3>
            <p className="text-sm text-mamamonte-lightBrown mb-4">
              다양한 감정 표정 카드 (인쇄해서 사용)
            </p>
            <button className="px-4 py-2 bg-mamamonte-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
              PDF 다운로드 (준비 중)
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Shops */}
      <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6">🛒 추천 구매처 (한국)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-mamamonte-border rounded-lg">
            <h3 className="font-bold text-mamamonte-brown mb-2">한국몬테소리</h3>
            <p className="text-sm text-mamamonte-lightBrown">정품 몬테소리 교구</p>
          </div>
          <div className="text-center p-4 border border-mamamonte-border rounded-lg">
            <h3 className="font-bold text-mamamonte-brown mb-2">IKEA</h3>
            <p className="text-sm text-mamamonte-lightBrown">낮은 가구, 수납 용품</p>
          </div>
          <div className="text-center p-4 border border-mamamonte-border rounded-lg">
            <h3 className="font-bold text-mamamonte-brown mb-2">다이소</h3>
            <p className="text-sm text-mamamonte-lightBrown">저렴한 일상 활동 도구</p>
          </div>
        </div>
        <p className="text-center text-sm text-mamamonte-lightBrown mt-4">
          * 마마몽떼는 위 업체들과 제휴 관계가 없으며, 순수 추천입니다.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl shadow-sm border border-mamamonte-border text-center">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-4">더 많은 실전 팁이 궁금하신가요?</h2>
        <p className="text-mamamonte-brown mb-6">
          블로그에서 각 주제별 상세 가이드를 확인하세요.
        </p>
        <a
          href="/blog"
          className="inline-block px-6 py-3 bg-mamamonte-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
        >
          블로그 글 보러가기
        </a>
      </div>
    </div>
  )
}

export default Resources
