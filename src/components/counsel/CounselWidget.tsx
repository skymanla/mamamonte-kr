import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useChatSession } from './useChatSession'

/**
 * 마마몽떼 육아 상담 위젯.
 * - 모든 페이지 우하단에 떠 있는 런처 버튼 → 탭하면 상담 패널이 열린다.
 * - 모바일: 화면을 가득 채우는 시트 / sm 이상: 우하단 카드.
 * - 페르소나 '도담' (따뜻한 육아 상담). 응답의 followUps 는 탭 가능한 칩으로 노출.
 * - framer-motion 등 추가 의존성 없이 CSS 애니메이션(App.css)만 사용.
 */
export default function CounselWidget() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {!open && <Launcher onOpen={() => setOpen(true)} />}
      {open && <CounselPanel onClose={() => setOpen(false)} />}
    </>
  )
}

function Launcher({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="마마몽떼 육아 상담 열기"
      className="counsel-pulse fixed right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-mamamonte-orange text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
      style={{ bottom: 'max(env(safe-area-inset-bottom), 1.25rem)' }}
    >
      <ChatIcon />
    </button>
  )
}

function CounselPanel({ onClose }: { onClose: () => void }) {
  const { messages, status, send, reset } = useChatSession()
  const [value, setValue] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const isBusy = status === 'thinking' || status === 'restoring'

  // 새 메시지/상태 변화 시 맨 아래로 스크롤.
  useLayoutEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, status])

  // 열릴 때 입력창 포커스 + Esc 로 닫기.
  useEffect(() => {
    textareaRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // 입력창 자동 높이.
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }, [value])

  const submit = (text?: string) => {
    const v = (text ?? value).trim()
    if (!v || isBusy) return
    send(v)
    setValue('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault()
      submit()
    }
  }

  const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant')
  const followUps = !isBusy && lastAssistant?.followUps ? lastAssistant.followUps : []

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="마마몽떼 육아 상담"
      className="counsel-sheet-up fixed inset-0 z-[90] flex flex-col bg-mamamonte-bg sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[600px] sm:max-h-[85vh] sm:w-[380px] sm:rounded-3xl sm:border sm:border-mamamonte-border sm:shadow-2xl sm:overflow-hidden"
    >
      {/* 헤더 */}
      <header className="flex items-center gap-3 border-b border-mamamonte-border/60 bg-white/80 px-4 py-3 backdrop-blur-sm">
        <CounselorAvatar />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-mamamonte-brown">도담 · 마마몽떼 상담</p>
          <p className="truncate text-[11px] text-mamamonte-lightBrown">
            {status === 'thinking'
              ? '도담쌤이 마음을 살피는 중…'
              : status === 'restoring'
                ? '이전 이야기를 불러오는 중…'
                : '아이와 나의 마음을 함께 나눠요'}
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-full px-2.5 py-1 text-[11px] font-medium text-mamamonte-lightBrown transition-colors hover:bg-mamamonte-border/40"
          aria-label="새 대화 시작"
        >
          새 대화
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="상담 닫기"
          className="flex h-8 w-8 items-center justify-center rounded-full text-mamamonte-lightBrown transition-colors hover:bg-mamamonte-border/40"
        >
          <CloseIcon />
        </button>
      </header>

      {/* 메시지 */}
      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <Bubble key={m.id} role={m.role} isError={m.isError}>
            {m.content}
          </Bubble>
        ))}
        {status === 'thinking' && <TypingBubble />}
      </div>

      {/* 후속 제안 칩 */}
      {followUps.length > 0 && (
        <div className="flex flex-wrap gap-2 px-4 pb-1">
          {followUps.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => submit(f)}
              className="counsel-pop-in rounded-full border border-mamamonte-border bg-white px-3 py-1.5 text-xs text-mamamonte-brown transition-colors hover:bg-mamamonte-orange/10"
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* 입력 */}
      <div
        className="border-t border-mamamonte-border/60 bg-white/80 px-3 pt-2.5 backdrop-blur-sm"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0.625rem)' }}
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            disabled={status === 'restoring'}
            placeholder={status === 'restoring' ? '이전 대화를 불러오는 중…' : '여기에 마음을 적어보세요…'}
            aria-label="상담 메시지 입력"
            className="max-h-[120px] min-h-[40px] flex-1 resize-none rounded-2xl border border-mamamonte-border bg-white px-3 py-2 text-sm leading-relaxed text-mamamonte-brown outline-none placeholder:text-mamamonte-lightBrown/70 focus:border-mamamonte-orange"
          />
          <button
            type="button"
            onClick={() => submit()}
            disabled={isBusy || !value.trim()}
            aria-label="보내기"
            className={
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ' +
              (isBusy || !value.trim()
                ? 'cursor-not-allowed bg-mamamonte-border text-white/70'
                : 'bg-mamamonte-orange text-white hover:brightness-105 active:scale-95')
            }
          >
            <SendIcon />
          </button>
        </div>
        <p className="mt-1 px-1 text-center text-[10px] text-mamamonte-lightBrown/70">
          Enter 전송 · Shift+Enter 줄바꿈
        </p>
      </div>
    </div>
  )
}

function Bubble({
  role,
  isError,
  children,
}: {
  role: 'user' | 'assistant'
  isError?: boolean
  children: React.ReactNode
}) {
  const isUser = role === 'user'
  return (
    <div className={'flex ' + (isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={
          'counsel-pop-in max-w-[82%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm leading-relaxed [overflow-wrap:anywhere] ' +
          (isUser
            ? 'rounded-br-md bg-mamamonte-orange text-white'
            : isError
              ? 'rounded-bl-md bg-red-50 text-red-700 ring-1 ring-red-100'
              : 'rounded-bl-md bg-white text-mamamonte-brown ring-1 ring-mamamonte-border')
        }
      >
        {children}
      </div>
    </div>
  )
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 ring-1 ring-mamamonte-border">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="counsel-dot h-1.5 w-1.5 rounded-full bg-mamamonte-orange"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}

function CounselorAvatar() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mamamonte-orange to-[#ffb74d] shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="9.5" r="4.5" fill="#fff" opacity="0.95" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" fill="#fff" opacity="0.95" />
        <path d="M10 9.2q2 1.4 4 0" stroke="#f57c00" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  )
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H9l-4 3.5V16H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"
        fill="currentColor"
      />
      <circle cx="9" cy="10" r="1.1" fill="#f57c00" />
      <circle cx="12.5" cy="10" r="1.1" fill="#f57c00" />
      <circle cx="16" cy="10" r="1.1" fill="#f57c00" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3.4 20.4 21 12 3.4 3.6 3.4 10.2 16 12 3.4 13.8Z" fill="currentColor" />
    </svg>
  )
}
