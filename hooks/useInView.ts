import { useEffect, useRef, useState, MutableRefObject } from 'react'

const useInView = (
  threshold = 0.3
): [boolean, MutableRefObject<HTMLElement | null>] => {
  const [isInView, setIsInView] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target) // Stop observing once the animation is triggered
          }
        })
      },
      { threshold }
    )

    const currentElement = elementRef.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  return [isInView, elementRef]
}

export default useInView
