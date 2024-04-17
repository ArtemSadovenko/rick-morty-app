import React, { Key } from "react"
import { useParams } from "react-router-dom"
import { useCharacterData } from "../hooks/useCharacterData";

// type CharacterId = {
//     id: Number & Key
// }

export default function CharacterDataPage(){
    const params = useParams(); 
    const {error, data, loading} = useCharacterData(Number(params.id));
    console.log(error, data)
    return(<h4>s</h4>)
}