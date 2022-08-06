import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {NextIntlProvider} from 'next-intl';
import {Provider} from "react-redux";
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from '../redux/reducers'
import '../styles/globals.css'
let store


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
      <div>
        <NextIntlProvider messages={pageProps.messages}>
        <Provider store={store}><React.Fragment>
          <Head>
            <title>Kids-Fit</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Component {...pageProps} />

        </React.Fragment>
        </Provider>
        </NextIntlProvider>
      </div>);
}
function initStore(initialState) {
  return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export default MyApp


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};