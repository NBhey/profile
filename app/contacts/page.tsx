import { Typography } from '@/src/shared/ui/Typography/Typography'
import { SocialLinkListElement } from '@/src/features/contacts/ui/SocialLinkList/SocialLinkList'
import Link from 'next/link'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'
import { ContactWithAuthorForm } from '@/src/features/contacts/ui/ContactWithAuthorForm/ContactWithAuthorForm'

export default function Contacts() {
  return (
    <div className="flex flex-col gap-y-15">
      <div>
        <Typography variant="bold" as="h1" size="32-48">
          {' '}
          Свяжитесь со мной{' '}
        </Typography>

        <Typography
          variant="normal"
          as="p"
          size="16-18"
          className="lg:break-all"
        >
          В настоящее время я открыт для фриланса и новых возможностей. Напишите
          мне, если хотите сотрудничать над проектом или просто поздороваться.
        </Typography>
      </div>

      <div className="flex gap-x-8 justify-between">
        <div className="flex-0 flex flex-col gap-y-15 shrink">
          <div>
            <Typography
              as="p"
              variant="medium"
              size="12"
              className="text-[#767586] uppercase"
            >
              Email
            </Typography>
            <Typography
              as="p"
              variant="semibold"
              size="18-24"
              className="hover:text-primary"
            >
              <Link href="mailto:og.marckaryan@yandex.ru">
                og.marckaryan@yandex.ru
              </Link>
            </Typography>
          </div>
          <div className="flex flex-col gap-y-3">
            <Typography
              as="p"
              variant="medium"
              size="12"
              className="text-[#767586] uppercase"
            >
              Социальные сети
            </Typography>
            <SocialLinkListElement />
          </div>
        </div>

        <div className="flex-1">
          <ContactWithAuthorForm />
        </div>
      </div>
    </div>
  )
}
