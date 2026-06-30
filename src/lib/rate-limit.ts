const rateMap = new Map<string, { count: number; resetTime: number }>()

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX || '100')
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW || '60000')

export async function rateLimit(identifier: string): Promise<{ success: boolean }> {
  const now = Date.now()
  const record = rateMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateMap.set(identifier, { count: 1, resetTime: now + WINDOW_MS })
    return { success: true }
  }

  if (record.count >= MAX_REQUESTS) {
    return { success: false }
  }

  record.count++
  return { success: true }
}
