import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../../features/items/itemsSlice';
import './Filter.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Поиск по услугам..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="filter-input"
      />
      <button
      onClick={() => dispatch(setFilter(''))}
      className="btn-filter">Очистить</button>
    </div>
  );
};

export default Filter;
