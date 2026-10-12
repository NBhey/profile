import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from 'react'

export const useCloseModal = (
  onClose: Dispatch<SetStateAction<string | null>>,
) => {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const mount = (event: MouseEvent) => {
      event.preventDefault()

      if (!ref.current?.contains(event.target as Node)) {
        onClose?.(null)
      }
    }

    document.addEventListener('click', mount)

    return () => {
      document.removeEventListener('click', mount)
    }
  }, [])

  return { ref }
}
