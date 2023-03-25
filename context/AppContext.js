import { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const updatedCart = [...state.cart];

        const index = updatedCart.findIndex((uc) => uc.id === action.id);
        if (index < 0) {
          updatedCart.push({
            id: action.id,
            name: action.name,
            image: action.image,
            quantity: 1,
          });
        } else {
          const updatedItem = { ...updatedCart[index] };
          updatedItem.quantity++;
          updatedCart[index] = updatedItem;
        }
        return {
          ...state,
          cart: updatedCart,
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          cart: state.cart.filter((ci) => ci.id !== action.id),
        };
      default:
        // throw new Error();
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
