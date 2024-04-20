import React, { Key } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid'

type CardInfo = {
    id: Key & Number,
    name: string,
    imageUrl: string
}



export default function Card(_props: CardInfo){
    return(
        
        <Link className="card" to={`/character/${_props.id}`} key={_props.id}>
        <Grid  className="grid" lg={2} xs={12} sm={6} md={3}>
              

        <div className="cardDiv" key={_props.id} >
            <img src={_props.imageUrl}></img>
            <h1 >{_props.name}</h1>
        </div>
        </Grid>
        </Link>
    );
}

Card.defaultProps = {
    key: 1,
    name: "Unfind",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
}