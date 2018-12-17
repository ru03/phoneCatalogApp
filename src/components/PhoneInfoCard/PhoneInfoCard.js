import React from 'react';
import classes from './PhoneInfoCard.module.css';

const phoneInfoCard = (props) => (
    <article className={classes.Card}>
        <header className={classes.Header}>
            <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/c/cd/IPhone_X.png/revision/latest?cb=20180625201840"></img>
            <h1>{props.name}</h1>
        </header>
        <section className={classes.Section}>
            <p>Model: {props.desc}</p>
            <button>Detalles</button>
        </section>
    </article>
)

export default phoneInfoCard;