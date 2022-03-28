import styles from './App.module.scss';
import { Home } from './pages/Home';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <div className={styles.appContent}>
        <Home />
      </div>
    </div>
  );
}

export default App;
