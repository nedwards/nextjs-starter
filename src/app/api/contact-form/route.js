import { Resend } from 'resend'
import validator from 'validator'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation and sanitisation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Sanitize inputs
    const sanitizedName = validator.escape(name)
    const sanitizedEmail = validator.normalizeEmail(email)
    const sanitizedMessage = validator.escape(message)

    // Prepare email data
    const emailData = {
      from:
        process.env.EMAIL_FROM_ADDRESS ||
        'Contact Form <onboarding@resend.dev>',
      to: process.env.EMAIL_TO_ADDRESS || 'delivered@resend.dev',
      subject: 'Contact Form Email',
      react: (
        <div>
          <h1>Contact Form Email</h1>
          <p>
            <strong>Name:</strong> {sanitizedName}
          </p>
          <p>
            <strong>Email:</strong> {sanitizedEmail}
          </p>
          <p>
            <strong>Message:</strong> {sanitizedMessage}
          </p>
        </div>
      ),
    }

    // Send email using Resend
    await resend.emails.send(emailData)

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Message sent successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    // Log error for debugging purposes
    console.error('Error sending email:', error)

    // Return a more informative error response
    return new Response(
      JSON.stringify({
        error: 'Failed to send email. Please try again later.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
