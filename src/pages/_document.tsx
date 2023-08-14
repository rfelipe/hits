import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => (
  <Html lang="pt-br">
    <Head>
      <link
        rel="shortcut icon"
        href="https://www.ticketlog.com.br/static/favicon.png"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <script
        defer
        src="https://cdn.cookielaw.org/consent/daaec1ff-c365-4c92-85ec-6b69eea72558/otSDKStub.js"
        type="text/javascript"
        data-domain-script="daaec1ff-c365-4c92-85ec-6b69eea72558"
      ></script>
      <script type="text/javascript">function OptanonWrapper() {}</script>
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MVR5MFF');
          `
        }}
      />          
    </Head>
    <body>
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVR5MFF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
      </noscript>
      <Main />
      <NextScript />      
    </body>
  </Html>
);

export default Document;
