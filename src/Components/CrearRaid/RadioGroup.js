import React, { Component } from 'react';
import styles from './CrearRaid.module.css';

class RadioGroup extends Component {
    render() {
        const raid = this.props.raid;
        const selected = raid.id === this.props.selected;
        if(selected){
            return(
                <div className={`${styles.tile} ${styles.checked}`}>
                    <label>
                        <input id={raid.id} hidden name="raid" type="radio" value={raid.id} 
                            checked={selected}
                            onChange={this.props.handleChange} /> 
                        <img className={styles.thumbnail} src={raid.imagen} />
                        <div className={styles.tiletitle}>
                            {raid.title}                        
                            <div>
                                <small>Luz recomendada: {raid.luzRecomendada}</small>
                            </div> 
                        </div>
                    </label>
                </div>  
            )
        }else{
            return (
                <div className={styles.tile}>
                    <label>
                        <input id={raid.id} hidden name="raid" type="radio" value={raid.id} 
                            checked={selected}
                            onChange={this.props.handleChange} /> 
                        <img className={styles.thumbnail} src={raid.imagen} />
                        <div className={styles.tiletitle}>
                            {raid.title}                        
                            <div>
                                <small>Luz recomendada: {raid.luzRecomendada}</small>
                            </div> 
                        </div>                    
                    </label>
                </div>       
            );
        }
    }
}

export default RadioGroup;