import { StorageProvider } from '@/hooks/useStorage'
import { store } from '@/store'
import Global from '@/styles/global'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global />
      <StorageProvider>
        <Component {...pageProps} />
      </StorageProvider>
    </Provider>
  )
}
