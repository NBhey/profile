import { Typography } from '@/src/shared/ui/Typography/Typography'
import clsx from 'clsx'

export const Title = ({ classname }: { classname?: string }) => {
  return (
    <div className={clsx('self-start pb-12 flex flex-col gap-y-2 items-start')}>
      <Typography as="h1" variant="bold" size="24">
        Портфолио
      </Typography>
      <h2>FRONTEND РАЗРАБОТЧИК</h2>
    </div>
  )
}
