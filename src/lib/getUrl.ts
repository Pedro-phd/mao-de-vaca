export const getUrl = (path: string) => {
  const baseUrl = process.env.NEXT_PUBlIC_APP_URL || ''
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
  return `${baseUrl}${normalizedPath}`
}