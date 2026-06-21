'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { formatDate } from '@/src/shared/lib/formatDate'
import { Typography } from '@/src/shared/ui/Typography/Typography'

export const Author = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname === '/' && (
        <div className="flex flex-col lg:flex-row gap-x-3 py-8 border-t border-[#C7C4D7] lg:animate-fade-slide-up">
          <Image
            src="/assets/author.png"
            alt="author"
            width={50}
            height={50}
            style={{ borderRadius: '50%', border: '1px solid #C7C4D7' }}
          />

          <div className="flex flex-col">
            <Typography as="h3" variant="normal" size="14-16">
              Оганес Маркарян-Тридрих
            </Typography>
            <h4>Опыт коммерческой разработки {formatDate(new Date())}</h4>
          </div>
        </div>
      )}
    </>
  )
}
