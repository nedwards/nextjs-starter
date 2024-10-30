import { navigation } from './navigation'
import { socialMedia } from './socialMedia'
import { google } from './google'
import { footer } from './footer'
import { business } from './business'

// data
export const config = {
  ...business,
  ...google,
  ...footer,
  ...navigation,
  ...socialMedia,
}
