import React, { createContext, useContext, useState, useEffect } from 'react'
import _ from 'lodash'

const WindowDimensionsCtx = createContext(null)

const breakpoint = 768

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isDesktop: window.innerWidth > breakpoint,
  })
  useEffect(() => {
    const handleResize = _.throttle(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isDesktop: window.innerWidth > breakpoint,
      })
    }, 500)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  )
}

export default WindowDimensionsProvider
export const useWindowDimensions = () => useContext(WindowDimensionsCtx)
