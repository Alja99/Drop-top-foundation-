import { useEffect, useState } from 'react'

const AnimatedCounter = ({ start = 0, end, duration = 1200, prefix = '', suffix = '' }) => {
  const [value, setValue] = useState(start)

  useEffect(() => {
    let frameId = null
    const startTime = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frameId)
  }, [start, end, duration])

  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
