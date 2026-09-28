import { ReactNode } from 'react'
import { Typography } from '@/src/shared/ui/Typography/Typography'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="py-2 px-3">{children}</div>
}

export default function Projects() {
  return (
    <>
      <Wrapper>
        <Typography
          as="h3"
          variant="normal"
          size="12-14"
          className="uppercase text-grey-text tracking-[5px]"
        >
          Проекты
        </Typography>
      </Wrapper>

      <Wrapper>
        <Typography as="h2" size="24-32" variant="semibold">
          Что я собрал?
        </Typography>
      </Wrapper>
    </>
  )
}
