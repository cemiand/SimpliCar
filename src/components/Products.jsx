import React from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import "../assets/Products.css";

const Products = ({ products }) => {
  return (
    <React.Fragment>
      <header>
        <h1 className="productsH1">¿CUAL VA A SER TU PROXIMO AUTO?</h1>
      </header>

      <div className="container">
        <div className="row">
          {products ? (
            products.map((product) => {
              return (
                <div className="col-md-4">
                  <div className="card" key={product.id}>
                    <img
                      src={product.img_url}
                      className="card-img-top productImg"
                      alt="Product Car"
                    />
                    <div className="card-body stayBottom">
                      <h5 className="card-title">{product.model}</h5>
                      <p className="card-text"> ${product.price}</p>
                      <Link to={`/product/${product.id}`} className="details">
                        Ver detalles del modelo:
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
