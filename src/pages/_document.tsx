import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => (
  <Html lang="pt-br">
    <Head>
      <link
        rel="shortcut icon"
        href="https://www.edenred.com/themes/custom/edenred/proto/assets/media/favicons/favicon-16x16.png"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <script
        defer
        src="https://cdn.cookielaw.org/consent/daaec1ff-c365-4c92-85ec-6b69eea72558/otSDKStub.js"
        type="text/javascript"
        charSet="UTF-8"
        data-domain-script="daaec1ff-c365-4c92-85ec-6b69eea72558"
      ></script>
      <script type="text/javascript">function OptanonWrapper() {}</script>
      <script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5RGV4Z6');
          `,
        }}
      />          
    </Head>
    <body>
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RGV4Z6" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
      </noscript>
      <Main />
      <NextScript />      
    </body>
  </Html>
);

export default Document;
