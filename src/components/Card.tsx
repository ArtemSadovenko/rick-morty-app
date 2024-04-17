import React, { Key } from "react";
import { Link } from "react-router-dom";

type CardInfo = {
    id: Key & Number,
    name: string,
    imageUrl: string
}



export default function Card(_props: CardInfo){
    return(
        <Link to={`/character/${_props.id}`} key={_props.id}>
        <div key={_props.id} >
            <img src={_props.imageUrl}></img>
            <h1>{_props.name}</h1>
        </div>
        </Link>
    );
}

Card.defaultProps = {
    key: 1,
    name: "Unfind",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
}