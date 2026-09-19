'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ROUT_ITEMS } from '@/src/shared/model/nav-items'

import { Icon } from '@/src/shared/ui/Icon/Icon'
import { Typography } from '@/src/shared/ui/Typography/Typography'
import cn from '@/src/shared/lib/cn'
import { ROUTES } from '@/src/shared/config/routes'

const MobileLayout = `w-full p-3 fixed bottom-0 z-100 grid grid-cols-5 bg-inherit border-t border-gray-300 rounded-lg shadow-[0_-1px_15px_1px_rgba(0,0,0,0.3)]`

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className={cn(MobileLayout)}>
      {NAV_ROUT_ITEMS.map((route) => {
        const isActive =
          route.href === ROUTES.home
            ? pathname === route.href
            : pathname.startsWith(route.href)

        return (
          <Link
            key={route.title}
            href={route.href}
            className={cn(
              'flex p-2 rounded-lg flex-col items-center  hover:text-primary',
              isActive && 'text-primary bg-primary-subtle',
            )}
          >
            <Icon
              className={cn(
                'inline text-secondary',
                isActive && 'text-primary',
              )}
              name={route.name}
              size={20}
            />
            <Typography
              size="12-14"
              variant="normal"
              as="span"
              className={cn(
                'inline text-secondary',
                isActive && 'text-primary',
              )}
            >
              {route.title}
            </Typography>
          </Link>
        )
      })}
    </nav>
  )
}
