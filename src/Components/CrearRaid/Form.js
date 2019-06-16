import React, { Component } from 'react';
import { Raids, Timezones } from '../../Services/GameInfo';
import styles from './CrearRaid.module.css';
import RadioGroup from './RadioGroup';
import { reorderDate, formatDate, discorDateField } from '../../Utils/Utils';
import CreateRaid from '../../Services/CreateRaid';
import Preview from './Preview';

class FormCrearRaid extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedOption: '',
            fecha: '',
            hora: '',
            descripcion: 'No hay descripción aun',
            message: '',
            messageType: '',
            raid: {
                title: 'No seleccionada',
                luz: '000'
            },
            parsedDate: 'No seleccionada'
        };
    }

    componentWillMount() {
        var fecha = new Date();
        let today = formatDate(fecha, '');
        const locale = Timezones(today.fechaRaw + ' ' + today.tiempo);
        const reorderedDates = reorderDate(locale);
        const datetime = discorDateField(reorderedDates);
        
        this.setState({
            fecha: today.fechaRaw,
            hora: today.tiempo,
            parsedDate: datetime
        });
    }

    handleOptionChange = (changeEvent) => {
        const raid = Raids.find((raid)=>{
            return raid.id === changeEvent.target.value
        })

        this.setState({
            selectedOption: changeEvent.target.value,
            raid: raid
        });        
    }

    handleChangeFecha = (changeFecha) => {
        const locale = Timezones(changeFecha.target.value + ' ' + this.state.hora);
        const reorderedDates = reorderDate(locale);
        const datetime = discorDateField(reorderedDates);
        
        this.setState({
            fecha: changeFecha.target.value,
            parsedDate: datetime
        });
    }

    handleChangeHora = (changeHora) => {
        let fixedDate = this.state.fecha.split('-');
        fixedDate = fixedDate[2] + '/' + fixedDate[1] + '/' + fixedDate[0];
        const locale = Timezones(this.state.fecha + ' ' + changeHora.target.value);
        const reorderedDates = reorderDate(locale);
        const datetime = discorDateField(reorderedDates);

        this.setState({
            hora: changeHora.target.value,
            parsedDate: datetime
        });
    }

    handleChangeDesc = (changeDesc) => {
        this.setState({
            descripcion: changeDesc.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.selectedOption && false){
            CreateRaid(this.state.raid, this.state.datetime, this.state.descripcion).then((res) => {
                if(res === null) {
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
            <section>
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

                    <Preview title={this.state.raid.title} luz={this.state.raid.luz} descripcion={this.state.descripcion} datetime={this.state.parsedDate} imagen={this.state.raid.imagen}/>
                    
                    <article className={styles.formbox}>
                        <div>
                            <button className={styles.button}>Crear evento</button>
                        </div>                    
                    </article>
                </form>
               
            </section>
        );
    }
}

export default FormCrearRaid;