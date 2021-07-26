import { useRef, useEffect, useState } from 'react'

export default function useIntersectionObserver() {
  const lastRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    })
    if (lastRef.current) {
      observer.observe(lastRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [lastRef])

  return { lastRef, visible }
}
