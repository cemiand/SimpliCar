import React from "react";

const SingleProduct = ({ singleProduct }) => {
  return (
    <div className="card col-4" key={singleProduct.id}>
      <img
        src={singleProduct.img_url}
        className="card-img-top"
        alt="singleProduct Car"
      />
      <div className="card-body">
        <h5 className="card-title">{singleProduct.model}</h5>
        <p className="card-text"> ${singleProduct.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
