'use client'

import clsx from 'clsx'
import { useState } from 'react'

import { Title } from '@/src/shared/ui/Title/Title'
import { Navbar } from '@/src/shared/ui/Navbar/Navbar'
import { Author } from '@/src/widgets/home/ui/Author'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="p-2 md:p-0 md:w-full md:max-w-80 flex md:border-r border-[#C7C4D7] h-full flex-col gap-y-3.5 group">
      <Button
        as={BUTTON_VIEW.BUTTON}
        btnStyle="primary"
        className="md:hidden bg-inherit self-center"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        <Icon
          name="downArrow"
          size={30}
          className={clsx(
            'text-gray-400 transition-transform',
            isOpen && '-rotate-180',
          )}
        />
      </Button>

      <div
        data-open={String(isOpen)}
        className={clsx(
          'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out',
          'data-[open=true]:grid-rows-[1fr]',
          'md:grid-rows-[1fr]',
        )}
      >
        <div className="overflow-hidden">
          <Title />
          <Navbar />
          <Author />
          <hr className="text-primary md:hidden" />
        </div>
      </div>
    </header>
  )
}
