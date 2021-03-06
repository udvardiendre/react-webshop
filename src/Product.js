import React, { useState } from "react";

function Product({ product, opinions }) {
  const [showDescription, setShowDescription] = useState(true);

  const toggleContent = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="productContainer">
      {product.recommended && (
        <div className="recommended">
          <p className="recText">{product.recommended}</p>
        </div>
      )}
      <h1 className="title">{product.title}</h1>
      <div className="productContent">
        {showDescription ? (
          <>
            <p className="description"> {product.description} </p>
            <div className="price">
              <p>{product.amount}</p>
              <p className="currency">{product.currency}</p>
            </div>
          </>
        ) : (
          <>
            {product.opinions.map((opinion) => (
              <div className="opinionContainer">
                <p key={opinion.name}>{opinion.text}</p>
                <em>
                  <p key={opinion.name}>({opinion.name})</p>
                </em>
              </div>
            ))}
            <p> {product.opinion} </p>
            <p> {product.opinion} </p>
          </>
        )}
      </div>

      <div className="buttons">
        <button className="descrip" onClick={toggleContent}>
          {showDescription ? "Show opinion" : "Show description"}
        </button>
        <button className="addToCart" disabled>
          Add to cart
        </button>
      </div>

      <div className="discountSign">{product.discount}</div>
    </div>
  );
}

export default Product;
