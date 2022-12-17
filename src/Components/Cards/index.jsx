import React from "react";
import { CardContainer } from "./style";

export default function Modal(props) {
    const image = require(`./assets/${props.photo}.jpeg`)
    const title = props.title
    const location = props.location
    const date = props.date

    return (
        <>
            <CardContainer>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{location} | {date}</p>
            </CardContainer>
        </>
    )
}