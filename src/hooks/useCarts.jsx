import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import {
  addOrUpdateProductToCart,
  getCartById,
  removeProductFromCart,
} from '../api/firebase';

export default function useCarts(props) {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(['carts'], () => getCartById(uid));

  const addToCart = useMutation(
    (product) => addOrUpdateProductToCart(uid, product),
    { onSuccess: () => queryClient.invalidateQueries(['carts']) }
  );

  const removeFromCart = useMutation(
    (productId) => removeProductFromCart(uid, productId),
    { onSuccess: () => queryClient.invalidateQueries(['carts']) }
  );

  return {
    cartsQuery,
    addToCart,
    removeFromCart,
  };
}
