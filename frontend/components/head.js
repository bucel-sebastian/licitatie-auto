import Head from "next/head";

export default function CustomHead({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle} | Licitații auto</title>
      <link rel="shortcut icon" href="/favicon.ico"></link>

      <meta name="meta-test" content="Acesta este un test" />
    </Head>
  );
}
