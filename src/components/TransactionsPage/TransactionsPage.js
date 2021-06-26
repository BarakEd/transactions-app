import React from 'react';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import styles from './TransactionsPage.style';


const TransactionsPage = ({transactions}) => {
  console.log(transactions);

  const payingData = transactions
    ?.map?.(payTrans => ({
      name: payTrans.tradingParty,
      amount: Math.abs(payTrans.amount),
    }));

  const receivingData = transactions
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
      <styles.StyledButton color="primary">Add New Transaction</styles.StyledButton>
    </styles.TableWrapper>
    <styles.TableWrapper>
        <styles.Title>
          receiving
        </styles.Title>
      <TransactionsTable data={ receivingData }/>
      <styles.StyledButton color="primary">Compress Transactions</styles.StyledButton>
    </styles.TableWrapper>
      </styles.TablesWrapper>
    </styles.container>
  );
};

export default TransactionsPage;