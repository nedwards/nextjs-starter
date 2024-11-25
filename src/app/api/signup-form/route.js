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

// MAILCHIMP
//
// import { NextResponse } from 'next/server'

// export async function POST(request) {
//   try {
//     // Parse and validate the request body
//     const body = await request.json()

//     if (!body || typeof body.email !== 'string' || !body.email.includes('@')) {
//       return NextResponse.json(
//         { message: 'Invalid email address.' },
//         { status: 400 }
//       )
//     }

//     const { email } = body

//     // Validate environment variables
//     const API_KEY = process.env.MAILCHIMP_API_KEY
//     const LIST_ID = process.env.MAILCHIMP_LIST_ID
//     const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX

//     if (!API_KEY || !LIST_ID || !SERVER_PREFIX) {
//       console.error('Missing Mailchimp configuration.')
//       return NextResponse.json(
//         { message: 'Internal Server Error.' },
//         { status: 500 }
//       )
//     }

//     // Construct the Mailchimp API URL and payload
//     const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`
//     const data = {
//       email_address: email,
//       status: 'subscribed',
//     }

//     // Make the request to Mailchimp
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `apikey ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//       signal: AbortSignal.timeout(5000), // Add timeout
//     })

//     if (response.status >= 400) {
//       const errorDetail = await response.json()
//       console.error('Mailchimp error:', errorDetail)
//       return NextResponse.json(
//         {
//           message: 'Failed to subscribe.',
//           detail: errorDetail.detail || 'Unknown error',
//         },
//         { status: 400 }
//       )
//     }

//     // Return a success response
//     return NextResponse.json(
//       { message: 'Successfully subscribed!' },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Subscription error:', error.message)
//     return NextResponse.json(
//       { message: 'Internal Server Error.' },
//       { status: 500 }
//     )
//   }
// }
