// components
import { Container } from '@/components'

// data
import { config } from '@/data'

export const metadata = {
  title: `Terms and Conditions | ${config?.business.name}`,
  description: 'Terms and Conditions',
}

export default function Page() {
  return <Container>Terms & Conditions</Container>
}
