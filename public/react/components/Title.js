import React from "react";
import { Link } from "react-router-dom";

const Title = ({ buttonTitle, buttonLink, titleName }) => {
  const styles = {
    header: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#4A6FA5",
      height: "4rem",
      borderBottom: "5px solid #2c2c2c",
    },
    title: {
      fontSize: "2rem",
      color: "white",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    homeButton: {
      position: "absolute",
      left: "1rem",
      top: "50%",
      transform: "translateY(-50%)",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      color: "white",
      backgroundColor: "#3A567E",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      textDecoration: "none",
      transform: "translateY(-50%)",
    },
    homeButtonHover: {
      backgroundColor: "#2f4262",
    },
  };

  return (
    <header style={styles.header}>
      <Link
        to={buttonLink}
        style={styles.homeButton}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor =
            styles.homeButtonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = styles.homeButton.backgroundColor)
        }
      >
        {buttonTitle}
      </Link>
      <h1 style={styles.title}>{titleName}</h1>
    </header>
  );
};

export default Title;
