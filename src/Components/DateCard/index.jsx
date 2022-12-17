import React from "react";
import { CardContainer } from "./style";

export default function DateCard(props) {
    const place = props.place
    const dates = props.dates
    const budget = props.budget
    const person = props.person

    return (
        <>
            <CardContainer>
                <p><strong>Lugar:</strong> {place}</p>
                <p><strong>Data:</strong> {dates}</p>
                <p><strong>Orçamento:</strong> {budget}</p>
                <p><strong>Quem vai planejar:</strong> {person}</p>
            </CardContainer>
        </>
    )
}