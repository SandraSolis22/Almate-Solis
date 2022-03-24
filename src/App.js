import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


let producto1 = {
  titulo : 'Mate Sandía',
  precio : '$500',
  imagen : 'mate1.jpeg',
  stock : 3
}
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer props={producto1} />
    </div>
  );
}

export default App;
