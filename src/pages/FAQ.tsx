import React, { useState } from 'react'
import SEO from '../components/SEO'

interface FAQItem {
  category: string
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData: FAQItem[] = [
    // 몬테소리 교육 일반
    {
      category: '몬테소리 교육',
      question: '몬테소리 교육이 무엇인가요?',
      answer:
        '몬테소리 교육은 이탈리아 의사이자 교육자인 마리아 몬테소리가 개발한 교육법으로, 아이를 독립적인 인격체로 존중하고 스스로 배울 수 있는 환경을 제공하는 것이 핵심입니다. "아이를 따라가라(Follow the child)"는 철학 아래, 아이의 발달 단계와 관심사에 맞춰 교육이 이루어집니다.',
    },
    {
      category: '몬테소리 교육',
      question: '일반 유치원과 몬테소리 유치원의 차이는 무엇인가요?',
      answer:
        '일반 유치원은 교사 주도로 전체 아이들이 같은 활동을 하지만, 몬테소리 유치원은 아이가 스스로 활동을 선택하고 자신의 속도로 진행합니다. 교사는 가르치는 사람이 아닌 관찰자이자 조력자 역할을 하며, 혼합 연령 학급으로 운영되는 것이 특징입니다.',
    },
    {
      category: '몬테소리 교육',
      question: '몬테소리 교육은 집에서도 할 수 있나요?',
      answer:
        '네, 가능합니다! 몬테소리 교육의 핵심은 비싼 교구가 아니라 "준비된 환경"과 "아이 존중"입니다. 아이 키에 맞는 가구 배치, 스스로 할 수 있는 기회 제공, 관찰과 비간섭 등은 가정에서도 충분히 실천 가능합니다.',
    },

    // 연령별 질문
    {
      category: '연령별 교육',
      question: '몇 살부터 몬테소리 교육을 시작할 수 있나요?',
      answer:
        '출생부터 가능합니다. 0~3세는 무의식적 흡수기로 환경의 모든 것을 스펀지처럼 흡수하는 시기입니다. 바닥 침대, 모빌, 자유로운 움직임 등 신생아 때부터 몬테소리 원칙을 적용할 수 있습니다.',
    },
    {
      category: '연령별 교육',
      question: '초등학교 입학 전까지만 효과가 있나요?',
      answer:
        '아닙니다. 몬테소리 교육은 0~24세까지 연령별 커리큘럼이 있으며, 특히 0~6세 유아기에 가장 중요한 기초를 형성합니다. 초등학교 이후에도 자기 주도 학습, 문제 해결 능력, 독립심 등은 평생 가는 능력입니다.',
    },

    // 환경 구성
    {
      category: '환경 구성',
      question: '좁은 집인데도 몬테소리 환경을 만들 수 있나요?',
      answer:
        '네! 공간의 크기보다 질이 중요합니다. 작은 코너라도 아이 눈높이의 낮은 선반 하나, 작은 러그 하나로 시작할 수 있습니다. 아이가 스스로 접근하고 선택할 수 있는 환경이 핵심입니다.',
    },
    {
      category: '환경 구성',
      question: '교구를 꼭 사야 하나요?',
      answer:
        '아닙니다. 집에 있는 일상 도구들이 최고의 교구입니다. 진짜 숟가락, 진짜 유리컵, 빗자루, 걸레 등으로 충분하며, DIY로 만들 수 있는 활동도 많습니다. 비싼 정품 교구가 아니어도 원리만 이해하면 됩니다.',
    },
    {
      category: '환경 구성',
      question: '교구를 몇 개나 진열해야 하나요?',
      answer:
        '한 번에 5~7개 정도가 적당합니다. 너무 많으면 아이가 선택 장애에 빠지고 산만해집니다. 2~4주마다 순환(Rotation)하여 아이의 흥미를 유지하세요.',
    },

    // 훈육과 행동
    {
      category: '훈육과 행동',
      question: '아이가 떼를 쓸 때 어떻게 해야 하나요?',
      answer:
        '3단계 접근법을 사용하세요: 1) 감정 읽어주기 (공감), 2) 단호한 제한 설정 (경계), 3) 대안 제시하기 (선택권). 감정은 수용하되 부적절한 행동은 제한하는 것이 핵심입니다.',
    },
    {
      category: '훈육과 행동',
      question: '체벌은 절대 안 되나요?',
      answer:
        '네, 몬테소리 교육에서 체벌은 금지입니다. 체벌은 아이의 자존감을 해치고 문제 해결 방법을 가르치지 못합니다. 대신 자연적 결과, 논리적 결과, 타임인(벌이 아닌 함께 진정하기) 등을 활용하세요.',
    },
    {
      category: '훈육과 행동',
      question: '형제가 너무 자주 싸워요.',
      answer:
        '형제 간 갈등은 정상이며 사회성을 배우는 과정입니다. 부모는 중립적 심판 역할을 하며, 신체적 폭력만 즉시 중단시키고 나머지는 아이들이 스스로 해결하도록 도와주세요.',
    },

    // 일상 생활
    {
      category: '일상 생활',
      question: '아이가 밥을 안 먹어요.',
      answer:
        '강요하지 마세요. 식사 책임을 분담하세요: 부모는 "무엇을, 언제, 어디서" 제공할지 결정하고, 아이는 "먹을지, 얼마나 먹을지" 결정합니다. 1~2끼 거른다고 문제없으며, 장기적으로 건강한 식사 관계를 만드는 것이 중요합니다.',
    },
    {
      category: '일상 생활',
      question: '배변 훈련은 언제 시작하나요?',
      answer:
        '아이의 준비 신호를 보고 시작하세요. 평균 24~36개월이지만 개인차가 큽니다. 준비 신호: 2~3시간 기저귀 마름, 규칙적 배변, 간단한 지시 이해, 옷 벗기 시도 등이 보이면 시작 가능합니다.',
    },
    {
      category: '일상 생활',
      question: '잠을 안 자려고 해요.',
      answer:
        '일관된 수면 루틴이 핵심입니다. 목욕 → 잠옷 → 책 읽기 → 굿나잇 의식 → 침대 순서를 매일 같은 시간에 반복하세요. 바닥 침대를 사용하면 아이가 스스로 잠들기를 배울 수 있습니다.',
    },

    // 학습과 발달
    {
      category: '학습과 발달',
      question: '한글은 언제 가르쳐야 하나요?',
      answer:
        '강요하지 말고 자연스럽게 노출하세요. 4~5세경 글자에 관심을 보이기 시작하며, 5~6세에 본격적으로 읽기 시작합니다. 너무 이른 한글 교육은 책을 "읽어야 할 것"으로 만들어 독서를 싫어하게 할 수 있습니다.',
    },
    {
      category: '학습과 발달',
      question: '집중력이 짧은데 문제인가요?',
      answer:
        '연령에 따라 다릅니다. 2세는 5~10분, 3세는 15~20분, 4세 이상은 30분~1시간 집중 가능합니다. 스크린 노출이 많으면 집중력이 짧아질 수 있으니 주의하세요.',
    },
    {
      category: '학습과 발달',
      question: '민감기를 놓치면 어떻게 되나요?',
      answer:
        '완전히 놓친 것은 아닙니다. 나중에도 배울 수 있지만 더 많은 노력이 필요합니다. 예를 들어 언어 민감기(0~6세)를 놓치면 외국어 습득이 어려워지지만 불가능한 것은 아닙니다.',
    },

    // 디지털과 스크린
    {
      category: '디지털 시대',
      question: 'TV와 스마트폰은 완전히 금지해야 하나요?',
      answer:
        '현실적으로 불가능하며 필요하지도 않습니다. 중요한 것은 적절한 관리입니다. AAP 권장: 18개월 미만 금지, 2~5세 하루 1시간, 6세 이상 2시간 이내. 부모와 함께 시청하고 대화하는 것이 중요합니다.',
    },
    {
      category: '디지털 시대',
      question: '교육용 앱은 괜찮나요?',
      answer:
        '스크린 타임에 포함됩니다. 단, 창의적 활용(그림 그리기, 음악 만들기) 앱은 수동적 시청보다 낫습니다. 핵심은 스크린 < 실제 활동이어야 한다는 것입니다.',
    },

    // 부모의 역할
    {
      category: '부모의 역할',
      question: '부모가 완벽해야 하나요?',
      answer:
        '아닙니다! 완벽한 부모는 없으며, 아이에게도 불필요합니다. 중요한 것은 방향입니다. 실수했다면 아이에게 사과하고, "다음엔 더 잘할게"라고 말하는 것도 훌륭한 모델링입니다.',
    },
    {
      category: '부모의 역할',
      question: '맞벌이인데 몬테소리 교육이 가능한가요?',
      answer:
        '가능합니다. 시간의 양보다 질이 중요합니다. 퇴근 후 30분이라도 아이와 집중해서 놀아주고, 주말에는 자연에서 시간을 보내세요. 환경 구성은 한 번만 해두면 지속되므로 효율적입니다.',
    },
    {
      category: '부모의 역할',
      question: '할머니, 할아버지와 양육 방식이 달라요.',
      answer:
        '양육자 간 사전 합의가 중요합니다. 핵심 규칙 3~5개만 공유하고, 세세한 것은 각자의 방식을 존중하세요. 정중히 설명하되, 강요하지 마세요.',
    },

    // 기타
    {
      category: '기타',
      question: '몬테소리 교육은 비싼가요?',
      answer:
        '몬테소리 유치원은 상대적으로 고가이지만, 가정에서의 몬테소리 교육은 무료에 가깝습니다. 비싼 교구가 아니라 철학과 태도가 핵심이며, 도서관, 자연, 집안의 일상 도구만으로도 충분합니다.',
    },
    {
      category: '기타',
      question: '몬테소리 교육을 받으면 학교 적응이 어렵다던데요?',
      answer:
        '연구 결과 오히려 반대입니다. 몬테소리 교육을 받은 아이들은 자기 주도성, 집중력, 사회성이 뛰어나 학교 적응이 더 빠릅니다. 단, 전환기(유치원→초등)에는 부모의 도움이 필요할 수 있습니다.',
    },
  ]

