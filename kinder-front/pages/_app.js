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
import Script from "next/script";
import dynamic from 'next/dynamic'

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
            <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
            <link href="/vendor/aos/aos.css" rel="stylesheet"/>
            <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
            <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
            <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
            <link href="/css/style.css" rel="stylesheet"/>
            <Script src="https://code.jquery.com/jquery-2.1.3.min.js"/>
            <Script src="/vendor/aos/aos.js"/>
            <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
            <Script src="/vendor/glightbox/js/glightbox.min.js"/>
            <Script src="/vendor/isotope-layout/isotope.pkgd.min.js"/>
            <Script src="/vendor/swiper/swiper-bundle.min.js"/>
            <Script src="/vendor/php-email-form/validate.js"/>
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