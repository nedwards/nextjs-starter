# Starter Application

Starter application built using <a href="https://nextjs.org/" target="_blank">Next.js</a>. Also includes:

- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://headlessui.com/" target="_blank">HeadlessUI</a>
- <a href="https://resend.com/" target="_blank">Resend</a>
- <a href="https://heroicons.com/" target="_blank">Heroicons</a>
- <a href="https://plausible.io/" target="_blank">Plausible</a>

## Getting Started

Once you have cloned the repo, install the packages.

```bash
npm install
# or
yarn install
```

Create a `.env.local` file at the root level with the following variables. You can change these later but you will need them setup so you can run the initial build.

```bash
# BUSINESS
WEBSITE_URL='http://www.your-website-name.com.au'
CONTACT_EMAIL='your-email@website-name.com.au'

# GOOGLE
GOOGLE_ANALYTICS_ID=''
GOOGLE_MAPS_URL=''

# RESEND (contact form)
EMAIL_FROM_ADDRESS=''
EMAIL_TO_ADDRESS=''
RESEND_API_KEY=''
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Setting up Resend

To test the contact form you will need to setup an account with <a href="https://resend.com/" target="_blank">Resend</a>.

Once you have access to the resend dashboard you can create your own api key which will be added to the `RESEND_API_KEY` found in your `.env.local` file.

##### Steps

- Go to <a href="https://resend.com/" target="_blank">Resend</a> and setup an account.
- Once logged in, click the `API Keys` link from the left hand menu.
- Then click the `+ Create API key` button.
- You can name the api key, let's call it `Contact Form` or any other relevant name.
- Then click `Add` and paste the api key value into the `RESEND_API_KEY` in your `.env.local` file.
