import { ComponentType, lazy } from 'react'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  component: ComponentType<any>
}

const concentrationdevelopmentguidemdxComponent = lazy(() => import('../posts/concentration-development-guide.mdx'));
const emotionalintelligenceguidemdxComponent = lazy(() => import('../posts/emotional-intelligence-guide.mdx'));
const independencekidsdressingmdxComponent = lazy(() => import('../posts/independence-kids-dressing.mdx'));
const montessorienvironmentguidemdxComponent = lazy(() => import('../posts/montessori-environment-guide.mdx'));
const montessorimaterialsvstoysmdxComponent = lazy(() => import('../posts/montessori-materials-vs-toys.mdx'));
const outdoorplayimportancemdxComponent = lazy(() => import('../posts/outdoor-play-importance.mdx'));
const pickyeatersolutionsmdxComponent = lazy(() => import('../posts/picky-eater-solutions.mdx'));
const pottytrainingsuccessmdxComponent = lazy(() => import('../posts/potty-training-success.mdx'));
const readinghabitbefore7mdxComponent = lazy(() => import('../posts/reading-habit-before-7.mdx'));
const screentimemanagementmdxComponent = lazy(() => import('../posts/screen-time-management.mdx'));
const sensitiveperiodsguidemdxComponent = lazy(() => import('../posts/sensitive-periods-guide.mdx'));
const siblingharmonyguidemdxComponent = lazy(() => import('../posts/sibling-harmony-guide.mdx'));
const significanceofpracticallifemdxComponent = lazy(() => import('../posts/significance-of-practical-life.mdx'));
const sleeptrainingmontessoriwaymdxComponent = lazy(() => import('../posts/sleep-training-montessori-way.mdx'));
const tantrumsolution3stepsmdxComponent = lazy(() => import('../posts/tantrum-solution-3steps.mdx'));

