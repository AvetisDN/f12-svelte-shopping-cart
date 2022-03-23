import { writable } from "svelte/store";

export const cart = writable(
  localStorage.cart ? JSON.parse(localStorage.cart) : []
);
export const total = writable(0);
export const summ = writable(0);

const saveToLocalStorage = (array) => {
  localStorage.cart = JSON.stringify(array);
};

export const addToCart = (product) => {
  cart.update((cartValue) => {
    let foundIndex = cartValue.findIndex((item) => item.id === product.id);
    if (foundIndex === -1) {
      product.quantity = 1;
      // delete product.description;
      saveToLocalStorage([...cartValue, product]);
      return [...cartValue, product];
    } else {
      cartValue[foundIndex].quantity++;
      saveToLocalStorage([...cartValue]);
      return [...cartValue];
    }
  });
};

export const deleteFromCart = (id) => {
  cart.update((cartValue) => {
    let foundIndex = cartValue.findIndex((item) => item.id === id);
    cartValue.splice(foundIndex, 1);
    saveToLocalStorage([...cartValue]);
    return [...cartValue];
  });
};

export const incrementQuantity = (id) => {
  cart.update((cartValue) => {
    let foundIndex = cartValue.findIndex((item) => item.id === id);
    if (cartValue[foundIndex].quantity < cartValue[foundIndex].stock) {
      cartValue[foundIndex].quantity++;
    }
    saveToLocalStorage([...cartValue]);
    return [...cartValue];
  });
};
export const decrementQuantity = (id) => {
  cart.update((cartValue) => {
    let foundIndex = cartValue.findIndex((item) => item.id === id);
    if (cartValue[foundIndex].quantity > 0) {
      cartValue[foundIndex].quantity--;
    }
    saveToLocalStorage([...cartValue]);
    return [...cartValue];
  });
};

cart.subscribe((cartValue) => {
  let q = 0;
  let s = 0;
  cartValue.forEach((item) => {
    q += item.quantity;
    s += item.quantity * item.price;
  });
  total.set(q);
  summ.set(s);
});
