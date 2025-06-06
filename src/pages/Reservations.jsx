import React from "react";
import TransitionWrapper from "../components/TransitionWrapper";

const Reservations = () => (
  <TransitionWrapper>
    <main>
      <h1>Reserve a Table</h1>
      <p>
        Call us at <a href="tel:+123456789">(123) 456-789</a> between 7am and
        2pm, or send us a request using the form below.
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          maxWidth: "400px",
          margin: "1rem auto",
        }}
      >
        <label>
          Name
          <input type="text" name="name" required style={{ width: "100%", padding: "0.5rem" }} />
        </label>
        <label>
          Date
          <input type="date" name="date" required style={{ width: "100%", padding: "0.5rem" }} />
        </label>
        <label>
          Time
          <input type="time" name="time" required style={{ width: "100%", padding: "0.5rem" }} />
        </label>
        <button type="submit" style={{ marginTop: "0.5rem" }}>
          Submit
        </button>
      </form>
    </main>
  </TransitionWrapper>
);

export default Reservations;
