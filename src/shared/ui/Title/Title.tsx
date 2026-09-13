import { Typography } from '@/src/shared/ui/Typography/Typography'

export const Title = ({ classname }: { classname?: string }) => {
  return (
    <>
      <Typography as="h1" variant="bold" size="32-48">
        Привет, <br /> я Оганес
      </Typography>

      <Typography
        as="h3"
        variant="normal"
        size="16-18"
        className="text-grey-text"
      >
        Делаю <span className="text-primary">быстрые</span> и современные
        веб-интерфейсы с использованием <b>NextJS</b>, <b>TypeScript</b>,
        <b>Tailwind</b>, <b>Python</b> и <b>Express</b> .
      </Typography>
    </>
  )
}
