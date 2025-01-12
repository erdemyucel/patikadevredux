import './App.css';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Receipt from './components/Receipt/Receipt';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <ProductList />
      <Receipt />
    </div>
  );
}

export default App;
