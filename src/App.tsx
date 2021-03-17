import React,{useState} from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/header/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/Modal';
import Modal from 'react-modal';
import { TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={handleOpenTransactionModalOpen}
      />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModalOpen}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}

export default App;
