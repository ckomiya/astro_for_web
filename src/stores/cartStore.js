import { atom } from 'nanostores';

// Estado: ¿el carrito está abierto?
export const isCartOpen = atom(false);

// Estado: productos del carrito
export const cartItems = atom([]);

// Función para agregar un producto
export function addCartItem(item) {
  const currentItems = cartItems.get();

  cartItems.set([...currentItems, item]);
}