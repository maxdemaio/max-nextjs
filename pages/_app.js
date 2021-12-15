import '@/styles/global.css';
// pass session throughout the whole application
import {Provider} from "next-auth/client";


import {ThemeProvider} from 'next-themes';

export default function App({Component, pageProps}) {
  return (
	<Provider session={pageProps.session}>
	    <ThemeProvider attribute="class">
	      <Component {...pageProps} />
	    </ThemeProvider>
	</Provider>
  );
}
