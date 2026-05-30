import Link from 'next/link'
import { NAV_ROUT_ITEMS } from '@/src/shared/model/nav-items'

import { Icon } from '@/src/shared/ui/Icon/Icon'

export const Navbar = () => {
  return (
    <nav className="flex flex-col items-start justify-center">
      {NAV_ROUT_ITEMS.map((route) => (
        <Link
          key={route.title}
          href={route.href}
          className="w-full p-1 rounded-sm flex items-center gap-4  hover:text-[#4648D4]"
          prefetch={true}
        >
          <Icon name={route.name} size={20} />
          {route.title}
        </Link>
      ))}
    </nav>
  )
}
