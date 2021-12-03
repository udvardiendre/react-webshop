import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Some fancy product",
    description: "Soo good because soo good",
    amount: "70",
    currency: "USD",
    opinions: [{ Fred: "I liked it" }, { John: "I liked it so much" }],
  },
  {
    id: 2,
    title: "Not so fancy product",
    description: "Not soo good because not soo good",
    amount: "7",
    currency: "USD",
    opinions: [{ James: "I did not like it" }, { Bob: "I hated it" }],
  },
  {
    id: 3,
    title: "A product",
    description: "It exist",
    amount: "17",
    currency: "EUR",
    opinions: [
      {
        Harry: "I have it",
      },
    ],
  },
  {
    id: 4,
    title: "Another fancy product",
    description: "Also good",
    amount: "80",
    currency: "USD",
    opinions: [
      { Fred: "I liked it as well" },
      { Rob: "I liked it so much" },
      { Sam: "I just liked it" },
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
        Clark: "What is this",
      },
    ],
  },
];

function Products() {
  const [showOpinions, setShowOpinions] = useState(false);
  const [btnText, changeBtnText] = useState("Show opinions");

  function changeButtonText(id) {
    if (btnText === "Show opinions") {
      changeBtnText("Show description");
      setShowOpinions(true);
    } else if (btnText === "Show description") {
      changeBtnText("Show opinions");
      setShowOpinions(false);
    }
  }

  return products.map((product) => (
    <div key={product.id}>
      <h4>{product.title}</h4>
      {showOpinions ? (
        product.opinions.map((opinion) => (
          <div>
            <p className="opinionDesc">{opinion.value}</p>
            <p className="opinionAuth">{opinion.key}</p>
          </div>
        ))
      ) : (
        <div>
          <p>{product.description}</p>
          <p>{product.amount}</p>
          <p>{product.currency}</p>
        </div>
      )}
      <div className="buttons">
        <button
          key={product.id}
          onClick={() => changeButtonText(product.id)}
          className="showOpinion"
        >
          {btnText}
        </button>
        <button>Add to cart</button>
      </div>
    </div>
  ));
}

export default Products;
