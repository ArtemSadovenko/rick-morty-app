import React, { Key } from "react"
import { useParams } from "react-router-dom"
import { useCharacterData } from "../hooks/useCharacterData";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LinearProgress from "@mui/material/LinearProgress"
// type CharacterId = {
//     id: Number & Key
// }

export default function CharacterDataPage(){
    const params = useParams();
     
    const {error, data, loading} = useCharacterData(Number(params.id));
    console.log( data)
    
    if(loading ){
        console.log({error, loading, data});
        return (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "80vh" }}>
                <LinearProgress sx={{width: "50vh"}}/>
            </Box>
            )
    }
    else{
        return (
            // <div>
            //     <p>{data.character.id}</p>
            //     <img src={data.character.image}></img>
            // </div>
            <Box>
            <Grid container >
             <Grid item md={4} xs={12} sm={12} sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
               <img src={data.character.image} style={{border: "solid", borderColor: "white", borderRadius: "20px"}}></img>
             </Grid>
             <Grid item md={5} xs={12} sm={12} >
                
                <h1 className="descriptionTag">Name: {data.character.name}</h1>
                
                <h2 className="descriptionTag">Status: {data.character.status}</h2>
                
                <h2 className="descriptionTag">Created: {data.character.created}</h2>
                <h2 className="descriptionTag">Location: {data.character.location.dimension} / {data.character.location.name}</h2>
                <h2 className="descriptionTag">Origin: {data.character.origin.dimension}</h2>
                
             </Grid>
           </Grid>
           </Box>
        )
    }
}

