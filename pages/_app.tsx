import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '~/app/store'

import "normalize.css"
import '~/styles/globals.css'

function MyApp({ Component, pageProps }) {
  	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default MyApp
