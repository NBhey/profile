'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ROUT_ITEMS } from '@/src/shared/model/nav-items'

import { Icon } from '@/src/shared/ui/Icon/Icon'
import clsx from 'clsx'
import { Typography } from '@/src/shared/ui/Typography/Typography'
import cn from '@/src/shared/lib/cn'

const MobileLayout = `w-full p-3 fixed bottom-0 z-100 grid grid-cols-5 bg-inherit  border-t rounded-lg shadow-[0_-2px_15px_6px_rgba(0,0,0,0.3)]`

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className={cn(MobileLayout)}>
      {NAV_ROUT_ITEMS.map((route) => (
        <Link
          key={route.title}
          href={route.href}
          className={clsx(
            'flex p-2 rounded-lg flex-col items-center hover:text-primary',
            pathname === route.href && 'text-primary bg-primary-subtle',
          )}
        >
          <Icon className={'inline'} name={route.name} size={20} />
          <Typography
            size="12-14"
            variant="normal"
            as="span"
            className="inline"
          >
            {route.title}
          </Typography>
        </Link>
      ))}
    </nav>
  )
}
// pathname === route.href &&
// "pl-1 text-primary hover:none after:content-[''] after:w-0.5 after:bg-primary after:h-6 after:ml-auto translate-x-1 transition-all duration-300",
