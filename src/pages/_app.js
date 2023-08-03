import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
