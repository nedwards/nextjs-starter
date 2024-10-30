import './styles.css'

export function SkipLinks({
  data = [{ label: 'Skip to main content', href: '#main' }],
}) {
  return (
    <nav className="skip-links">
      <ul>
        {data.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
