'use server'

import path from 'node:path'
import { readFile } from 'node:fs/promises'

export const getUniqueUsersList = async () => {
  const file = path.join(process.cwd(), 'data', 'list_uniq_users.json')
  const uniqueUsers = await readFile(file, 'utf8')

  return JSON.parse(uniqueUsers)
}
