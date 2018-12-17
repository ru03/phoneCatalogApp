import React from 'react';
import classes from './PhoneInfoCard.module.css';

const phoneInfoCard = (props) => (
    <article className={classes.Card}>
        <header className={classes.Header}>
            <img src={props.image}
                 alt={props.model}></img>
            <h1>{props.model}</h1>
        </header>
        <section className={classes.Section}>
            <p>Brand: {props.brand}</p>
            <button className={classes.button} onClick={() => props.clicked(props.id)}>Details</button>
        </section>
    </article>
)

export default phoneInfoCard;