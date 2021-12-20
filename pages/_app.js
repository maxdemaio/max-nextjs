import '@/styles/global.css';
// pass session throughout the whole application
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
