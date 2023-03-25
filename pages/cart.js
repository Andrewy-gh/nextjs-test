import { useContext } from 'react';
import { store } from '@/context/AppContext';
import StoreItem from '@/components/item';

export default function Cart() {
  const { dispatch, state } = useContext(store);
  const total = state.cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const handleItemRemoval = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };
  return (
    <>
      <h1 className="text-2xl">Cart</h1>
      <div>
        {state.cart.map((cartItem) => (
          <div key={cartItem.id}>
            <StoreItem item={cartItem} />
            <select>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <button onClick={() => handleItemRemoval(cartItem.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>Total: {total.toFixed(2)}</div>
    </>
  );
}
