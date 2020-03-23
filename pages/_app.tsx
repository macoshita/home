import { AppProps } from "next/app";
import "~/node_modules/prismjs/themes/prism.css";
import "~/styles.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
