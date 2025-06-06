import React from "react";
import menu from "../data/menu.json";
import MenuCard from "../components/MenuCard";
import TransitionWrapper from "../components/TransitionWrapper";

const groupByCategory = (items) => {
  const grouped = {};
  items.forEach((item) => {
    const cat = item.category || "Other";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  });
  return grouped;
};

const Menu = () => {
  const categories = groupByCategory(menu.items);

  return (
    <TransitionWrapper>
      <main>
        <h1>Our Menu</h1>
        {Object.keys(categories).map((cat) => (
          <section key={cat} style={{ marginTop: "1.5rem" }}>
            <h2 style={{ color: "var(--color-callout)" }}>{cat}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {categories[cat].map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </TransitionWrapper>
  );
};

export default Menu;
