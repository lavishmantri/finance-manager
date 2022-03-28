import styles from './App.module.scss';
import { Loans } from './pages/Loans';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <div className={styles.appContent}>
        <Loans />
      </div>
    </div>
  );
}

export default App;
