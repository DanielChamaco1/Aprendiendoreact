import '../estilos/App.css';
import ProductTable from './ProductTable';
import { SearchBar } from './SearchBar';
function App() {
  
  return (
    <section className='FilterableProductTable'>
    <SearchBar/>
    <ProductTable/>
    </section>
  );
}

export default App;
