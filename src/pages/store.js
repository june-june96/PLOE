// src/pages/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
const savedUser = JSON.parse(localStorage.getItem('user')) || { name: 'OO' };

const user = createSlice({
  name: 'user',
  initialState: savedUser,
  reducers: {
    setUser: (state, action) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem('user', JSON.stringify(newState));
      return newState;
    }
  }
});

const cart = createSlice({
  name: 'cart',
  initialState: savedCart,
  reducers: {
    addItem: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.count += action.payload.count;
        if (!item.image && action.payload.image) {
          item.image = action.payload.image;
        }
      } else {
        state.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    addCount: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.count += 1;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    subCount: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.count > 1) item.count -= 1;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    deleteItem: (state, action) => {
      const newState = state.filter(i => i.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }
  }
});

export const { setUser } = user.actions;
export const { addItem, addCount, subCount, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
});
