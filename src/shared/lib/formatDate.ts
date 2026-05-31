export const formatDate = (number: number) => {
  const titles: Array<string> = ['год', 'года', 'лет']
  const cases: Array<number> = [2, 0, 1, 1, 1, 2]
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}
