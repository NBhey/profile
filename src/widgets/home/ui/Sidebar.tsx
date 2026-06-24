'use client'

import { Title } from '@/src/shared/ui/Title/Title'
import { Navbar } from '@/src/shared/ui/Navbar/Navbar'
import { Author } from '@/src/widgets/home/ui/Author'

import clsx from 'clsx'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import { useEffect, useState } from 'react'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'
import { AnimatePresence, motion } from 'motion/react'

export const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true)

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
        'w-full max-w-80 flex md:border-r border-[#C7C4D7] h-full flex-col gap-y-3.5 group',
      )}
    >
      <Button
        as={BUTTON_VIEW.BUTTON}
        btnStyle="primary"
        className="md:hidden"
        onClick={() => setIsVisible(!isVisible)}
      >
        <Icon
          name="downArrow"
          size={30}
          className={clsx('md:hidden text-gray-400', isVisible && 'rotate-180')}
        />
      </Button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={clsx('overflow-hidden md:overflow-visible lg:block')}
          >
            <Title />
            <Navbar />
            <Author />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
