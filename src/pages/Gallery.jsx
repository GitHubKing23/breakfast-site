import React from "react";
import TransitionWrapper from "../components/TransitionWrapper";

const images = [
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    alt: "Stack of pancakes with berries",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    alt: "Bright cafe interior with wooden tables",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    alt: "Friends enjoying breakfast together",
  },
];

const Gallery = () => (
  <TransitionWrapper>
    <main>
      <h1>Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ))}
      </div>
    </main>
  </TransitionWrapper>
);

export default Gallery;
