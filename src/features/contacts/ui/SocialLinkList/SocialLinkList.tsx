import { ReactNode } from 'react'
import Link from 'next/link'
import { Icon } from '@/src/shared/ui/Icon/Icon'

const SOCIAL_LINKS = [
  { id: 1, name: 'telegram', url: 'https://t.me/NBhey' },
  { id: 2, name: 'whatsapp', url: 'https://wa.me/79897094989' },
  { id: 3, name: 'github', url: 'https://github.com/NBhey' },
]

export const SocialLinkListElement = () => {
  return (
    <ul className="flex flex-col gap-y-2">
      {SOCIAL_LINKS.map((link) => {
        return (
          <li key={link.id}>
            <Link
              target="_blank"
              href={link.url}
              className="hover:text-primary capitalize flex gap-x-2"
            >
              <Icon name={link.name} size={20} />
              <span>{link.name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
