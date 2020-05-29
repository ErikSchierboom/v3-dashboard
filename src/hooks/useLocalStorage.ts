import { useEffect, useState } from 'react'

export function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    const localStorageValue = window.localStorage.getItem(key)
    return localStorageValue !== null
      ? JSON.parse(localStorageValue)
      : defaultValue
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [setValue])
  return [value, setValue]
}
