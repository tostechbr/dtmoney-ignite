import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionsModalOpen(){
        setIsNewTransactionsModalOpen(true);
    }
    function handleCloseNewTransactionsModalOpen(){
        setIsNewTransactionsModalOpen(false);
    }

  return (
    <>
        <Header onOpenNewTransactionModal = {handleOpenNewTransactionsModalOpen}/>
        <Dashboard />
        <GlobalStyle />
        <NewTransactionModal 
          isOpen={isNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionsModalOpen}
        />
    </>
  );
}
