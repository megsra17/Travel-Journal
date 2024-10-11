import React from "react";
import Card from "./components/Card.js";
import Header from "./components/Header.js";
import data from "./data.js";

export default function App() {
  const cards = data.map((items) => {
    return <Card key={items.id} {...items} />;
  });
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}
