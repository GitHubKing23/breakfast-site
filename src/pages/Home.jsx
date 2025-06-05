import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home page mounted");
  }, []);

  return (
    <div>
      <h2 style={{ color: "var(--color-callout)" }}>Welcome to BreakfastCo</h2>
      <p>Enjoy the best breakfast in town.</p>
    </div>
  );
};

export default Home;
