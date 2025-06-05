import React from "react";

const MenuCard = ({ item }) => (
  <div className="border rounded p-4 shadow" style={{ borderColor: "var(--color-primary)" }}>
    <h3 className="font-semibold text-lg" style={{ color: "var(--color-callout)" }}>
      {item.title}
    </h3>
    <p className="text-sm" style={{ color: "var(--color-accent)" }}>
      {item.description}
    </p>
    <p className="mt-2 font-medium" style={{ color: "var(--color-primary)" }}>
      {item.price}
    </p>
  </div>
);

export default MenuCard;
