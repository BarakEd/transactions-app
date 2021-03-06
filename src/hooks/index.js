import { useEffect, useState } from "react";
import { TRANSACTIONS_URL } from '../constants/urls';

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {

      const res = await fetch(TRANSACTIONS_URL)
      .then(res => res.json())
      .catch(e => console.error(e));

      setTransactions(res?.transactions);
    };
    fetchTransactions()
  }, []);

  return transactions;
}; 