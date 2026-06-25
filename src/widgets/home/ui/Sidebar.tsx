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
    <header
      className={clsx(
        'md:w-full md:max-w-80 flex md:border-r border-[#C7C4D7] h-full flex-col gap-y-3.5 group',
      )}
    >
      <Button
        as={BUTTON_VIEW.BUTTON}
        btnStyle="primary"
        className="md:hidden bg-inherit self-center"
        onClick={() => setIsVisible(!isVisible)}
      >
        <Icon
          name="downArrow"
          size={30}
          className={clsx(
            ' md:hidden text-gray-400',
            isVisible && 'rotate-180',
          )}
        />
      </Button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className={clsx('overflow-hidden md:overflow-visible md:block')}
          >
            <Title />
            <Navbar />
            <Author />
            <hr className="text-primary md:hidden" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
