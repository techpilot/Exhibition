import 'tailwindcss/tailwind.css'
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { Provider as AuthProvider } from "next-auth/client"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
