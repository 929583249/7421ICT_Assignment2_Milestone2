// redux/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { ...action.payload, quantity: 1 }; // Ensure items are objects with a quantity field
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(newItem);
      }
      return {
        ...state,
        items: [...state.items],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + newItem.price
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - state.items.find(item => item.id === action.payload).price
      };
    case INCREASE_QUANTITY:
      const itemToIncrease = state.items.find(item => item.id === action.payload);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + itemToIncrease.price
        };
      }
      break;
    case DECREASE_QUANTITY:
      const itemToDecrease = state.items.find(item => item.id === action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - itemToDecrease.price
        };
      } else if (itemToDecrease.quantity === 1) {
        // Automatically remove the item if quantity reaches zero
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - itemToDecrease.price
        };
      }
      break;
    default:
      return state;
  }
};

export default cartReducer;
