import clsx from 'clsx'
import { Container, Navigation } from '@/components'
import './styles.css'

export function Header({ className, ...props}) {
  return (
    <header id="header" className={clsx('header', className)} {...props}>
      <Container>
        <Navigation />
      </Container>
    </header>
  )
}
