import React from "react";
import {gql, useQuery} from "@apollo/client"

const buildQuery = (pageNumber: Number) =>{
    return gql`
    {
        characters (page: ${pageNumber}){
        results {
                    id
                    name
                    image
                }
            }
        }   
    `;
}

export const useAllCharacters = (pageNumber: Number) =>{

    const {error, data, loading} = useQuery(
        buildQuery(pageNumber)
    );

    return {error, data, loading};
}