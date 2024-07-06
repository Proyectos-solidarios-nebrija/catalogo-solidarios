import { susbcribeToNewsletter } from 'src/services/newsletter'

export const POST = async ({ request }) => {
  const body = await request.json()

  const { email } = body

  try {
    susbcribeToNewsletter(email)
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    })
  }

  return new Response(JSON.stringify({ error: null }), { status: 200 })
}
