import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("About page mounted");
  }, []);

  return (
    <div>
      <h2 style={{ color: "var(--color-callout)" }}>About Us</h2>
      <p>We love breakfast and good company.</p>
    </div>
  );
};

export default About;
