'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ROUT_ITEMS } from '@/src/shared/model/nav-items'

import { Icon } from '@/src/shared/ui/Icon/Icon'
import clsx from 'clsx'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="pb-2 self-start flex flex-col gap-y-7 items-start justify-center">
      {NAV_ROUT_ITEMS.map((route) => (
        <Link
          key={route.title}
          href={route.href}
          className={clsx(
            'max-w-56.25 w-screen flex-1 rounded-sm flex items-center gap-x-4  hover:text-primary',
            pathname === route.href &&
              "pl-1 text-primary hover:none after:content-[''] after:w-0.5 after:bg-primary after:h-6 after:ml-auto translate-x-1 transition-all duration-300",
          )}
        >
          <Icon name={route.name} size={20} />
          {route.title}
        </Link>
      ))}
    </nav>
  )
}
