import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Замена стекла', price: '2100' },
    { id: 2, name: 'Замена батарею', price: '3500' },
    { id: 3, name: 'Чистка от пыли', price: '1200' }
  ],
  formData: { id: null, name: '', price: '' },
  isEditing: false,
  filter: ''
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleInputChange: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    handleSubmit: (state) => {
      if (state.isEditing) {
        state.items = state.items.map(item => 
          item.id === state.formData.id ? state.formData : item
        );
      } else {
        const newItem = {
          ...state.formData,
          id: state.items.length > 0 ? Math.max(...state.items.map(item => item.id)) + 1 : 1
        };
        state.items.push(newItem);
      }
      state.formData = { id: null, name: '', price: '' };
      state.isEditing = false;
      state.filter = '';
    },
    handleEdit: (state, action) => {
      state.formData = action.payload;
      state.isEditing = true;
    },
    handleDelete: (state, action) => {
      if (state.isEditing && state.formData.id === action.payload) {
        state.formData = { id: null, name: '', price: '' };
        state.isEditing = false;
      }
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    resetForm: (state) => {
      state.formData = { id: null, name: '', price: '' };
      state.isEditing = false;
    }
  }
});

export const { 
  setFilter, 
  handleInputChange, 
  handleSubmit, 
  handleEdit, 
  handleDelete, 
  resetForm 
} = itemsSlice.actions;

export const selectFilteredItems = createSelector(
  [
    (state) => state.items.items,
    (state) => state.items.filter
  ],
  (items, filter) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.price.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFormData = (state) => state.items.formData;
export const selectIsEditing = (state) => state.items.isEditing;
export const selectFilter = (state) => state.items.filter;

export default itemsSlice.reducer;
