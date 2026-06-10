const fallbackApiUrl = 'http://localhost:4000'

export const apiUrl = (import.meta.env.VITE_API_URL || fallbackApiUrl).replace(/\/$/, '')

export async function sendContactMessage(payload) {
  const response = await fetch(`${apiUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Nao foi possivel enviar a mensagem.')
  }

  return data
}
