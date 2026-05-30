import { Title } from '@/src/shared/ui/Title/Title'
import { Navbar } from '@/src/shared/ui/Navbar/Navbar'

export const Sidebar = () => {
  return (
    <header className="self-start px-8 pt-12 h-full flex flex-col items-center justify-between flex-none border-r">
      <Title />
      <Navbar />
    </header>
  )
}
