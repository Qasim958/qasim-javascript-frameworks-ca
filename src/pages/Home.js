import React from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
  
  return (
    <>
      <Nav active="home"/>
      <main>
        <section className="productsSection">
        <div className="sectionHeading">
            <h3>Featured Products</h3>
          </div>
          <ProductsSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
