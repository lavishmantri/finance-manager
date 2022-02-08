import styles from './App.module.scss';
import { TransactionsList } from './components/transactions-list';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <div className={styles.appContent}>
        <TransactionsList />
      </div>
    </div>
  );
}

export default App;
