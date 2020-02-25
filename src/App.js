import React from 'react';
import Layout from './components/Layout/Layout'
import Burgerbuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div className="App">
      <Layout>
        <Burgerbuilder />
      </Layout>
    </div>
  );
}

export default App;
