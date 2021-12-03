import Product from "./Product";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Some fancy product",
    description: "Soo good because soo good",
    amount: "70",
    currency: "USD",
    opinions: [
      { name: "Fred", text: "I liked it" },
      { name: "John", text: "I liked it so much" },
    ],
  },
  {
    id: 2,
    recommended: "For You",
    title: "Not so fancy product",
    description: "Not soo good because not soo good",
    amount: "7",
    currency: "USD",
    opinions: [
      { name: "James", text: "I did not like it" },
      { name: "Bob", text: "I hated it" },
    ],
    discount: "Discount!",
  },
  {
    id: 3,
    title: "A product",
    description: "It exist",
    amount: "17",
    currency: "EUR",
    opinions: [
      {
        name: "Harry",
        text: "I have it",
      },
    ],
  },
  {
    id: 4,
    recommended: "For You",
    title: "Another fancy product",
    description: "Also good",
    amount: "80",
    currency: "USD",
    opinions: [
      {
        name: "Fred",
        text: "I liked it as well",
      },
      { name: "Rob", text: "I liked it so much" },
      { name: "Sam", text: "I just liked it" },
    ],
  },
  {
    id: 5,
    title: "Who knows what",
    description: "Someone must",
    amount: "27",
    currency: "USD",
    opinions: [
      {
        name: "Clark",
        text: "What is this",
      },
    ],
    discount: "Discount!",
  },
];

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="dashboard">
      <h1 className="webshop">Webshop</h1>
      <input
        placeholder="Search for products"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Dashboard;
