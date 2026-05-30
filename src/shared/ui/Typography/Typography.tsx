import { ElementType, ReactElement, ReactNode } from 'react'

interface TypographyProps {
  as: ElementType
  children: ReactNode
  variant: string
}

const textSettings: Record<string, string> = {
  normal: 'font-normal leading-[110%]',
  bold: 'font-bold leading-[110%]',
}

export const Typography = ({
  as: Component = 'div',
  children,
  variant,
}: TypographyProps) => {
  return <Component className={textSettings[variant]}>{children}</Component>
}
