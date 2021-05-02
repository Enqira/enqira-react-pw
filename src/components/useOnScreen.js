import { useState, useEffect } from "react"
import { useIntersection } from "react-use"

export default function useOnScreen(ref) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [styleValue, setStyleValue] = useState({})

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })
  useEffect(() => {
    if (isLoaded === false) {
      if (intersection && intersection.intersectionRatio >= 0.3) {
        setStyleValue({
          opacity: "1",
          transform: "translateY(0) translateX(0)"
        })
        setIsLoaded(true)
      }
    }
  }, [isLoaded, intersection, styleValue])

  return styleValue
}
