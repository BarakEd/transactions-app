import React, { useState, useEffect } from 'react';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import AddTransactionDialog from '../AddTransactionDialog';
import Button from '../Button';
import { useFetchTransactions } from '../../hooks';
import { addAction, compressAction } from '../../utils';
import styles from './TransactionsPage.style';

const TransactionsPage = () => {
  const transactions = useFetchTransactions();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [transactionsData, setTransactionsData] = useState(transactions);

 useEffect(() => {
  setTransactionsData(transactions);
  }, [transactions]);
  
  const addTransactionHandler = (tradingParty, counterParty, amount) => {
    addAction(tradingParty, counterParty, amount, setTransactionsData);
  };

  const compressHandler = () => {
    compressAction(setTransactionsData);
  }

  const openAddDialogHandler = () => {
    setIsAddDialogOpen(true);
  };

  const closeAddDialogHandler = () => {
    setIsAddDialogOpen(false);
  };

  const payingData = transactionsData
    ?.map?.(payTrans => ({
      name: payTrans.tradingParty,
      amount: Math.abs(payTrans.amount),
      id: payTrans.id,
    }));

  const receivingData = transactionsData
    ?.map?.(receiveTrans => ({
    name: receiveTrans.counterParty,
    amount: receiveTrans.amount,
    id: receiveTrans.id,
  }));

  return (
    <styles.container>
      <styles.TablesWrapper>
      <styles.TableWrapper>
        <styles.Title>
          Paying
        </styles.Title>
      <TransactionsTable data={ payingData }/>
      <Button 
        onClickHandler={ openAddDialogHandler } 
        label='Add New Transaction'/>
    </styles.TableWrapper>
    <styles.TableWrapper>
        <styles.Title>
          Receiving
        </styles.Title>
      <TransactionsTable data={ receivingData }/>
      <Button 
        onClickHandler={ compressHandler } 
        label='Compress Transactions'/>
    </styles.TableWrapper>
      </styles.TablesWrapper>
      <AddTransactionDialog 
        handleClose={ closeAddDialogHandler }
        isOpen={ isAddDialogOpen }
        handleAdd={ addTransactionHandler }
      />
    </styles.container>
  );
};

export default TransactionsPage;