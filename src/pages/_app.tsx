import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.scss";
import Layout from "../components/layout"

const MyApp: AppType = ({ Component, pageProps }) => {
  return(<Layout>
    <Component {...pageProps} />
  </Layout>)
};

export default MyApp;
