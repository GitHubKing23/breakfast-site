import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Navbar mounted");
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="shadow-md sticky top-0 z-50" style={{ background: "var(--color-background)" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
          🍳 BreakfastCo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className="font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              <Link to={item.path}>{item.name}</Link>
            </motion.div>
          ))}

          <Link
            to="/reservations"
            className="px-4 py-2 rounded-lg font-semibold transition"
            style={{ background: "var(--color-callout)", color: "white" }}
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          style={{ color: "var(--color-primary)" }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4" style={{ background: "var(--color-background)" }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2"
              style={{ color: "var(--color-accent)" }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="block mt-2 px-4 py-2 rounded-lg font-semibold"
            style={{ background: "var(--color-callout)", color: "white" }}
            onClick={() => setIsOpen(false)}
          >
            Reserve
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
