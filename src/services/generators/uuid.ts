export const createUUID = (): string => {
  if (typeof window === 'undefined') {
    return crypto.randomUUID()
  }

  return window.crypto.randomUUID()
}
