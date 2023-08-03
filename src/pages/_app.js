import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
    </Layout>
  );
}
