import React from "react";
import {gql, useQuery} from "@apollo/client"


const buildQuery = (characterId: Number) =>{
    return gql`
    {
        character(id:${characterId}){
            id
            image
            name

            origin {
                id
                dimension
                created
            }
            location {
                id
                name
                dimension
            }
            status
            created
        }
    }
  

    `;
}

export const useCharacterData = (characterId: Number) =>{
    const {error, data, loading} = useQuery(
        buildQuery(characterId)
    );

    return {error, data, loading};
}