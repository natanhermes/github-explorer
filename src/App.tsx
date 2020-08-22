import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const src: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default src;
