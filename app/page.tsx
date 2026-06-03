import { Typography } from '@/src/shared/ui/Typography/Typography'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-y-6">
      <Typography as="h1" variant="bold" size={'48'}>
        Привет, я Оганес
        <br className="none" /> Я разрабатываю{' '}
        <Typography
          as="span"
          variant="bold"
          size={'48'}
          className="text-primary italic"
        >
          быстрые
        </Typography>{' '}
        и современные веб-интерфейсы.
      </Typography>

      <Typography as="p" variant="normal" size="18">
        Специализируюсь на создании качественных фронтенд-решений, используя,
        NextJS, TypeScript, Tailwind и современные веб-разработки.
      </Typography>
      <p>
        Моя цель писать чистый, поддерижваемый код и превращать сложные макеты в
        производительные и доступные интерфейсы
      </p>

      <div className="flex gap-x-4">
        <Button
          href="projects"
          variant={BUTTON_VIEW['LINK']}
          btnStyle="primary"
        >
          Смотреть проекты{' '}
        </Button>

        <Button
          href="contacts"
          variant={BUTTON_VIEW['LINK']}
          btnStyle="outlined"
        >
          Связаться
        </Button>
      </div>

      <div className="pt-12 flex flex-col gap-y-6 border-t border-[#C7C4D7]">
        <Typography as="h3" variant="bold">
          Техническая полка
        </Typography>
      </div>
    </div>
  )
}
