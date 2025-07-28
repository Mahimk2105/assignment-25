import React, { useState } from "react";


const initialCards = [
  {
    id: 1,
    title: "React",
    description: "Build interactive UIs with ease.",
    color: "#5f379fff",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 2,
    title: "Node.js",
    description: "JavaScript runtime for server-side development.",
    color: "#69873aff",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    color: "#186a8eff",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

const CardApp = () => {
  const [cards, setCards] = useState(initialCards);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Tech Cards
      </h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: `2px solid ${card.color}`,
              borderRadius: "10px",
              padding: "1rem",
              width: "200px",
              backgroundColor: "#f9f9f9",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img src={card.image} alt={card.title} style={{ width: "60px", height: "60px" }} />
            <h2 style={{ color: card.color }}>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardApp;


