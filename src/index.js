import { useRef } from 'react'

const refMap = new Map()

const getRef = (key) => {
  return refMap.get(key)
}

const setRef = (key, initialValue = null) => {
  const ref = useRef(initialValue)
  refMap.set(key, ref)
  return ref
}

const useRefMap = () => {
  return {
    getRef,
    setRef,
    refMap,
  }
}

export default useRefMap
