import React, { Component, Children } from 'react';
import FormCrearRaid from '../CrearRaid/Form';
import styles from './Main.module.css'; 

class Main extends Component {
  state = {  }

  componentWillMount (){

  };

  render() {
    return (
        <section className={styles.main}>
            <article className={styles.title}>
                <img src="https://res.cloudinary.com/gabke/image/upload/c_scale,w_100/v1560103542/contorno_sin_cuervo_w3dyyn.png" />
                <h1>Dark Legion</h1>
            </article>
            <FormCrearRaid /> 
        </section>    
    );
  }
}

export default Main;