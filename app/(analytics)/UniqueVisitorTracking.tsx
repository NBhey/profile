'use client'

import { createCookies } from '@/app/(analytics)/cookies/createUniqueUserCookie'
import { useEffect } from 'react'

export default function UniqueVisitorTracking() {
  useEffect(() => {
    createCookies().then(() => {})
  }, [])

  return null
}
