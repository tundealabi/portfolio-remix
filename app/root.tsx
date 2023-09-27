import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
// import styles from 'react-multi-carousel/lib/styles.css';
import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import { Analytics } from '@vercel/analytics/react';

// console.log(styles);

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/react-multi-carousel@2.8.2/lib/styles.css',
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tunde Alabi | Portfolio',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
