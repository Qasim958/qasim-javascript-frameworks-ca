import React from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";

const Admin = () => {
  return (
    <div>
      <Nav active={false} signin={true} />
      <main>
        <section className="productsSection">
          <div className="sectionHeading">
            <h3>Welcome to Admin Panel</h3>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
