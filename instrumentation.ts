export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { ensureUniqueUsersFile } =
      await import('@/server/lib/ensureUniqueUsersFile')
    await ensureUniqueUsersFile()
  }
}
