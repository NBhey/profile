import { getExperienceList } from '@/server/getExperienceList'
import Content from '@/src/widgets/experience/ui/Content'

export default async function Project() {
  const currentExperience = getExperienceList()

  return <Content experienceList={currentExperience} />
}
