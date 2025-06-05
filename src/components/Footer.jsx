import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    console.log("Footer mounted");
  }, []);

  return (
    <footer
      className="mt-8 text-center text-sm"
      style={{ color: "var(--color-accent)" }}
    >
      &copy; {new Date().getFullYear()} BreakfastCo
    </footer>
  );
};

export default Footer;
