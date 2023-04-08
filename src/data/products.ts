export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
  
const products: IProduct[] = [
{
  id: 1,
  name: "Product 1",
  price: 10.99,
  description: "This is the first product.",
  imageUrl: "/product1.jpeg"
},
{
  id: 2,
  name: "Product 2",
  price: 5.99,
  description: "This is the second product.",
  imageUrl: "/product2.jpeg"
},
{
  id: 3,
  name: "Product 3",
  price: 7.99,
  description: "This is the third product.",
  imageUrl: "/product3.jpeg"
},
{
  id: 3,
  name: "Product 4",
  price: 7.99,
  description: "This is the third product.",
  imageUrl: "/product4.jpg"
}
];

export {
  products
}
  