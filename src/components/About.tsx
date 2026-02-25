import React from 'react'
import SEO from './SEO'

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        title="마마몽떼 소개 - About Us"
        description="마마몽떼는 몬테소리 교육 철학을 기반으로 아이들의 자율성과 독립심을 키우는 교육 센터입니다. 우리의 비전과 교육 방법을 소개합니다."
        keywords="마마몽떼 소개, 몬테소리 센터, 교육 철학, 자율 교육, 아이 중심 교육"
        canonicalPath="/about"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-mamamonte-orange mb-4">마마몽떼 소개</h1>
        <p className="text-xl text-mamamonte-brown">
          아이들의 자율성과 독립심을 키우는 몬테소리 교육 전문 플랫폼
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6">Our Story</h2>
        <div className="space-y-4 text-mamamonte-brown leading-relaxed">
          <p>
            마마몽떼는 '아이들이 스스로 배움의 즐거움을 찾고 주도적으로 성장할 수 있도록 돕는다'는
            몬테소리 교육 철학을 기반으로 시작되었습니다.
          </p>
          <p>
            "아이를 어떻게 키워야 할까?" 많은 부모님들이 고민하는 이 질문에, 우리는 100년 이상
            검증된 몬테소리 교육법이 답이 될 수 있다고 믿습니다.
          </p>
          <p>
            마마몽떼는 단순히 교육 정보를 제공하는 것을 넘어, 부모님들이 실제 가정에서 적용할 수 있는
            실전 가이드와 커뮤니티를 제공합니다.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold text-mamamonte-orange mb-3">아이 중심 교육</h3>
            <p className="text-mamamonte-brown">
              아이를 어른의 축소판이 아닌, 독립적인 인격체로 존중하며
              각자의 발달 속도와 관심사를 존중합니다.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold text-mamamonte-orange mb-3">부모 교육</h3>
            <p className="text-mamamonte-brown">
              부모가 가정에서 몬테소리 철학을 실천할 수 있도록
              구체적이고 실용적인 가이드를 제공합니다.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold text-mamamonte-orange mb-3">환경 구성</h3>
            <p className="text-mamamonte-brown">
              아이가 스스로 탐색하고 배울 수 있는 '준비된 환경'을
              만드는 방법을 구체적으로 안내합니다.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold text-mamamonte-orange mb-3">지속 가능한 성장</h3>
            <p className="text-mamamonte-brown">
              일시적인 기술이 아닌, 평생 가는 자기 주도 학습 능력과
              자존감을 키우는 것을 목표로 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Montessori Principles */}
      <section className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6">몬테소리 핵심 원칙</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-mamamonte-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-mamamonte-brown mb-2">준비된 환경 (Prepared Environment)</h3>
              <p className="text-mamamonte-lightBrown">
                아이가 스스로 선택하고 탐구할 수 있도록 정돈되고 아름다운 환경을 제공합니다.
                모든 물건은 아이 키에 맞춰 배치되며, 활동의 목적이 명확합니다.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-mamamonte-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-mamamonte-brown mb-2">자유 속의 규율 (Freedom within Limits)</h3>
              <p className="text-mamamonte-lightBrown">
                아이에게 선택의 자유를 주되, 명확한 규칙과 경계를 설정합니다.
                이를 통해 아이는 자유와 책임을 동시에 배웁니다.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-mamamonte-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-mamamonte-brown mb-2">관찰과 비간섭 (Observation & Non-interference)</h3>
              <p className="text-mamamonte-lightBrown">
                어른은 관찰자이자 조력자입니다. 아이가 집중하고 있을 때는 방해하지 않으며,
                필요할 때만 최소한으로 개입합니다.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-mamamonte-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-mamamonte-brown mb-2">민감기 활용 (Sensitive Periods)</h3>
              <p className="text-mamamonte-lightBrown">
                특정 시기에 특정 능력을 쉽게 흡수하는 '민감기'를 파악하고,
                그 시기에 맞는 활동과 환경을 제공합니다.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-mamamonte-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
              5
            </div>
            <div>
              <h3 className="text-xl font-bold text-mamamonte-brown mb-2">오류의 자기 정정 (Control of Error)</h3>
              <p className="text-mamamonte-lightBrown">
                어른이 "틀렸어"라고 말하는 것이 아니라, 교구와 활동 자체가
                아이에게 오류를 알려주도록 설계되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-mamamonte-border rounded-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold text-mamamonte-brown mb-2">교육 칼럼</h3>
            <p className="text-sm text-mamamonte-lightBrown">
              전문가가 작성한 몬테소리 교육 칼럼과 실전 가이드
            </p>
          </div>
          <div className="text-center p-6 border border-mamamonte-border rounded-lg">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-bold text-mamamonte-brown mb-2">환경 구성 가이드</h3>
            <p className="text-sm text-mamamonte-lightBrown">
              가정에서 실천 가능한 몬테소리 환경 구성법
            </p>
          </div>
          <div className="text-center p-6 border border-mamamonte-border rounded-lg">
            <div className="text-4xl mb-4">👨‍👩‍👧</div>
            <h3 className="text-lg font-bold text-mamamonte-brown mb-2">육아 솔루션</h3>
            <p className="text-sm text-mamamonte-lightBrown">
              연령별, 상황별 구체적인 육아 문제 해결책
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-6">Our Values</h2>
        <div className="space-y-4 text-mamamonte-brown">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <h3 className="font-bold mb-1">성장 마인드셋</h3>
              <p className="text-mamamonte-lightBrown">
                아이도, 부모도 완벽할 필요 없습니다. 실수는 배움의 기회이며,
                조금씩 나아가는 것이 중요합니다.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">❤️</span>
            <div>
              <h3 className="font-bold mb-1">존중과 공감</h3>
              <p className="text-mamamonte-lightBrown">
                아이를 하나의 인격체로 존중하며, 부모의 어려움에도 공감합니다.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔬</span>
            <div>
              <h3 className="font-bold mb-1">과학적 근거</h3>
              <p className="text-mamamonte-lightBrown">
                100년 이상 검증된 몬테소리 교육법과 최신 발달심리학 연구를 기반으로 합니다.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <h3 className="font-bold mb-1">다문화 존중</h3>
              <p className="text-mamamonte-lightBrown">
                한국어, 영어, 일본어를 지원하며 전 세계 부모님들과 교육 철학을 공유합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl shadow-sm border border-mamamonte-border text-center">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-4">함께 성장해요</h2>
        <p className="text-mamamonte-brown mb-6">
          마마몽떼와 함께 아이의 자율성과 독립심을 키워보세요.<br />
          더 나은 교육 콘텐츠를 만들기 위해 여러분의 의견을 기다립니다.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/blog"
            className="px-6 py-3 bg-mamamonte-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
          >
            블로그 둘러보기
          </a>
          <a
            href="/parenting-tips"
            className="px-6 py-3 bg-white text-mamamonte-orange border-2 border-mamamonte-orange rounded-full font-bold hover:bg-orange-50 transition-colors"
          >
            육아 팁 보기
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
