import 'server-only'

import { randomBytes } from 'node:crypto'

export const createHashForUniqueUsers = async () => {
  return randomBytes(5).toString('base64url')
}
