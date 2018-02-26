const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;

export default Html;