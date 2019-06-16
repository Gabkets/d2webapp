import React, { Component } from 'react';
import styles from './Preview.module.css';

class Preview extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <article className={styles.preview}>
                <h1 className={styles.title}>{this.props.title}</h1>
                <p>{this.props.descripcion}</p>
                <section>
                    <h2 className={styles.subtitle}>Fecha</h2>
                    <p>{this.props.datetime}</p>
                </section>
                <img src={this.props.imagen} />
            </article>
        );
    }
}

export default Preview;