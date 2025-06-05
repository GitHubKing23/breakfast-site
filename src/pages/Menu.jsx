import React, { useEffect } from "react";
import menuData from "../data/menu.json";
import MenuCard from "../components/MenuCard";

const Menu = () => {
  useEffect(() => {
    console.log("Menu page mounted");
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-callout)" }}>Menu</h2>
      <div className="grid gap-4">
        {menuData.items.map((item, idx) => (
          <MenuCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
