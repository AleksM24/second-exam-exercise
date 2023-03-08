type Product = {
  id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
};

const productsArray: Product[] = [
  {
    id: 1,
    title: "iPhone 12",
    description: "This is iPhone 12",
    currency: "UAH:",
    price: 26000,
  },
  {
    id: 1,
    title: "iPhone 8",
    description: "This is iPhone 8",
    currency: "UAH:",
    price: 18000,
  },
  {
    id: 1,
    title: "iPhone X",
    description: "This is iPhone X",
    currency: "UAH:",
    price: 35000,
  },
];

export default productsArray;
