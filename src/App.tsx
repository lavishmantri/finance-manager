import './App.css';
import { AddTransaction } from './components/add-transaction';
import { Datasheet } from './components/datasheet';
import { Table } from './components/table';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Datasheet />
      <Table />

      <AddTransaction />
    </div>
  );
}

export default App;
