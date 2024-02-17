import React from "react";
import getApi from "../hooks/getApi";
import { Link } from "react-router-dom";

function Products() {
  const {data:products, loading} = getApi("products");
  if(loading) return <h1>Loading...</h1>
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id} className="products__item">
            <img src={product.image} alt="" className="products__img" />
            <h3 className="products__name">{product.title}</h3>
            <p className="products__description">{product.description}</p>
            <div className="products__info">
            <span className="products__price">Price: {product.price}</span>
            <Link  to="/">More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
