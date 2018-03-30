import React from 'react';

import AppRouter from '../../routers/AppRouter';
import Header from '../../components/Header';

const App = () => (
  <div>
    <Header />
    <div className="container is-fluid">
      <div className="columns">
        <AppRouter />
      </div>
    </div>
  </div>
);

export default App;
