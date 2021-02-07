import '../styles/globals.css'

import { Card, AppProvider } from '@shopify/polaris'

function MyApp({ Component, pageProps }) {
  return <AppProvider><Component {...pageProps} /></AppProvider>
  // return <Component {...pageProps} />
}

export default MyApp
