import React from "react";
import Title from "./Title";
import OnlineShop from "../../../Images/code1.jpg";
import Shopping from "../../../Images/shopping.jpg";
import Multiverse from '../../../Images/multiverse.jpg';

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "20vh",
  },

  mainHeading: {
    display: "flex",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    justifyContent: "center",
    alignItems: "center",
    border: "0.4vw solid #f0423c",
    borderRadius: "2vw",
    padding: "1vh 1vw",
    backgroundColor: "rgba(0,0,0,0.8)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2vw",
    color: "white",
    textShadow: "0 0.2vw 0.4vw rgba(240, 66, 60, 0.3)",
    width: "22vw",
    zIndex: "4",
  },

  titleImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "0",
    padding: "0px",
    borderBottom: "solid #2c2c2c",
  },

  intro: {
    display: "flex",
    position: 'relative',
    flexDirection: "column",
    alignitems: "center",
    marginTop: "2.5%",
    padding: "10px",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    zIndex: "2",
  },

  shopImage: {
    left: "0%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    zIndex: "0",
    borderTop: "10px solid #2c2c2c",
  },

  //vw and vh --> scales with viewport width and height (works as a %)

  introTitle: {
    display: "flex",
    position:'relative',
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "0vh",
    marginBottom: "0",
    border: "0.4vw solid #87CEEB",
    borderRadius: "2vw",
    padding: "1vh 1vw",
    backgroundColor: "rgba(0,0,0,0.95)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2vw",
    color: "white",
    textShadow: "0 0.2vw 0.4vw rgba(135, 206, 235, 0.5)",
    width: "14vw",
  },

  introHeaderssize2: {
    display: "flex",
    justifyContent: "center",
    position: 'relative',
    margin: "0 auto",
    marginTop: "3%",
    marginBottom: "0vh",
    border: "0.4vw solid #d4a53f",
    borderRadius: "2vw",
    padding: "1vh 1vw", // Adjusted padding for proportional scaling
    backgroundColor: "rgba(0,0,0,0.95)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5vw",
    color: "white",
    width: "22vw",
  },

  introHeaderssize3: {
    display: "flex",
    position: 'relative',
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "1.5%",
    marginBottom: "0vh",
    border: "0.4vw solid #d4a53f",
    borderRadius: "2vw",
    padding: "1vh 1vw", // Adjusted padding
    backgroundColor: "rgba(0,0,0,0.95)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.23vw",
    color: "white",
    width: "10vw",
  },

  introHeaderssize4: {
    display: "flex",
    position: 'relative',
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "3%",
    marginBottom: "0vh",
    border: "0.4vw solid #f0423c",
    borderRadius: "2vw",
    padding: "1vh 1vw", // Adjusted padding
    backgroundColor: "rgba(0,0,0,0.95)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2vw",
    color: "white",
    width: "36vw",
  },

  introParagraph: {
    display: "flex",
    position: 'relative',
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "1.5%",
    marginBottom: "0vh",
    border: "0.4vw solid #87CEEB",
    borderRadius: "2vw",
    padding: "1vh 1vw", // Adjusted padding
    backgroundColor: "rgba(0,0,0,0.95)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "0.8vw",
    color: "white",
    width: "40vw",
  },

  otherIntroParagraphs: {
    display: "flex",
    position: 'relative',
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "1.5%",
    marginBottom: "0vh",
    border: "0.5vw solid #d4a53f",
    borderRadius: "2vw",
    padding: "1vh 1vw", // Adjusted padding
    backgroundColor: "rgba(0,0,0,0.95)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "0.8vw",
    color: "white",
    width: "40vw",
  },

  footer: {
    display: 'flex',
    position: 'relative',
    marginBottom:'0%',
    marginTop:'0%',
    width:'100vw',
    borderTop: "10px solid #2c2c2c",
    backgroundColor: '#4A6FA5',
    flexDirection: 'column',

  },

  footText: {
    fontWeight: 'bold',
    position: 'relative',
    color: 'white',
    width:'90vw',
    marginBottom:'-1.2%',
  },

  footText1: {
    fontWeight: 'bold',
    position: 'relative',
    color: 'white',
    width:'50vw',
    display: 'block',
    marginLeft: '1%',
    marginBottom:'0%',
  },

  multiverse: {
    position: "relative",
    left: "96.1%",
    top:'%',
    width: "3%",
    height:'3%',
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    
  }
  
};

const Home = () => {
  return (
    <div className="">
      <div className="w-screen px-0 pt-0">
        <div>
          <Title
            buttonTitle="Inventory"
            buttonLink="/inventory"
            titleName="Home"
          />
        </div>
        <div style={styles.container}>
          <img src={OnlineShop} style={styles.titleImg} />
          <h1 style={styles.mainHeading}>
            Inventory App <br /> A coding challenge
          </h1>
        </div>
        <div>
          <img src={Shopping} style={styles.shopImage} />
        </div>
        <div style={styles.intro}>
          <h1 style={styles.introTitle}>Introduction</h1>
          <p style={styles.introParagraph}>
            We have been tasked by Multiverse to create a Full-Stack (front and
            back end) RESTful CRUD application in the style of an e-commerce
            company.{" "}
          </p>
          <h2 style={styles.introHeaderssize2}>So how does this work?</h2>
          <h3 style={styles.introHeaderssize3}>Front-End</h3>
          <p style={styles.otherIntroParagraphs}>
            On the front-end our website provides an easy to navigate, elegant
            interface for users to create, read, update and delete data. This is
            through a default display of all items in the shops inventory and
            then, using REACT, a user can click one of the many buttons to fetch
            the appropriate Express function from the backend.
          </p>
          <h3 style={styles.introHeaderssize3}>Back-End</h3>
          <p style={styles.otherIntroParagraphs}>
            In the back-end there is a database which is full of different
            products and contains their name, description, price, category,
            image URL and an ID (not visible on the front-end). Once the
            appropriate Express functions have been fetched and executed the
            database will be updated and as a result the front end display will
            adapt, leading to a smooth hassle-free experience for the employees.
          </p>
          <h3 style={styles.introHeaderssize4}>
            To view the site click the 'Inventory' button in the top left!
          </h3>
        </div>
        <footer style={styles.footer}>
              <p style={styles.footText}>This website was developed by Muhammad Hussain and James Gambrill as part of their software engineering Multiverse course.</p>
              <p style={styles.footText1}><br/>This includes: <ul>
                <li>🖥️ The Interface (and all it's elements)</li>
                <li>🌐 The Express routes (POST, GET, PUT and DELETE)</li>
                <li>📦 The Sequelize Model</li>
                <li>🔄 The Fetch Requests</li>
                <li>💾 The SQLite database</li>
                </ul></p> 
          <input
            type="image"
            src={Multiverse}
            alt="Multiverse Link"
            style={styles.multiverse}
            onClick={() => (window.location.href = 'https://www.multiverse.io/en-GB')}
          />
        </footer>
      </div>
    </div>
  );
};

export default Home;
