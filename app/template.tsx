import { ReactNode } from 'react'
import { AnimationWrapper } from '@/src/shared/ui/AnimationWrapper/AnimationWrapper'

export default function Template({ children }: { children: ReactNode }) {
  return <AnimationWrapper>{children}</AnimationWrapper>
}
