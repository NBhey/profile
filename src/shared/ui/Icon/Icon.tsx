import { Icons } from '@/src/shared/icons'
import { ComponentType, SVGProps } from 'react'

type IconName = keyof typeof Icons

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export const Icon = ({ name, size, className }: IconProps) => {
  const IconComponent = Icons[name]

  if (IconComponent) {
    return <IconComponent width={size} height={size} className={className} />
  }
}