  const categories = Array.from(new Set(faqData.map((item) => item.category)))

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        title="자주 묻는 질문 (FAQ) - 마마몽떼"
        description="몬테소리 교육, 환경 구성, 훈육, 일상 생활 등 부모님들이 가장 많이 묻는 질문과 답변을 정리했습니다."
        keywords="몬테소리 FAQ, 육아 질문, 몬테소리 교육 질문, 환경 구성, 훈육 방법"
        canonicalPath="/faq"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-mamamonte-orange mb-4">자주 묻는 질문 (FAQ)</h1>
        <p className="text-xl text-mamamonte-brown">
          부모님들이 가장 많이 궁금해하시는 질문들을 정리했습니다
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-white border-2 border-mamamonte-border rounded-full text-mamamonte-brown font-semibold hover:bg-mamamonte-orange hover:text-white hover:border-mamamonte-orange transition-all"
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items by Category */}
      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-bold text-mamamonte-orange mb-4 pb-2 border-b-2 border-mamamonte-orange">
            {category}
          </h2>
          <div className="space-y-3">
            {faqData
              .map((item, index) => ({ ...item, originalIndex: index }))
              .filter((item) => item.category === category)
              .map(({ question, answer, originalIndex }) => (
                <div
                  key={originalIndex}
                  className="bg-white rounded-lg shadow-sm border border-mamamonte-border overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(originalIndex)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-orange-50 transition-colors"
                  >
                    <span className="font-bold text-mamamonte-brown pr-4">Q. {question}</span>
                    <span className="text-2xl text-mamamonte-orange flex-shrink-0">
                      {openIndex === originalIndex ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === originalIndex && (
                    <div className="px-6 py-4 bg-orange-50 border-t border-mamamonte-border">
                      <p className="text-mamamonte-brown leading-relaxed">
                        <span className="font-bold text-mamamonte-orange">A. </span>
                        {answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Contact CTA */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl shadow-sm border border-mamamonte-border text-center">
        <h2 className="text-2xl font-bold text-mamamonte-orange mb-4">더 궁금한 점이 있으신가요?</h2>
        <p className="text-mamamonte-brown mb-6">
          블로그 글에서 더 자세한 내용을 확인하시거나,<br />
          커뮤니티에서 다른 부모님들과 정보를 나눠보세요.
        </p>
        <a
          href="/blog"
          className="inline-block px-6 py-3 bg-mamamonte-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
        >
          블로그 글 더 보기
        </a>
      </div>
    </div>
  )
}

export default FAQ
