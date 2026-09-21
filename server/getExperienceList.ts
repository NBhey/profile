import * as fs from 'node:fs'
import path from 'node:path'

type Project = {
  name: string
  highlights: string[]
  nda: boolean
  period: string
  role: string
  slug: string
  stack: string[]
}

type PlaceWork = {
  company: string
  location: string
  period: string
  projects: Project[]
  role: string
  type: string
}

export type ExperienceList = Array<PlaceWork>

export function getExperienceList() {
  const experienceJSON = fs.readFileSync(
    path.join(process.cwd(), 'experience.json'),
    'utf-8',
  )

  const { experience }: { experience: ExperienceList } =
    JSON.parse(experienceJSON)

  return experience
}
