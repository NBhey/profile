import fs from 'node:fs'
import path from 'node:path'

type PetProject = {
  name: string
  slug: string
  year: number
  description: string
  stack: string[]
  highlights: string[]
  repo: string
  demo: string
}

export type PetProjects = PetProject[]

export default function getPetProjects(): {
  projects: PetProjects
} {
  const petProjectsJSON = fs.readFileSync(
    path.join(process.cwd(), 'projects.json'),
    'utf-8',
  )
  return JSON.parse(petProjectsJSON)
}
