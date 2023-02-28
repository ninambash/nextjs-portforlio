// // import '@/styles/globals.css';



// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
