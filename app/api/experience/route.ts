import * as fs from 'node:fs'
import { NextResponse } from 'next/server'
import path from 'node:path'

export async function GET() {
  try {
    const experience = fs.readFileSync(
      path.join(process.cwd(), 'experience.json'),
      'utf8',
    )

    return NextResponse.json(JSON.parse(experience))
  } catch (err) {
    console.error('Ошибка чтения experience.json', err)

    return NextResponse.json(
      { message: 'Не удалось загрузить данные об опыте' },
      { status: 500 },
    )
  }
}
