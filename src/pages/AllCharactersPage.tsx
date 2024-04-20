import React from "react";
import {gql, useQuery} from "@apollo/client"
import { useAllCharacters } from "../hooks/useAllCharacters";
import Card from "../components/Card";
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid'



type PageInfo = {
    pageNumber: Number
}

function AllCharactersPage(_props:PageInfo){
    const {error, data, loading} = useAllCharacters(_props.pageNumber)

    const resultSet = data;
    console.log({error, loading, data});


    if(loading){
        console.log({error, loading, data});
        return (<p>loading...</p>)
    }
    else{
    return(
        <Grid container spacing={"8px"}>
        
         {/* sx={{backgroundColor: "rgb(60,60,60)", borderRadius: "10px", p: "16px", boxShadow: "3px"}}> */}
            {resultSet.characters.results.map((obj: any) => {
                return (
                    // <Grid key={obj.id} item md={2.5}>
                        <Card  key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.image}/>
                    // {/* </Grid> */}
                )
            })}
        </Grid>

    );
}
}
AllCharactersPage.defaultProps = {
    pageNumber: 1
}

export default AllCharactersPage;