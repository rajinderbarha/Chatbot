import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Chatbase chatbot configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "dtveK5Bot3BeaKYccuEdC",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Chatbase chatbot script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = "https://www.chatbase.co/embed.min.js";
                script.defer = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}