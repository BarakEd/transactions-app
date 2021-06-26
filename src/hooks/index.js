import { useEffect, useState } from "react";
import { FETCH_URL } from '../constants/urls';

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      
      const res = await fetch(FETCH_URL)
      .then(res => res.json())
      .catch(e => console.error(e));

      setTransactions(res);
    };
    fetchTransactions()
  }, []);

  return transactions;
};