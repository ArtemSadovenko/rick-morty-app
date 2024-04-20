import React, { Key } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid'
import { decode } from "punycode";
import { colors } from "@mui/material";

type CardInfo = {
    id: Key & Number,
    name: string,
    imageUrl: string
}



export default function Card(_props: CardInfo){
    return(         
    <Grid style={{justifyContent:"center", alignItems:"center", display: "flex"}} key={_props.id}  className="grid" item md={3} xs={12} sm={6}>
        
        <Link style={{textAlign: "center", textDecoration: 'none', color: "aquamarine"}} className="card" to={`/character/${_props.id}`} >
        <div style={{padding: "8px"}} className="cardDiv" key={_props.id} >
            <img src={_props.imageUrl}></img>
            <h1 >{_props.name}</h1>
        </div>
        </Link>
    </Grid>

    );
}

Card.defaultProps = {
    key: 1,
    name: "Unfind",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
}