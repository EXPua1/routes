import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Container, Section } from "./components";
import { Home, About, Products, NotFound, ProductDetails } from "./pages";

const App = () => {
  return (
    <Section>
      <Container>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeclassname="active">
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Section>
  );
};

export default App;
