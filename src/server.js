import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './client/App';
import Html from './client/Html';

const port = 3000;
const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'dist')));

server.get('/', (req, res) => {
  const body = renderToString(<Router><App /></Router>);
  const title = 'Server side rendering with styled components';

  res.send(
    Html({
      body,
      title
    })
  );
});

server.listen(port);
