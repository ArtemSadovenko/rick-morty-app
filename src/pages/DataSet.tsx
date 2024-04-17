import React from "react";
import {gql, useQuery} from "@apollo/client"
import { useAllCharacters } from "../hooks/useAllCharacters";
import { useCharacterData } from "../hooks/useCharacterData";
import Card from "../components/Card";


type PageInfo = {
    pageNumber: Number
}

function DataSet(_props:PageInfo){
    const {error, data, loading} = useAllCharacters(_props.pageNumber)

    const resultSet = data;
    console.log({error, loading, data});


    if(loading){
        console.log({error, loading, data});
        return (<p>loading...</p>)
    }
    else{
    return(
        <div>
            {resultSet.characters.results.map((obj: any) => {
                return (
                    <Card key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.image}/>
                )
            })}
        </div>
    );
}
}
DataSet.defaultProps = {
    pageNumber: 1
}

export default DataSet;