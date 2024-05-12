// redux/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const initialState = {
  items: [],  // items will store product objects
  totalQuantity: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.items.push(newItem);
      }
      return {
        ...state,
        items: [...state.items],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + newItem.price
      };
    case REMOVE_FROM_CART:
      // Implementation of REMOVE_FROM_CART
      return state;
    default:
      return state;
  }
};

export default cartReducer;
