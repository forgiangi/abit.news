import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <html lang="en" />
    <title>abitnews</title>
    <meta
      name="description"
      content="Tech newsletter, programming, ML, AI, blockchain, crytpo, libraries"
    />
    <meta
      name="keywords"
      content="news,newsletter,tech,ai,artificial intelligenge,blockchain"
    />
    <meta property="og:url" content="https://abitnews.com/" />
    <meta property="og:site_name" content="abitnews" />
    <meta property="og:title" content="abitnews" />
    <meta
      property="og:description"
      content="Tech newsletter, programming, ML, AI, blockchain, crytpo, libraries"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://abitnews.com/abitnews-square.png"
    />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400"
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
