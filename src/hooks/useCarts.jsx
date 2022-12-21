import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { getCartById } from '../api/firebase';

export default function useCarts(props) {
  const { uid } = useAuthContext();

  const cartsQuery = useQuery(['carts'], () => getCartById(uid));

  return { cartsQuery };
}
