import { useEffect, useRef, useCallback, useState } from 'react'

/**
 * useScrollReveal
 * Attach the returned ref to a container.  All descendant elements with
 * class `reveal`, `reveal-left`, `reveal-right`, `reveal-scale`,
 * `step-line`, `stat-pop`, or `road-path` will have `visible` added when
 * they scroll into view.
 */
export function useScrollReveal(rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const selector = '.reveal,.reveal-left,.reveal-right,.reveal-scale,.step-line,.stat-pop,.road-path'
    const targets = el.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { rootMargin, threshold: 0.1 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [rootMargin])

  return ref
}

/**
 * useTilt
 * Returns a ref to attach to any card element for 3-D perspective tilt.
 */
export function useTilt(maxDeg = 8) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    const rotX = ((y - height / 2) / (height / 2)) * -maxDeg
    const rotY = ((x - width  / 2) / (width  / 2)) *  maxDeg
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`
    el.style.transition = 'transform 0.1s ease-out'
  }, [maxDeg])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [onMove, onLeave])

  return ref
}

/**
 * useTypewriter
 * Cycles through an array of strings with a typing + deleting effect.
 * Returns the current display string.
 */
export function useTypewriter(words, speed = 75, pause = 1800) {
  const [text, setText] = useState('')
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    if (!words.length) return
    let timer

    const tick = () => {
      const s = state.current
      const word = words[s.wordIdx % words.length]

      if (s.deleting) {
        s.charIdx = Math.max(0, s.charIdx - 1)
        setText(word.slice(0, s.charIdx))
      } else {
        s.charIdx = Math.min(word.length, s.charIdx + 1)
        setText(word.slice(0, s.charIdx))
      }

      let delay = speed
      if (!s.deleting && s.charIdx === word.length) {
        delay = pause
        s.deleting = true
      } else if (s.deleting && s.charIdx === 0) {
        s.deleting = false
        s.wordIdx++
        delay = 350
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [words, speed, pause])

  return text
}
