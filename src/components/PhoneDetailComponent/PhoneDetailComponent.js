import React from 'react';
import classes from './PhoneDetailComponent.module.css';

const phoneDetailComponent = (props) => (
    <article className={classes.PhoneDetail}>
        <section>
            <img src={props.image} alt={props.model}></img>
        </section>
        <section>
            <h1>{props.brand}</h1>
            <div>
                <strong>Model: </strong>{props.model}
            </div>
            <div>
            <strong>Colors: </strong>{props.colors}
            </div>
            <div>
            <strong>Screen Type: </strong>{props.screen}
            </div>
            <div>
            <strong>Price: </strong>{props.price}
            </div>
        </section>
    </article>
)

export default phoneDetailComponent;