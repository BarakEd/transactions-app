import React, { useState, useEffect } from 'react';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import AddTransactionDialog from '../AddTransactionDialog';
import Button from '../Button';
import { useFetchTransactions } from '../../hooks';
import { TRANSACTIONS_URL } from '../../constants/urls';
import styles from './TransactionsPage.style';

const TransactionsPage = () => {
  const { transactions } = useFetchTransactions();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [transactionsData, setTransactionsData] = useState(transactions);
  console.log(transactions);

 useEffect(() => {
  setTransactionsData(transactions);
  }, [transactions]);
  
  const addTransactionHandler = async (tradingParty, counterParty, amount) => {
    console.log(tradingParty, counterParty, amount);

    const res = await fetch(TRANSACTIONS_URL, {
      method: 'POST',
      body: JSON.stringify({ tradingParty, counterParty, amount }),
      mode: 'cors',
    })
    .then(res => res.json())
    .catch(e => console.error(e));

    console.log(res);
    if(res?.transactions?.length){
      setTransactionsData(res?.transactions);
    }
  };

  const openAddDialogHandler = () => {
    setIsAddDialogOpen(true);
  }

  const closeAddDialogHandler = () => {
    setIsAddDialogOpen(false);
  }

  const payingData = transactionsData
    ?.map?.(payTrans => ({
      name: payTrans.tradingParty,
      amount: Math.abs(payTrans.amount),
    }));

  const receivingData = transactionsData
    ?.map?.(payTrans => ({
    name: payTrans.counterparty,
    amount: payTrans.amount,
  }));

  return (
    <styles.container>
      <styles.TablesWrapper>
      <styles.TableWrapper>
        <styles.Title>
          Paying
        </styles.Title>
      <TransactionsTable data={ payingData }/>
      <Button onClickHandler={ openAddDialogHandler } label='Add New Transaction'/>
    </styles.TableWrapper>
    <styles.TableWrapper>
        <styles.Title>
          Receiving
        </styles.Title>
      <TransactionsTable data={ receivingData }/>
      <Button onClickHandler={() => {}} label='Compress Transactions'/>
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