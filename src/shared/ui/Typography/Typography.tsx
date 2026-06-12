import { ElementType, ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

const textSettings = {
  normal: `font-normal leading-[130%] tracking-wide`,
  medium: `font-medium leading-[100%] tracking-wide`,
  semibold: `font-semibold leading-[130%] tracking-wide`,
  bold: 'font-bold leading-[110%]',
} satisfies Record<string, string>

const textSize: Record<string, string> = {
  '12': 'text-xs',
  '12-14': 'text-xs lg:text-sm',
  '14-16': 'text-sm lg:text-base',
  '16-18': 'text-base lg:text-lg',
  '18-24': 'text-lg lg:text-2xl',
  '24-32': 'text-2xl lg:text-[32px]',
  '32-48': 'text-[32px] lg:text-[48px]',
}

interface TypographyProps {
  as: ElementType
  children: ReactNode
  variant: keyof typeof textSettings
  size?: string
  className?: string
}

export const Typography = ({
  as: Component = 'div',
  children,
  variant,
  size = '16-18',
  className,
}: TypographyProps) => {
  return (
    <Component
      className={clsx(textSettings[variant], textSize[size], className)}
    >
      {children}
    </Component>
  )
}
