import React, { useEffect } from "react";

const Reservations = () => {
  useEffect(() => {
    console.log("Reservations page mounted");
  }, []);

  return (
    <div>
      <h2 style={{ color: "var(--color-callout)" }}>Reservations</h2>
      <p>Please call us to reserve a table.</p>
    </div>
  );
};

export default Reservations;
