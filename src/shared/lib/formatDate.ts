const plural = (n: number, titles: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[
    n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]
  ]
}

export function formatDate(currentDate: Date) {
  const df = new Date(2025, 3, 1)

  let years = currentDate.getFullYear() - df.getFullYear()
  let months = currentDate.getMonth() - df.getMonth()
  if (months < 0) {
    years--
    months += 12
  }

  const parts: string[] = []
  if (years > 0) {
    parts.push(`${years} ${plural(years, ['год', 'года', 'лет'])}`)
  }
  if (months > 0) {
    parts.push(`${months} ${plural(months, ['месяц', 'месяца', 'месяцев'])}`)
  }

  return parts.join(' ') || '0 месяцев'
}
