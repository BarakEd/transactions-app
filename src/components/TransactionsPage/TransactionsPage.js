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

  const payingData = transactionsData?.filter(item => item.amount < 0)
    ?.map?.(payTrans => ({
      name: payTrans.counterParty,
      amount: Math.abs(payTrans.amount),
      id: payTrans.id,
    }));

  const receivingData = transactionsData?.filter(item => item.amount > 0)
    ?.map?.(receiveTrans => ({
    name: receiveTrans.counterParty,
    amount: receiveTrans.amount,
    id: receiveTrans.id,
  }));

  const renderAddDialog = () => {
    return isAddDialogOpen && (<AddTransactionDialog 
        handleClose={ closeAddDialogHandler }
        isOpen={ isAddDialogOpen }
        handleAdd={ addTransactionHandler }
      />);
  };

  return (
    <styles.container>
      <styles.Wrapper>
        <styles.TablesWrapper>
          <styles.TableWrapper>
            <styles.Title>
              Paying
            </styles.Title>
            <TransactionsTable data={ payingData }/>
          </styles.TableWrapper>
          <styles.TableWrapper>
            <styles.Title>
              Receiving
            </styles.Title>
            <TransactionsTable data={ receivingData }/>
          </styles.TableWrapper>
        </styles.TablesWrapper>
        <styles.Footer>
          <styles.ButtonsWrapper>
            <Button 
              onClickHandler={ openAddDialogHandler } 
              label='Add New Transaction'/>
            <Button
              onClickHandler={ compressHandler } 
              label='Compress Transactions'/>
          </styles.ButtonsWrapper>
        </styles.Footer>
      </styles.Wrapper>
      {renderAddDialog()}
      </styles.container>
  );
};

export default TransactionsPage;