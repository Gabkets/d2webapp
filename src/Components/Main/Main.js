import React, { Component, Children } from 'react';
import FormCrearRaid from '../CrearRaid/Form';
import styles from './Main.module.css'; 
import { traveler } from '../../Services/Traveler';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = { 
        clanInfo: {},
        clanMember: {}
    };
}

  componentWillMount (){
    
    /*traveler.getClanInfo().then((res) => {
      this.setState({
          clanInfo: JSON.parse(res).Response.detail
      })
    });*/

    /*traveler.getClanMember().then((res) => {
      debugger;
      this.setState({
          clanMember: JSON.parse(res).Response.detail
      })
    });*/

  };

  render() {
    const banner = "https://www.bungie.net/" + this.state.clanInfo.bannerPath;
    return (
        <section className={styles.main}>
            <article className={styles.title}>
                <img src="https://res.cloudinary.com/gabke/image/upload/c_scale,w_100/v1560103542/contorno_sin_cuervo_w3dyyn.png" />
                <h1>{this.state.clanInfo.name}</h1>
            </article>
            <FormCrearRaid /> 
        </section>    
    );
  }
}

export default Main;