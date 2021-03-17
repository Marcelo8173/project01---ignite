import React,{useState} from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/header/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/Modal';
import Modal from 'react-modal';

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModalOpen() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModalOpen() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={handleOpenTransactionModalOpen}
      />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModalOpen}
      />
      <Dashboard />
    </>
  );
}

export default App;
