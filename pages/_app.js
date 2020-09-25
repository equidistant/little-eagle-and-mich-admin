import App from 'next/app'
import GlobalStyle from '../style/global'
import { Header } from '../components'
import { AuthProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<GlobalStyle/>
			<Header />
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default MyApp