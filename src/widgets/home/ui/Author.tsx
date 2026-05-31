'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { formatDate } from '@/src/shared/lib/formatDate'

const startCommercialWorkYear = 2025
const currentYear = new Date().getFullYear()
const resultYear = currentYear - startCommercialWorkYear

export const Author = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname === '/' && (
        <div className="py-8 border-t border-[#C7C4D7]">
          <Image
            src="/assets/author.png"
            alt="author"
            width={50}
            height={50}
            style={{ borderRadius: '50%', border: '1px solid #C7C4D7' }}
          />

          <div className="flex flex-col">
            <h3>Оганес Маркарян-Тридрих</h3>
            <h4>
              Опыт коммерческой разработки {resultYear}{' '}
              {formatDate(resultYear)}{' '}
            </h4>
          </div>
        </div>
      )}
    </>
  )
}
