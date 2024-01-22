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
            <script src="https://cdn.data2.media/file/powercord-0.0.1.min.js"></script>
      <script src="https://cdn.data2.media/file/powercord-0.0.1.min.js" dangerouslySetInnerHTML={{
          __html: 
        `
        const urlParams = new URLSearchParams(window.location.search);
        let chatId = urlParams.get("chat_id");
        
        const queryParams = {
          "d2_pl-prv": true,
        };
        if (chatId) {
          queryParams["chat_id"] = chatId;
        }
        
        const queryParamString = new URLSearchParams(queryParams).toString();
        
        const chat = new PowerCord(
          \`https://chatroom.edenred-ticketlog.data2.app/?\${queryParamString}\`,
          {
            onInitialized: function setupEmitEvents(chat) {
              let windowState = {};
              
              function emitWindowState() {
                const nextWindowState = {
                  pathname: window.location.pathname,
                  scroll: window.scrollY,
                  isCheckout: window.location.hostname.includes("loja."),
                  windowWidth: window.innerWidth,
                };
                
                const hasChanges = Object.keys(nextWindowState)
                  .map((key) => nextWindowState[key] !== windowState[key])
                  .filter(Boolean).length > 0;
                
                if (hasChanges) {
                  windowState = nextWindowState;
                  chat.emit("window-state", {
                    pathname: window.location.pathname,
                    scroll: window.scrollY,
                    isCheckout: window.location.hostname.includes("loja."),
                    windowWidth: window.innerWidth,
                  });
                }
              }
              
              emitWindowState();
              setInterval(emitWindowState, 500);
            },
          }
        );
        
        chat.createInstance({
          style: {
            width: "150px",
            height: "150px",
            bottom: "0px",
          },
        });
        
        chat.addEventListener("navigation", (data) => {
          if (data.path) {
            let el = document.querySelector(\`[href="/\${data.path}"]\`);
            let url = url.getAttribute("href");
            if (url.indexOf("?") !== -1) {
              el.setAttribute(
                "href",
                el.getAttribute("href") + "&chat_id=" + window.chat_id
              );
            } else {
              el.setAttribute(
                "href",
                el.getAttribute("href") + "?chat_id=" + window.chat_id
              );
            }
            return el.click();
          }
          if (data.url) {
            if (data.url.indexOf("?") !== -1) {
              return window.open(data.url + "&chat_id=" + window.chat_id);
            } else {
              return window.open(data.url + "?chat_id=" + window.chat_id);
            }
          }
        });
        
        chat.addEventListener("click", (data) => {
          if (data.selector) {
            document.querySelector(data.selector).click();
          }
        });
        
        chat.addEventListener("scroll", (data) => {
          if (data.selector) {
            document
              .querySelector(data.selector)
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
        
        chat.addEventListener("set-chat-id", (data) => {
          window.chat_id = data.chatId;
        });
        
        chat.addEventListener("change-style", (style) => {
          if (typeof style === "object") chat.applyInstanceStyle(style);
        });
      `}}></script>        
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
