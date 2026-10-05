<template>
  <div class="cart-counter">
    🛒 Carrito: {{ $cartItems.length }} productos
  </div>
</template>

<script setup>
import { useStore } from '@nanostores/vue';
import { cartItems } from '../stores/cartStore';

const $cartItems = useStore(cartItems);
</script>