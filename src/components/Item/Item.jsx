import './Item.css';

const Item = ({ item, onEdit, onDelete }) => {
  return (
    <div className="table-row">
      <div className="service-name">{item.name}</div>
      <div className="service-price">{item.price} ₽</div>
      <div className="item-actions">
        <button 
          onClick={onEdit}
          className="btn-item btn-edit"
          aria-label="Редактировать"
        >
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button 
          onClick={onDelete}
          className="btn-item btn-delete"
          aria-label="Удалить"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Item;
