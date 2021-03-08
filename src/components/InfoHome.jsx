import React from "react";
import { Link } from "react-router-dom";
import "../assets/InfoHome.css";

const InfoHome = () => {
  return (
    <div className="bg">
      <div className="infoHomeContainer">
        <h1 className="infoHomeh1">AHORA ES ONLINE</h1>
        <p className="pColor">
          Con Nissan Store, podes acceder a tu nuevo 0km con todos los servicios
          asociados desde la comodidad de tu sofa
        </p>
        <p className="pColor">Probanos!</p>
        <Link to={"/products"} className="btn btn-danger botonStore">
          INGRESAR AL STORE
        </Link>
      </div>
    </div>
  );
};

export default InfoHome;
