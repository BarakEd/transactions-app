import './App.css';
import { useFetchTransactions } from './hooks';
import TransactionsPage from './components/TransactionsPage';

function App() {
  const { transactions } = useFetchTransactions();
  
  return (
    <div className="App">
      <TransactionsPage transactions={ transactions }/>
    </div>
  );
}

export default App;
