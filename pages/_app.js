import Navbar from '../components/navbar';
import '../styles/global.css'; // Includes Tailwind CSS

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}