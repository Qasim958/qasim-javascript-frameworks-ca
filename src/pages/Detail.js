import React from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import { BASE_ECOM_URL } from "../Api";
import { useLocation } from "react-router-dom";
import ProductDetailSection from "./../components/productDetailSection";
const Detail = () => {
  const { state } = useLocation();
  const { data } = state;
  const url = BASE_ECOM_URL + "products/" + data;

  return (
    <div>
      <Nav active={false} />
      <main>
        <section className="productsSection">
          {" "}
          <div className="sectionHeading">
            <h3>Products Detail</h3>
          </div>
          <ProductDetailSection url={url} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
