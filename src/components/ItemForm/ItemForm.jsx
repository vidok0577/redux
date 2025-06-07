import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  handleInputChange, 
  handleSubmit, 
  resetForm,
  selectFormData,
  selectIsEditing
} from '../../features/items/itemsSlice';
import './ItemForm.css';

const ItemForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  const isEditing = useSelector(selectIsEditing);

  const handleLocalInputChange = (e) => {
    dispatch(handleInputChange({
      name: e.target.name,
      value: e.target.value
    }));
  };

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSubmit());
  };

  const handleLocalCancel = () => {
    dispatch(resetForm());
  };

  return (
    <div className="form-container">
      <h2>{isEditing ? 'Редактировать' : 'Добавить'}</h2>
      <form onSubmit={handleLocalSubmit} className="inline-form">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleLocalInputChange}
            placeholder="замена стекла"
            required
            className="compact-input"
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleLocalInputChange}
            placeholder="2100"
            required
            className="compact-input price-input"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-form btn-save">
            {isEditing ? 'Обновить' : 'Добавить'}
          </button>
          {isEditing && (
            <button 
              type="button" 
              onClick={handleLocalCancel} 
              className="btn-form btn-cancel"
            >
              Отмена
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
