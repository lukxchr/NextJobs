import '../styles/tailwind.css'
import '../styles/globals.css'
import { AuthProvider } from '../auth/firebase-auth'

function MyApp ({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
