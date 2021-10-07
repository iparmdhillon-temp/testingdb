import * as React from 'react';
import NextHead from 'next/head';
import { GoogleFonts } from 'next-google-fonts';

const Head = ({ children, title }) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </React.Fragment>
);

export default Head;
