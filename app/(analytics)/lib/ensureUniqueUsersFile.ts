'use server'

import path from 'node:path'
import fs from 'node:fs'

export const ensureUniqueUsersFile = async (): Promise<void> => {
  const directoryPath = path.join(process.cwd(), 'data')
  const file = path.join(directoryPath, 'list_uniq_users.json')

  fs.mkdirSync(directoryPath, { recursive: true })
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '{}', { flag: 'wx' })
  }
}
