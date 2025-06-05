import React, { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    console.log("Gallery page mounted");
  }, []);

  return (
    <div>
      <h2 style={{ color: "var(--color-callout)" }}>Gallery</h2>
      <p>Images coming soon.</p>
    </div>
  );
};

export default Gallery;
