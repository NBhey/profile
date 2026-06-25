import home from './home.svg'
import projects from './projects.svg'
import otherWorkExperience from './otherWorkExperience.svg'
import experience from './workExperience.svg'
import contacts from './contacts.svg'
import github from './github.svg'
import whatsapp from './whatsapp.svg'
import telegram from './telegram.svg'
import downArrow from './downArrow.svg'
import { ComponentType, SVGProps } from 'react'

export const Icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  home,
  projects,
  otherWorkExperience,
  experience,
  contacts,
  telegram,
  whatsapp,
  github,
  downArrow,
} as const
