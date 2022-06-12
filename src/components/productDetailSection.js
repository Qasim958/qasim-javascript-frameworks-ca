import React, { useEffect, useState } from "react";
import { axiosClient } from "./ProductsSection";

const ProductDetailSection = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [prodData, setProdData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProductDetails() {
      try {
        setLoading(true);
        const response = await axiosClient.get(url);
        response.status === 200 ? setProdData(response.data) : setError(true);
        setLoading(false);
      } catch (e) {
        setError(
          "Something went wrong. Please Check your internet connection."
        );
      }
    }
    getProductDetails();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src={prodData.image} alt={prodData.title} />
      </div>
      <div className="card-header">
        <h3>${prodData.title}</h3>
      </div>
      <div className="card-description">
        <span>${prodData.price} $</span>
      </div>
    </div>
  );
};

export default ProductDetailSection;
