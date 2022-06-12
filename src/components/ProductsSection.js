import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_ECOM_URL } from "../Api";

export const axiosClient = axios.create({
  baseURL: BASE_ECOM_URL,
});

const ProductsSection = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await axiosClient.get("products");
        response.status === 200 ? setData(response.data) : setError(true);
        setLoading(false);
      } catch (e) {
        setError(
          "Something went wrong. Please Check your internet connection."
        );
      }
    }
    getProducts();
  }, []);
  if (error) {
    return <h2>{error}</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul id="products">
      {data &&
        data.map((v, i) => {
          return (
            <li key={i}>
              <div className="card">
                <div className="card-img">
                  <img src={v.image} alt={data.title} />
                </div>
                <div className="card-header">
                  <h3>{v.title}</h3>
                </div>
                <div className="card-description">
                  <span>{v.price} $</span>
                </div>
                <div className="card-footer">
                  <button
                    onClick={() => {
                      navigate("/details", {
                        state: { data: v.id },
                      });
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductsSection;
