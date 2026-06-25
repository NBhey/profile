import { Typography } from '@/src/shared/ui/Typography/Typography'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'

export default function Home() {
  return (
    <div className="gap-y-10 flex-1 flex flex-col h-full justify-evenly">
      <Typography as="h1" variant="bold" size="32-48">
        Привет, я Оганес
        <br className="none" /> Я разрабатываю{' '}
        <Typography
          as="span"
          variant="bold"
          size="32-48"
          className="text-primary italic"
        >
          быстрые
        </Typography>{' '}
        и современные веб-интерфейсы.
      </Typography>
      <hr />
      <Typography as="p" variant="normal" size="16-18">
        Специализируюсь на создании качественных фронтенд-решений, используя{' '}
        <b>NextJS</b>, <b>Tailwind</b>, <b>Python</b> и современные стандарты
        веб-разработки. <br /> Моя цель — писать чистый, поддерживаемый код и
        превращать сложные макеты в производительные и доступные интерфейсы.
      </Typography>
      <hr />
      <div className="flex gap-x-4">
        <Button href="projects" as={BUTTON_VIEW['LINK']} btnStyle="primary">
          Смотреть проекты{' '}
        </Button>

        <Button href="contacts" as={BUTTON_VIEW['LINK']} btnStyle="outlined">
          Связаться
        </Button>
      </div>

      {/*<div className="pt-12 flex flex-col gap-y-6 border-t border-[#C7C4D7]">*/}
      {/*  <Typography as="h3" variant="bold">*/}
      {/*    Техническая полка*/}
      {/*  </Typography>*/}
      {/*</div>*/}
    </div>
  )
}
