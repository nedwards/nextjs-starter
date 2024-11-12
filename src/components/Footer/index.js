import clsx from 'clsx'
import {
  Container,
  Logo,
  SocialMedia,
  List,
  Link,
  Grid,
  Column,
} from '@/components'
import { config } from '@/data'
import './styles.css'

export function Footer({ className, ...props }) {
  return (
    <footer id="footer" className={clsx('footer', className)} {...props}>
      <Container>
        <Grid sm={1} md={12} className="text-center sm:text-left">
          <Column md={5}>
            <Link href="/" className="inline-flex">
              <Logo />
            </Link>
            {config?.footer.description && (
              <p className="text-sm leading-6 mt-6 md:max-w-80">
                {config?.footer.description}
              </p>
            )}
            <div className="inline-flex">
              <SocialMedia className="mt-6" />
            </div>
          </Column>
          <Column md={7}>
            <Grid sm={3}>
              <div>
                <p className="mb-5 font-semibold text-sm">Navigation</p>
                <ul className="space-y-2">
                  {config?.navigation.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-block no-underline hover:underline text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-5 font-semibold text-sm">Legal</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="inline-block no-underline hover:underline text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="inline-block no-underline hover:underline text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-5 font-semibold text-sm">Company</p>
                <ul className="space-y-2">
                  <li className="text-sm">{config.business.address.street}</li>
                  <li className="text-sm">
                    {config.business.address.suburb},{' '}
                    {config.business.address.postcode}
                  </li>
                  <li className="text-sm">{config.business.address.city}</li>
                  <li>
                    <a
                      href={`tel:${config.business.phone}`}
                      className="text-sm no-underline hover:underline"
                    >
                      {config.business.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Column>
        </Grid>
        <div className="text-center sm:flex sm:justify-between border-t border-gray-900/10 pt-8 mt-8 lg:mt-24">
          <p className="mb-3 sm:mb-0 text-sm leading-5 text-gray-500">
            {config?.footer.copyright}
          </p>
          <p className="text-sm leading-5 text-gray-500">
            Website by{' '}
            <a href="" className="underline">
              Website Developer
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

// export function Footer({ className, ...props }) {
//   return (
//     <footer id="footer" className={clsx('footer', className)} {...props}>
//       <Container>
//         <div className="grid md:grid-cols-4 md:gap-16 space-y-8 sm:space-y-0">
//           <div>
//             <Link href="/">
//               <Logo />
//             </Link>
//             {config?.footer.description && (
//               <p className="text-sm leading-6 mt-6">
//                 {config?.footer.description}
//               </p>
//             )}
//             <SocialMedia className="mt-6" />
//           </div>
//           <div>
//             <p className="mb-3 font-semibold text-sm">Navigation</p>
//             <ul role="list" className={clsx('list', className)}>
//               {config?.navigation.map((item) => (
//                   <li key={item.label}>
//                     <Link href={item.href} className="inline-block text-sm py-1">
//                       {item.label}
//                     </Link>
//                   </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <p className="mb-3 font-semibold text-sm">Address</p>
//             <div className="space-y-1">
//               <p className="text-sm">{config.business.address.street}</p>
//               <p className="text-sm">{config.business.address.suburb}, {config.business.address.postcode}</p>
//               <p className="text-sm">{config.business.address.city}</p>
//             </div>
//           </div>
//           <div>
//             <p className="mb-3 font-semibold text-sm">Contact</p>
//             <ul>
//               <li>
//                 <a href={`tel:${config.business.phone}`} className="text-sm">{config.business.phone}</a>
//               </li>
//               <li>
//               <a href={`mailto:${config.business.email}`} className="text-sm underline">{config.business.email}</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="sm:flex sm:justify-between border-t border-gray-900/10 pt-8 mt-8 lg:mt-24">
//           <div className="flex space-x-6">
//             <p className="text-xs leading-5 text-gray-500">{config?.footer.copyright}</p>
//             <a href="/terms-and-conditions" className="text-xs leading-5 text-gray-500 underline">Terms & Conditions</a>
//             <a href="/privacy-policy" className='text-xs leading-5 text-gray-500 underline'>Privacy Policy</a>
//           </div>
//           <p className="text-xs leading-5 text-gray-500">Website by <a href="" className='underline'>Website Developer</a></p>
//         </div>
//       </Container>
//     </footer>
//   )
// }
