import { Typography } from '@/src/shared/ui/Typography/Typography'

export const Title = () => {
  return (
    <div className="self-start pb-12 flex flex-col gap-y-2 items-start">
      <Typography as="h1" variant="bold" size="24">
        Портфолио
      </Typography>
      <h2>FRONTEND РАЗРАБОТЧИК</h2>
    </div>
  )
}
