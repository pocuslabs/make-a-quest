import { GameContextProvider } from "~/hooks/useGame"

import "normalize.css"
import '~/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
		<GameContextProvider>
			<Component {...pageProps} />
		</GameContextProvider>
	);
}

export default MyApp
