import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./components/layout/Layout";

export const meta: MetaFunction = () => {
  return { title: "Todo List App with Remix" };
};

export const Document = ({title = `Todo List`, children}:
  {title?:string,children: React.ReactNode})=>{
  return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {

  return (
    <Document>
      <ChakraProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  );
}
