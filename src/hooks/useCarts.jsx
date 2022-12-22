import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { addOrUpdateProductToCart, getCartById } from '../api/firebase';

export default function useCarts(props) {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(['carts'], () => getCartById(uid));

  const decreaseQuantity = useMutation(
    (product) =>
      addOrUpdateProductToCart(uid, {
        ...product,
        quantity: product.quantity - 1,
      }),
    { onSuccess: () => queryClient.invalidateQueries(['carts']) }
  );

  const increaseQuantity = useMutation(
    (product) =>
      addOrUpdateProductToCart(uid, {
        ...product,
        quantity: product.quantity + 1,
      }),
    { onSuccess: () => queryClient.invalidateQueries(['carts']) }
  );

  return { cartsQuery, decreaseQuantity, increaseQuantity };
}

// category
// :
// "Women"
// imageUrl
// :
// "http://res.cloudinary.com/dbme8gnz9/image/upload/v1671467664/g2j35i8xmiw90hrw6xhv.webp"
// name
// :
// "Shorts"
// option
// :
// "XS"
// price
// :
// 89
// productId
// :
// "0d227b80-bbed-4a0f-bdbd-9751d2e3d15a"
// quantity
// :
// 4
