import React, { Key } from "react"
import { useParams } from "react-router-dom"
import { useCharacterData } from "../hooks/useCharacterData";

// type CharacterId = {
//     id: Number & Key
// }

export default function CharacterDataPage(){
    const params = useParams();
     
    const {error, data, loading} = useCharacterData(Number(params.id));
    console.log( data)

    if(loading){
        return(
        <p>loading...</p>
        )
    }
    else{
        return (
            <div>
                <p>{data.character.id}</p>
                <img src={data.character.image}></img>
            </div>
        )
    }
}

