import { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { BUTTON_VIEW } from '@/src/shared/model/types'
import { ROUTES } from '@/src/shared/config/routes'
import cn from '@/src/shared/lib/cn'

const BUTTON_STYLE = {
  primary:
    'text-center p-1 lg:py-3 lg:px-6 bg-primary text-[#FFFFFF] rounded-[4px] shadow-sm hover:bg-[#1F2937]',
  outlined:
    'text-center p-1 lg:py-3 lg:px-6 bg-inherit text-[#121C2A] rounded-[4px] shadow-sm hover:bg-[#767586] hover:text-[#FFFFFF]',
  inverted:
    'text-center p-1 lg:py-3 lg:px-6 bg-neutral text-[#FFFFFF] rounded-[4px] shadow-sm hover:bg-primary hover:text-[#FFFFFF]',
} as const

type BtnStyle = keyof typeof BUTTON_STYLE

interface BaseProps {
  children: ReactNode
  btnStyle: BtnStyle
}

type RealButtonProps = BaseProps & {
  as: BUTTON_VIEW.BUTTON
  href?: never
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type RealLinkProps = BaseProps & {
  as: BUTTON_VIEW.LINK
  href: keyof typeof ROUTES | ''
} & Omit<ComponentProps<typeof Link>, 'href' | 'children'>

type ButtonProps = RealButtonProps | RealLinkProps

export const Button = (props: ButtonProps) => {
  if (props.as === BUTTON_VIEW['LINK']) {
    const { as, children, btnStyle, className, href = '', ...rest } = props
    return (
      <Link
        className={cn(BUTTON_STYLE[btnStyle], className, 'cursor-pointer')}
        href={`/${href}`}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  const { as, children, btnStyle, className, ...rest } = props

  return (
    <button
      type="button"
      className={cn(BUTTON_STYLE[btnStyle], className, 'cursor-pointer')}
      {...rest}
    >
      {children}
    </button>
  )
}
