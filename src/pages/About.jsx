import React from "react";
import TransitionWrapper from "../components/TransitionWrapper";

const About = () => (
  <TransitionWrapper>
    <main>
      <h1>About Us</h1>
      <p>
        BreakfastCo began as a family-owned diner in 2010 with a simple mission:
        serve fresh, comforting breakfasts that make every morning brighter.
        Over the years we've grown, but our passion for great food and warm
        service remains at the heart of everything we do.
      </p>
      <p>
        Our team carefully sources local ingredients and bakes from scratch
        every day. We believe in community, quality, and starting the day with a
        smile.
      </p>
      <img
        src="https://images.unsplash.com/photo-1520206187778-024f22d0eda3?auto=format&fit=crop&w=1200&q=80"
        alt="Our cheerful BreakfastCo team"
        style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }}
      />
    </main>
  </TransitionWrapper>
);

export default About;
