import { ElementType, ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

const textSettings = {
  normal: `font-normal leading-[130%] tracking-wide`,
  bold: 'font-bold leading-[110%]',
} satisfies Record<string, string>

const textSize: Record<string, string> = {
  '12': 'text-xs',
  '14': 'text-sm',
  '16': 'text-base',
  '18': 'text-lg',
  '24': 'text-2xl',
  '32': 'text-[32px]',
  '48': 'text-[48px]',
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
  size = '18',
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
