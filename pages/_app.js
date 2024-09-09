import Navbar from "@component/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  if (Component.getLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
