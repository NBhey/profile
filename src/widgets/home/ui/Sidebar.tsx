import { Title } from '@/src/shared/ui/Title/Title'
import { Navbar } from '@/src/shared/ui/Navbar/Navbar'
import { Author } from '@/src/widgets/home/ui/Author'

export const Sidebar = () => {
  return (
    <header className="hidden self-start px-4 lg:px-8 pt-12 h-full md:flex flex-col gap-y-3.5 items-center justify-between flex-none border-r border-[#C7C4D7]">
      <Title />
      <Navbar />
      <Author />
    </header>
  )
}
