import styles from './App.module.scss';
import { TransactionsListContainer } from './components/transactions-list/TransactionList.container';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <div className={styles.appContent}>
        <TransactionsListContainer />
      </div>
    </div>
  );
}

export default App;
