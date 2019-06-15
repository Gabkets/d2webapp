import React, { Component } from 'react';
import { Raids } from '../../Services/GameInfo';
import styles from './CrearRaid.module.css';
import RadioGroup from './RadioGroup';
import { database } from '../../Services/FirebaseConfig';

let formatDate = (date, localize) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var hs = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

    return {
        completo: dd + '/' + mm + '/' + yyyy + ' ' + min + ':' + hs,
        tiempo: hs + ':' + min,
        fecha: dd + '/' + mm + '/' + yyyy,
        fechaRaw: yyyy + '-' + mm + '-' + dd
    } 
}

class FormCrearRaid extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedOption: '',
            fecha: '',
            hora: '',
            descripcion: '',
            message: '',
            messageType: '',
            oauthLink: '',
            clanInfo: {}
        };
    }

    componentWillMount() {
        var fecha = new Date();
        let today = formatDate(fecha, '');
        
        this.setState({
            fecha: today.fechaRaw,
            hora: today.tiempo
        })
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    handleChangeFecha = (changeFecha) => {
        this.setState({
            fecha: changeFecha.target.value
        });
    }

    handleChangeHora = (changeHora) => {
        this.setState({
            hora: changeHora.target.value
        });
    }

    handleChangeDesc = (changeDesc) => {
        this.setState({
            descripcion: changeDesc.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.selectedOption){
            const raid = Raids.find((raid)=>{
                return raid.id === this.state.selectedOption
            })
    
            let fixedDate = this.state.fecha.split('-');
            fixedDate = fixedDate[2] + '/' + fixedDate[1] + '/' + fixedDate[0];      
            
            var uruguay = new Date(this.state.fecha + ' '+ this.state.hora).toLocaleString("en-US", {timeZone: "America/Montevideo"});
            var chile = new Date(this.state.fecha + ' '+ this.state.hora).toLocaleString("en-US", {timeZone: "America/Santiago"});
            var mexico = new Date(this.state.fecha + ' '+ this.state.hora).toLocaleString("en-US", {timeZone: "America/Mexico_City"});
            var time = uruguay + ':flag_uy:\n' + chile + ':flag_cl:\n' + mexico + ':flag_mx:\n';
    
            database.ref('Raids/Agenda/' + Math.floor(Date.now() / 100)).set({
                title: raid.title,
                fecha: fixedDate,
                hora: time,
                imagen: raid.imagen,
                luz: raid.luzRecomendada,
                descripcion: this.state.descripcion
            }, (error) => {
                if(error) {
                    
                } else {
                    this.setState({
                        message: 'Estamos comunicandonos con tu robot, en breve tu evento estará publicado en Discord.',
                        messageType: 'success'
                    });
    
                    setTimeout(()=>{
                        this.setState({
                            message: '',
                            messageType: ''
                        });
                    }, 10000)
                }
            });
        }
    }


    render() {
        let messagetype;
        
        if(this.state.messageType === 'success'){
            messagetype = `${styles.message} ${styles.success}`
        }else {
            messagetype = `${styles.message} ${styles.error}`
        } 

        return (            
            <form onSubmit={this.handleSubmit}>
                <div className={messagetype}>{this.state.message}</div>
                <h2 className={styles.cabezal}>Administrado de Equipos de Raid</h2>
                <h3 className={styles.cabezal}>Seleccione una Incurción</h3>
                <article className={styles.tiles}>                    
                    {Raids.map((raid) => {
                        return (
                            <RadioGroup key={raid.id} handleChange={this.handleOptionChange} raid={raid} selected={this.state.selectedOption}/>                  
                        )
                    })}
                </article>

                <article className={styles.formbox}>
                    <label for="meeting-time">Fecha y hora:</label>
                    <div className={styles.inlineinputs}>
                        <input type="date" id="fecha" className={styles.input} onChange={this.handleChangeFecha} value={this.state.fecha}/>
                        <input type="time" id="hora" className={styles.input}  onChange={this.handleChangeHora} placeholder="Agrega una hora. Ejemplo: 10pm" value={this.state.hora}/>
                    </div>                    
                </article>

                <article className={styles.formbox}>
                    <label for="descripcion">Descripcion</label>
                    <div>
                        <textarea className={styles.input} onChange={this.handleChangeDesc} name="descripcion" id="descripcion" placeholder="Agrega una descripcion"/>
                    </div>                    
                </article>

                
                <article className={styles.formbox}>
                    <div>
                        <button className={styles.button}>Crear evento</button>
                    </div>                    
                </article>
            </form>
        );
    }
}

export default FormCrearRaid;