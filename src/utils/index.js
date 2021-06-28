import { TRANSACTIONS_URL, COMPRESS_URL } from '../constants/urls'

export const addAction = async (tradingParty, counterParty, amount, setTransactions) => {
  const res = await fetch(TRANSACTIONS_URL, {
    method: 'POST',
    body: JSON.stringify({ tradingParty, counterParty, amount }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .catch(e => console.error(e));

  setTransactions(res?.transactions);
};

export const compressAction = async (setTransactions) => {
  const res = await fetch(COMPRESS_URL, { method: 'POST' })
    .then(res => res.json())
    .catch(e => console.error(e));

    setTransactions(res?.transactions);
};