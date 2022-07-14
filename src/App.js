import React, { useState } from "react";
import "./styling/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        base: base,
      };
    });
  };
  // console.log(pizza);

  const addTopping = (topping) => {
    let newToppings;

    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  // console.log(pizza.toppings);

  return (
    <div className="App">
      <Header />
      <Modal showModal={showModal} handleModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          ></Route>
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          ></Route>
          <Route
            path="/order"
            element={<Order pizza={pizza} handleModal={setShowModal} />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
