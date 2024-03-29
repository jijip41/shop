import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, get, ref, set, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export async function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await getUserWithAdmin(user) : null;

    return callback(updatedUser);
  });
}

async function getUserWithAdmin(user) {
  return get(ref(db, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);

        return { ...user, isAdmin };
      }
      return user;
    })
    .catch(console.error);
}

export async function addNewProduct(inputValue, url) {
  const id = uuid();

  return set(ref(db, `products/${id}`), {
    ...inputValue,
    id,
    price: parseInt(inputValue.price),
    options: inputValue.options.split(', '),
    imageUrl: url,
  });
}

export async function getProducts() {
  return get(ref(db, 'products'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    })
    .catch(console.error);
}

export async function getProductById(id) {
  const products = await getProducts().catch(console.error);
  const product = products.find((product) => product.id === id);

  return product ? product : [];
}

export async function getCartById(userId) {
  return get(ref(db, `carts/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addOrUpdateProductToCart(userId, product) {
  if (product.quantity === 0) {
    return removeProductFromCart(userId, product.productId);
  }
  return set(ref(db, `carts/${userId}/${product.productId}`), product);
}

export async function removeProductFromCart(userId, productId) {
  return remove(ref(db, `carts/${userId}/${productId}`));
}
