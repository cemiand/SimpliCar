import React from "react";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <div className="footer bottom">
      <p>
        <strong>Nissan.</strong> Innovation that excites.
      </p>
      <div className="container-fluid footerUl">
        <ul className="row footerUl">
          <li className="col">COTIZACION DE VEHICULOS</li>
          <li className="col">RALITOR S.A.</li>
          <li className="col">AYUDA AL CLIENTE</li>
          <li className="col">NISSAN SOCIAL</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
