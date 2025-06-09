import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredItems } from '../../features/items/itemsSlice';
import { handleEdit, handleDelete } from '../../features/items/itemsSlice';
import Item from '../Item/Item';
import Filter from '../Filter/Filter';
import './ItemList.css';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectFilteredItems);

  return (
    <div className="list-container">
      <h2>Список</h2>
      <Filter />
      {items.length === 0 ? (
        <p className="empty-message">Нет добавленных услуг</p>
      ) : (
        <div className="table-container">
          <div className="table-header">
            <div>Услуга</div>
            <div className="price">Цена</div>
            <div>Действия</div>
          </div>
          
          {items.map(item => (
            <Item 
                key={item.id} 
                item={item} 
                onEdit={() => dispatch(handleEdit(item))} 
                onDelete={() => dispatch(handleDelete(item.id))} 
              />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
