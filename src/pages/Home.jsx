import React from "react";
import { Link } from "react-router-dom";
import menu from "../data/menu.json";
import TransitionWrapper from "../components/TransitionWrapper";

const Home = () => {
  const featured = menu.items.slice(0, 3);

  return (
    <TransitionWrapper>
      <main>
        <section style={{ textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
            alt="Breakfast spread with pancakes and coffee"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h1>Welcome to BreakfastCo</h1>
          <p>Start your day with our hearty and delicious breakfasts.</p>
          <Link to="/reservations">
            <button style={{ marginTop: "1rem" }}>Reserve a Table</button>
          </Link>
        </section>
        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ color: "var(--color-callout)" }}>Featured Items</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {featured.map((item) => (
              <article
                key={item.title}
                style={{
                  border: "1px solid var(--color-primary)",
                  borderRadius: "8px",
                  padding: "1rem",
                  background: "white",
                }}
              >
                <h3 style={{ color: "var(--color-primary)", margin: "0 0 0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0 }}>{item.description}</p>
                <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>{item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </TransitionWrapper>
  );
};

export default Home;
