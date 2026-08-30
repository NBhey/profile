'use client'

import Image from 'next/image'
import { Typography } from '@/src/shared/ui/Typography/Typography'

export const Author = () => {
  return (
    <>
      <div className=" flex flex-col gap-2">
        <Typography as="h1" variant="bold" size="16-18">
          Оганес М.-Т.
        </Typography>

        <Typography
          as="h3"
          variant="normal"
          size="12-14"
          className="uppercase text-secondary tracking-[5px]"
        >
          Frontend разработчик
        </Typography>
      </div>
      <Image
        src="/assets/author.png"
        alt="author"
        width={50}
        height={50}
        style={{ borderRadius: '50%', border: '1px solid #C7C4D7' }}
        loading="eager"
      />
    </>
  )
}
