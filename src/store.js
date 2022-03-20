import { writable } from "svelte/store";

export const cart = writable([]);
export const total = writable(0);

export const addToCart = (product) => {
  cart.update((cartValue) => {
    let foundIndex = cartValue.findIndex((item) => item.id === product.id);
    if (foundIndex === -1) {
      product.quantity = 1;
      delete product.description;
      return [...cartValue, product];
    } else {
      cartValue[foundIndex].quantity++;
      return [...cartValue];
    }
  });
};

cart.subscribe((cartValue) => {
  let q = 0;
  cartValue.forEach((item) => (q += item.quantity));
  total.set(q);
});
