'use client'

import { Title } from '@/src/shared/ui/Title/Title'
import { Navbar } from '@/src/shared/ui/Navbar/Navbar'
import { Author } from '@/src/widgets/home/ui/Author'

import clsx from 'clsx'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import { useState } from 'react'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'
import { AnimatePresence, motion } from 'motion/react'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    //   <header
    //     className={clsx(
    //       !isOpen && '',
    //       'w-full flex lg:border-r border-[#C7C4D7] self-start px-4 lg:px-8 lg:pt-12 h-full flex-col gap-y-3.5 items-center justify-between ',
    //     )}
    //   >
    //     <Button
    //       as={BUTTON_VIEW.BUTTON}
    //       btnStyle="primary"
    //       className="bg-inherit lg:hidden"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <Icon name="downArrow" size={30} className="lg:hidden text-gray-400" />
    //     </Button>
    //     <div className={clsx(isOpen && 'hidden')}>
    //       <Title classname="lg:hidden block" />
    //       <Navbar />
    //       <Author />
    //     </div>
    //   </header>
    // )
    <header
      className={clsx(
        'w-full max-w-100 flex lg:border-r border-[#C7C4D7] h-full flex-col gap-y-3.5 items-center justify-between ',
      )}
    >
      <Button
        as={BUTTON_VIEW.BUTTON}
        btnStyle="primary"
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          name="downArrow"
          size={30}
          className={clsx('lg:hidden text-gray-400', isOpen && 'rotate-180')}
        />
      </Button>

      {!isOpen && (
        <AnimatePresence>
          <motion.div className="hidden lg:block">
            <Title />
            <Navbar />
            <Author />
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  )
}
