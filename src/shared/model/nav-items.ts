import { ROUTES } from '@/src/shared/config/routes'

export const NAV_ROUT_ITEMS = [
  { href: ROUTES.home, name: 'home', title: 'Главная' },
  { href: ROUTES.workExperience, name: 'workExperience', title: 'Опыт работы' },
  { href: ROUTES.projects, name: 'projects', title: 'Проекты' },
  {
    href: ROUTES.otherWorkExperience,
    name: 'otherWorkExperience',
    title: 'Опыт работы в других сферах',
  },
  { href: ROUTES.contacts, name: 'contacts', title: 'Контакты' },
]
