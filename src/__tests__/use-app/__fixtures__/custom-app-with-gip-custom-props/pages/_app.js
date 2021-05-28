import React from 'react';
import App from 'next/app';

export default function CustomApp({ Component, pageProps, customProps }) {
  return (
    <>
      _app
      <Component {...pageProps} />
      {customProps && 'ok'}
    </>
  );
}

CustomApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const customProps = true;
  return { ...appProps, customProps };
};
