import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const ubuntu = localFont({
  src: [
    {
      path: "./Ubuntu-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Ubuntu-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Ubuntu-Italic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./Ubuntu-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Ubuntu-LightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./Ubuntu-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Ubuntu-MediumItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Ubuntu-Regular.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ubuntu.className}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  );
}
