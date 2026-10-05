import React from 'react';
import { addCartItem, isCartOpen } from '../stores/cartStore';

export default function AddToCartButton({ product }) {
  const handleClick = () => {
    // Agregamos el producto al store
    addCartItem(product);

    // Abrimos el carrito
    isCartOpen.set(true);

    console.log('Producto agregado:', product);
  };

  return (
    <button onClick={handleClick}>
      Agregar al carrito
    </button>
  );
}