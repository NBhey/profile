import { ReactNode } from 'react'

export const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="lg:min-h-180 py-19 px-6 relative my-0 mx-auto lg:px-12 opacity-0 translate-x-0 animate-[skewSlide_0.6s_cubic-bezier(.34,1.56,.64,1)_forwards]">
      {children}
    </section>
  )
}
