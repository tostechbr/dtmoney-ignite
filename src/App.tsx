import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModalOpen(){
        setIsNewTransactionsModalOpen(true);
  }
  function handleCloseNewTransactionsModalOpen(){
        setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider> 
        <Header onOpenNewTransactionModal = {handleOpenNewTransactionsModalOpen}/>

        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionsModalOpen}
        />

        <GlobalStyle />
    </TransactionsProvider>
  );
}
