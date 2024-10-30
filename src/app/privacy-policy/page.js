// components
import { Container } from '@/components'

// data
import { config } from '@/data'

export const metadata = {
  title: `Privacy policy | ${config?.business.name}`,
  description: 'Privacy policy',
}

export default function Page() {
  return <Container>Privacy policy</Container>
}
