const products = [
  {
    id: 1,
    name: "Hoodie",
    description: "Cool Orange Hoodie for you",
    price: 49.95,
    image: "hoodie.png",
    slug: "hoodie",
    stock: 10,
  },
  {
    id: 2,
    name: "Ballet Shoes",
    description: "Cool Ballet Shoes for you",
    price: 17,
    oldPrice: 22,
    image: "ballet-shoes.png",
    slug: "ballet-shoes",
    stock: 2,
  },
  {
    id: 3,
    name: "Coat",
    description: "Cool warm Coat for you",
    price: 180,
    image: "coat.png",
    slug: "coat",
    stock: 5,
    tag: "New",
  },
  {
    id: 4,
    name: "Sneakers",
    description: "Cool Sneakers for you",
    price: 149.99,
    image: "sneakers.png",
    slug: "sneakers",
    stock: 3,
    tag: "Hot",
  },
  {
    id: 5,
    name: "Trousers",
    description: "Cool fancy Trousers for you",
    price: 8.99,
    image: "trousers.png",
    slug: "trousers",
    stock: 0,
  },
  {
    id: 6,
    name: "Hawaiian Shirt",
    description: "Quagmire's Hawaiian Shirt for you",
    price: 15,
    oldPrice: 20,
    image: "hawaiian-shirt.png",
    slug: "hawaiian-shirt",
    stock: 8,
  },
  {
    id: 7,
    name: "Tri-color Jacket",
    description: "Cool Tri-color Jacket for you",
    price: 249.95,
    image: "jacket.png",
    slug: "jacket",
    stock: 10,
    tag: "Hot",
  },
  {
    id: 8,
    name: "Dress",
    description: "Sweet Dress for you",
    price: 140,
    image: "dress.png",
    slug: "dress",
    stock: 10,
    tag: "New",
  },
  {
    id: 9,
    name: "Jeans",
    description: "Cool Denim for you",
    price: 20,
    oldPrice: 30,
    image: "pants.png",
    slug: "pants",
    stock: 10,
  },
];

export const getProducts = () => {
  return products;
};
export const getProduct = (slug) => {
  return products.find((product) => slug === product.slug);
};
