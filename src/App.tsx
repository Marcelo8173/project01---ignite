import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/header/Header';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
