import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Aarogya</h1>
      <p style={styles.subtitle}>Your Trusted Home Nursing Companion</p>
      <div style={styles.features}>
        {["Medicine Tracker", "Pulse Monitoring"].map((title, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundColor: hoveredCard === index ? "#4CAF50" : "#fff",
              color: hoveredCard === index ? "#fff" : "inherit",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Link
              to={index === 0 ? "/medicine" : "/pulse"}
              style={styles.link}
            >
              <h3>{title}</h3>
              <p>{index === 0 ? "Never miss your medication schedule." : "Track your vitals effortlessly."}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor: "#f9f9f9",
    height: "100vh",
    overflow:"hidden"

  },
  title: {
    fontSize: "32px",
    color: "#4CAF50",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    maxWidth: "800px",
    margin: "auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    textAlign: "center",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
};

export default Home;
