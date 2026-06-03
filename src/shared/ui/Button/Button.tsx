import { ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { BUTTON_VIEW } from '@/src/shared/model/types'
import { ROUTES } from '@/src/shared/config/routes'

const BUTTON_STYLE = {
  primary:
    'p-1 lg:py-3 lg:px-6 bg-primary text-[#FFFFFF] rounded-[4px] shadow-sm hover:bg-[#1F2937]',
  outlined:
    'p-1 lg:py-3 lg:px-6 bg-inherit text-[#121C2A] rounded-[4px] shadow-sm hover:bg-[#1F2937] hover:text-[#FFFFFF]',
} as const

interface ButtonProps {
  variant: BUTTON_VIEW
  children: ReactNode
  btnStyle: keyof typeof BUTTON_STYLE
  className?: string
  href?: keyof typeof ROUTES | ''
}

export const Button = ({
  variant,
  children,
  btnStyle,
  className,
  href = '',
}: ButtonProps) => {
  if (variant === BUTTON_VIEW['LINK']) {
    return (
      <Link
        className={clsx(BUTTON_STYLE[btnStyle], className)}
        href={`/${href}`}
      >
        Смотреть проекты{' '}
      </Link>
    )
  }
  return (
    <button className={clsx(BUTTON_STYLE[btnStyle], className)}>
      {children}
    </button>
  )
}
