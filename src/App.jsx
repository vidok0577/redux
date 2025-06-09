import { Provider } from 'react-redux';
import { store } from './app/store';
import ItemForm from './components/ItemForm/ItemForm';
import ItemList from './components/ItemList/ItemList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Учет услуг</h1>
        <ItemForm />
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;
