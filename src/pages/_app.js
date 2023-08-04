import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            newestOnTop={false}
            closeOnClick
            theme="light"
          />
        </Layout>
      </Provider>
    </main>
  );
}
