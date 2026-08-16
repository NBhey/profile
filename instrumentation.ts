export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { ensureUniqueUsersFile } =
      await import('./app/(analytics)/lib/ensureUniqueUsersFile')
    await ensureUniqueUsersFile()
  }
}
