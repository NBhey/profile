import { Typography } from '@/src/shared/ui/Typography/Typography'
import { type ExperienceProject } from '@/src/features/experience/ui/Header'
import Link from 'next/link'

export default function Body({
  experienceProject,
}: {
  experienceProject?: ExperienceProject
}) {
  if (!experienceProject) return null

  const { stack, highlights, nextProject } =
    experienceProject

  return (
    <>
      <ul className="flex flex-wrap items-center gap-1.5">
        {stack.map((tech) => (
          <li
            key={tech}
            className="bg-primary-subtle text-primary rounded-full px-3 py-1 text-[12px] leading-4.5 sm:text-[14px] sm:leading-5 whitespace-nowrap"
          >
            {tech}
          </li>
        ))}
      </ul>

      <Typography
        as="h2"
        variant="medium"
        size="12"
        className="mt-5 tracking-[0.14em] text-grey-text uppercase"
      >
        Что сделал &bull; {highlights.length}
      </Typography>

      <ol className="mt-3 flex flex-col gap-y-3.5">
        {highlights.map((highlight, index) => (
          <li key={highlight} className="flex gap-2.5">
            <Typography
              as="span"
              variant="medium"
              size="12"
              className="mt-1 shrink-0 tabular-nums text-primary"
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>

            <Typography
              as="p"
              variant="normal"
              size="14-16"
              className="text-neutral"
            >
              {highlight}
            </Typography>
          </li>
        ))}
      </ol>

      {nextProject.slug && (
        <Link
          href={nextProject.slug}
          className="group mt-8 mb-24 flex items-center gap-3 rounded-2xl border border-[#C7C4D7] bg-white px-4 py-3.5 transition-colors hover:border-primary/40 hover:bg-primary-subtle/40 active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <Typography
              as="span"
              variant="medium"
              size="12"
              className="tracking-[0.12em] text-grey-text uppercase"
            >
              Следующий проект
            </Typography>

            <Typography
              as="span"
              variant="semibold"
              size="14-16"
              className="truncate"
            >
              {nextProject.name}
            </Typography>
          </div>

          <span
            aria-hidden
            className="shrink-0 text-[20px] leading-none text-primary transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      )}
    </>
  )
}
