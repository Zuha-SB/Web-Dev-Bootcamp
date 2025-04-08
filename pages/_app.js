import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove any warnings on production
    if (process.env.NODE_ENV === 'production') {
      const { app } = window;
      if (app && app.init) {
        app.init();
      }
    }
  }, []);
  
  return <Component {...pageProps} />;
}

export default MyApp;
