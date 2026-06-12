'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { formatDate } from '@/src/shared/lib/formatDate'

export const Author = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname === '/' && (
        <div className="flex gap-x-3 py-8 border-t border-[#C7C4D7] animate-fade-slide-up">
          <Image
            src="/assets/author.png"
            alt="author"
            width={50}
            height={50}
            style={{ borderRadius: '50%', border: '1px solid #C7C4D7' }}
          />

          <div className="flex flex-col">
            <h3>Оганес Маркарян-Тридрих</h3>
            <h4>Опыт коммерческой разработки {formatDate(new Date())}</h4>
          </div>
        </div>
      )}
    </>
  )
}
