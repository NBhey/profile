'use server'

import { cookies } from 'next/headers'
import { getUniqueUsersList } from '@/server/lib/getUniqueUsersList'
import { createHashForUniqueUsers } from '@/server/lib/createHashForUniqueUsers'
import path from 'node:path'
import { appendFile, writeFile } from 'node:fs/promises'

export async function createCookies() {
  const cookiesStore = await cookies()
  const uniqueUsersList = await getUniqueUsersList()

  const userId = cookiesStore.get('userId')

  if (!userId) {
    const userIndividualCode = await createHashForUniqueUsers()
    cookiesStore.set('userId', userIndividualCode, {
      secure: true,
      maxAge: 3_600 * 24 * 30 * 365,
      httpOnly: true,
    })

    uniqueUsersList.push(userIndividualCode)

    const file = path.join(process.cwd(), 'data', 'list_uniq_users.json')
    await writeFile(file, JSON.stringify(uniqueUsersList))
  }
}
