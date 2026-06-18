'use client'

import { usePathname } from 'next/navigation'
import { ROUTES } from '@/src/shared/config/routes'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'

const routesKey = Object.values(ROUTES)

const isRealRoute = (
  pathname: any,
): pathname is (typeof ROUTES)[keyof typeof ROUTES] => {
  return routesKey.includes(pathname)
}

export const NotFoundContent = () => {
  const pathname = usePathname()

  if (isRealRoute(pathname)) {
    return (
      <div className="w-full max-w-2xl z-10 flex flex-col items-center ">
        <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
          <div className="absolute inset-0 border border-outline-variant rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-2 border border-outline border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <p className="text-primary animate-pulse text-[30px] whitespace-nowrap">
            в процессе...
          </p>
        </div>
        <p className="text-display font-display text-on-surface mb-6">
          Страница в процессе разработки
        </p>
        <p className="mb-12 max-w-lg mx-auto text-center">
          Я работаю над тем, чтобы наполнить этот раздел интересным контентом.{' '}
          <br />
          Совсем скоро здесь появится подробная информация.
        </p>
        <Button href="" as={BUTTON_VIEW['LINK']} btnStyle="primary">
          Вернуться на главную
        </Button>
      </div>
    )
  }

  return (
    <>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-75 text-[192px] text-primary opacity-10">
        404
      </p>
      <pre>Страница не найдена</pre>
    </>
  )
}
