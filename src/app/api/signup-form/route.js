import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { email, firstName = '', lastName = '' } = await req.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Normalize and sanitize inputs
    const normalizedEmail = email.trim().toLowerCase()
    const sanitizedFirstName = firstName.trim()
    const sanitizedLastName = lastName.trim()

    // Add contact to Resend audience list
    const audienceId = process.env.RESEND_AUDIENCE_ID
    const result = await resend.contacts.create({
      email: normalizedEmail,
      firstName: sanitizedFirstName,
      lastName: sanitizedLastName,
      unsubscribed: false, // Set to true if the user is unsubscribed
      audienceId,
    })

    return new Response(
      JSON.stringify({ message: 'You have been added to our signup list.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to signup. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
