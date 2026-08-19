import 'server-only'

import path from 'node:path'
import { readFile } from 'node:fs/promises'

export const getUniqueUsersList = async () => {
  try {
    const file = path.join(process.cwd(), 'data', 'list_uniq_users.json')
    const uniqueUsers = await readFile(file, 'utf8')

    return JSON.parse(uniqueUsers)
  } catch (err) {
    console.log('Не удалось прочитать файл', err)
    return []
  }
}
