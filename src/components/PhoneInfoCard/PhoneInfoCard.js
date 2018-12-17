import React from 'react';
import classes from './PhoneInfoCard.module.css';

const phoneInfoCard = (props) => (
    <article className={classes.Card}>
        <header className={classes.Header}>
            <img src={props.image}></img>
            <h1>{props.model}</h1>
        </header>
        <section className={classes.Section}>
            <p>Marca: {props.brand}</p>
            <button>Detalles</button>
        </section>
    </article>
)

export default phoneInfoCard;