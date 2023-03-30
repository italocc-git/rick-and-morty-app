import { store } from '@/store';
import Global from '@/styles/global';
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <Global/>
       <Component {...pageProps} />
    </Provider>
    
  )
}