export const blogPosts: BlogPost[] = [
  {
    id: "concentration-development-guide",
    title: "집중력이 폭발하는 순간: 몬테소리 집중현상과 부모의 역할",
    excerpt: "아이가 한 가지에 깊이 몰입하는 모습을 본 적 있나요? 이것이 바로 '집중현상(Polarization of Attention)'입니다. 방해하지 말고 지켜보세요.",
    date: "2026-02-03",
    category: "발달 이해",
    author: "마마몽떼 에디터",
    component: concentrationdevelopmentguidemdxComponent
  },
  {
    id: "emotional-intelligence-guide",
    title: "감정 지능(EQ) 높은 아이로 키우는 5단계",
    excerpt: "IQ보다 EQ가 성공을 결정합니다. 감정을 인식하고 조절하며 타인과 공감하는 능력, 어릴 때부터 키우는 실전 감정 코칭 가이드입니다.",
    date: "2026-02-09",
    category: "정서 교육",
    author: "마마몽떼 에디터",
    component: emotionalintelligenceguidemdxComponent
  },
  {
    id: "independence-kids-dressing",
    title: "3~5세 자율성 기르기: 옷 입기부터 시작하는 법",
    excerpt: "아침마다 옷 입히기 전쟁, 혹시 부모님이 다 해주고 계신가요? 아이 혼자 옷을 입는 것은 단순한 생활 습관을 넘어 자존감을 높이는 최고의 교육입니다.",
    date: "2026-01-26",
    category: "자율성 발달",
    author: "마마몽떼 에디터",
    component: independencekidsdressingmdxComponent
  },
  {
    id: "montessori-environment-guide",
    title: "몬테소리 환경 구성: 거실과 아이 방 배치 완벽 가이드",
    excerpt: "아이의 자율성을 키워주는 몬테소리 환경, 어떻게 만들어야 할까요? 거실부터 아이 방까지, 발달 단계에 맞춘 가구 배치와 교구 정리 노하우를 공개합니다.",
    date: "2026-01-24",
    category: "환경 구성",
    author: "마마몽떼 에디터",
    component: montessorienvironmentguidemdxComponent
  },
  {
    id: "montessori-materials-vs-toys",
    title: "장난감 대신 교구? 몬테소리 교구의 특징과 선택법",
    excerpt: "화려하고 소리 나는 장난감 vs 단순한 원목 교구. 무엇이 다를까요? 몬테소리 교구(Work)가 일반 장난감(Play)과 구별되는 4가지 핵심 특징을 알아봅니다.",
    date: "2026-01-28",
    category: "교구 선택",
    author: "마마몽떼 에디터",
    component: montessorimaterialsvstoysmdxComponent
  },
  {
    id: "outdoor-play-importance",
    title: "바깥놀이가 답이다: 실외 활동이 아이를 바꾸는 이유",
    excerpt: "하루 30분 바깥 놀이가 학습지 10장보다 낫습니다. 대근육 발달, 집중력, 면역력까지 키우는 실외 활동의 놀라운 효과와 연령별 가이드입니다.",
    date: "2026-02-13",
    category: "신체 발달",
    author: "마마몽떼 에디터",
    component: outdoorplayimportancemdxComponent
  },
  {
    id: "picky-eater-solutions",
    title: "편식하는 아이, 식사 전쟁 끝내는 5가지 전략",
    excerpt: "밥 먹이기가 매일 전쟁인가요? 강요와 협박 대신, 아이 스스로 건강한 식습관을 만들어가는 몬테소리 식사 교육법을 소개합니다.",
    date: "2026-02-18",
    category: "식사 교육",
    author: "마마몽떼 에디터",
    component: pickyeatersolutionsmdxComponent
  },
  {
    id: "potty-training-success",
    title: "배변 훈련 성공 로드맵: 3일 만에 기저귀 뗀 비결",
    excerpt: "배변 훈련, 언제 어떻게 시작할까요? 아이의 준비 신호부터 실패 없는 3일 집중 훈련법, 야간 훈련까지 모든 것을 담았습니다.",
    date: "2026-02-20",
    category: "생활 습관",
    author: "마마몽떼 에디터",
    component: pottytrainingsuccessmdxComponent
  },
  {
    id: "reading-habit-before-7",
    title: "7세 전 독서 습관: 책을 사랑하는 아이로 키우는 법",
    excerpt: "책 읽기를 강요하면 오히려 책을 싫어하게 됩니다. 영유아기부터 자연스럽게 책과 친해지는 환경 구성법과 발달 단계별 독서 가이드를 소개합니다.",
    date: "2026-02-07",
    category: "언어 발달",
    author: "마마몽떼 에디터",
    component: readinghabitbefore7mdxComponent
  },
  {
    id: "screen-time-management",
    title: "디지털 시대 자녀 교육: 스크린 타임 관리 실전 가이드",
    excerpt: "TV, 유튜브, 태블릿... 스크린을 완전히 차단할 수도, 무제한 허용할 수도 없는 부모들을 위한 현실적인 스크린 타임 관리법입니다.",
    date: "2026-02-22",
    category: "미디어 교육",
    author: "마마몽떼 에디터",
    component: screentimemanagementmdxComponent
  },
  {
    id: "sensitive-periods-guide",
    title: "민감기를 놓치지 마세요: 발달의 황금기 완벽 가이드",
    excerpt: "아이가 계단만 오르내리거나, 문만 열고 닫거나, 질서에 집착한다면? 바로 민감기입니다. 시기별 민감기와 적절한 대응법을 알아봅니다.",
    date: "2026-02-15",
    category: "발달 이해",
    author: "마마몽떼 에디터",
    component: sensitiveperiodsguidemdxComponent
  },
  {
    id: "sibling-harmony-guide",
    title: "형제 육아의 기술: 싸움 줄이고 우애 키우는 법",
    excerpt: "하루 종일 싸우는 형제자매 때문에 지치셨나요? 질투와 경쟁 대신 협력과 유대감을 키우는 몬테소리 형제 육아 솔루션입니다.",
    date: "2026-02-26",
    category: "형제 육아",
    author: "마마몽떼 에디터",
    component: siblingharmonyguidemdxComponent
  },
  {
    id: "significance-of-practical-life",
    title: "\"혼자 할 수 있어요\": 몬테소리 일상 영역의 중요성",
    excerpt: "몬테소리 교육의 꽃은 교구가 아니라 '일상 생활'에 있습니다. 아이가 집안일에 참여하고 싶어할 때가 기회입니다. 소근육 발달과 집중력을 키우는 일상 영역 활동을 소개합니다.",
    date: "2026-01-27",
    category: "일상 영역",
    author: "마마몽떼 에디터",
    component: significanceofpracticallifemdxComponent
  },
  {
    id: "sleep-training-montessori-way",
    title: "스스로 잠드는 아이: 몬테소리 수면 교육의 모든 것",
    excerpt: "재우기 전쟁에서 벗어나고 싶으신가요? 바닥 침대, 일관된 루틴, 독립적 수면 습관까지 몬테소리 방식의 수면 교육 완벽 가이드입니다.",
    date: "2026-02-11",
    category: "수면 교육",
    author: "마마몽떼 에디터",
    component: sleeptrainingmontessoriwaymdxComponent
  },
  {
    id: "tantrum-solution-3steps",
    title: "아이가 떼쓸 때 부모의 대처법: 3단계 솔루션",
    excerpt: "마트에서 드러눕는 아이, 무조건 훈육이 답일까요? 몬테소리 철학에 기반한 '단호하지만 부드러운' 훈육의 기술 3단계를 소개합니다.",
    date: "2026-01-25",
    category: "훈육 가이드",
    author: "마마몽떼 에디터",
    component: tantrumsolution3stepsmdxComponent
  }
];
