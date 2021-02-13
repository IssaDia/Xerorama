import { AuthProvider } from '../src/contexts/auth-provider-firebase'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
