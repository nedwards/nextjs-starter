import { Resend } from 'resend'
import validator from 'validator'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { email } = await req.json()

    // Validate and sanitize the email
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (!validator.isEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const sanitizedEmail = validator.normalizeEmail(email)

    // Prepare the confirmation email
    const emailData = {
      from:
        process.env.EMAIL_FROM_ADDRESS ||
        'Newsletter <newsletter@yourdomain.com>',
      to: sanitizedEmail,
      subject: 'Welcome to Our Newsletter!',
      react: (
        <div>
          <h1>Welcome to Our Newsletter!</h1>
          <p>
            Thank you for subscribing. You&apos;ll receive updates and the
            latest news straight to your inbox.
          </p>
        </div>
      ),
    }

    // Send confirmation email using Resend
    await resend.emails.send(emailData)

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Successfully subscribed to the newsletter.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)

    return new Response(
      JSON.stringify({
        error: 'Failed to subscribe. Please try again later.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
