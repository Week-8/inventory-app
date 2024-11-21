import React, { useEffect, useState } from "react";
import Title from './Title'


const styles = {

    div: {
        width: '100vw',

    },

    div1: {
        display: "flex",
        position: "relative",
        justifyContent: "center",  // Centers horizontally
        alignItems: "center",      // Centers vertically
        height: "100vh",           // Ensures the container takes up the full height of the viewport
        textAlign: 'center',
        padding: "1vh 1vw",
        width: "100vw",       
    },

    paragraph: {
        display: "flex",
        position: "relative",
        padding: "1vh 1vw",
        fontWeight: "bold",
        fontSize: "2vw",
        color: "#2c2c2c",
    },

}


const Cart = () => {
    return (
        <div>
        <div style={styles.div}>
          <Title
            buttonTitle="Inventory"
            buttonLink="/inventory"
            titleName="Home"
          />
        </div>
            <div style={styles.div1}>
            
             <p style={styles.paragraph}>🧰  This area is still in development.  🧰 <br/> Come back later!</p>
            </div>   
        </div>
    )
}

export default Cart;