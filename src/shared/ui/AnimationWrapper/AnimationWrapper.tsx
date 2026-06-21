import { ReactNode } from 'react'

export const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="mx-auto p-4 relative opacity-0 translate-x-0 animate-[skewSlide_0.6s_cubic-bezier(.34,1.56,.64,1)_forwards]">
      {children}
    </section>
  )
}
