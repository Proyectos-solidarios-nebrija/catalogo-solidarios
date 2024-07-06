import { z } from 'zod'
import { getEnv } from 'src/helpers/getEnv'

const { NEWSLETTER_URL, SUSCRIBERS_LIST_UUID } = getEnv()

export const susbcribeToNewsletter = async (email) => {
  const emailCheck = z.string().email()
  const parsedEmail = emailCheck.parse(email)

  await fetch(`${NEWSLETTER_URL}/api/public/subscription`, {
    method: 'POST',
    body: JSON.stringify({
      email: parsedEmail,
      list_uuids: [SUSCRIBERS_LIST_UUID]
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
