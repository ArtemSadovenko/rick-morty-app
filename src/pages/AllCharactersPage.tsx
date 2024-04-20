import React from "react";

import { useAllCharacters } from "../hooks/useAllCharacters";
import Card from "../components/Card";
import Container from "@mui/material/Container"
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress';





type PageInfo = {
    pageNumber: Number
}

function AllCharactersPage(_props:PageInfo){
    const {error, data, loading} = useAllCharacters(_props.pageNumber)

    const resultSet = data;
    console.log({error, loading, data});


    if(loading ){
        console.log({error, loading, data});
        return (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "80vh" }}>
                <LinearProgress sx={{width: "50vh"}}/>
            </Box>
            )
    }
    else{
    return(
        <Container  style={{backgroundColor: "#0B1324", padding: "10px", borderRadius:"20px"}} >
          

        <Grid container >
        
         {/* sx={{backgroundColor: "rgb(60,60,60)", borderRadius: "10px", p: "16px", boxShadow: "3px"}}> */}
            {resultSet.characters.results.map((obj: any) => {
                return (
                    // <Grid key={obj.id} item md={2.5}>
                        <Card  key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.image}/>
                    // {/* </Grid> */}
                )
            })}
        </Grid>
        </Container>
    );
}
}
AllCharactersPage.defaultProps = {
    pageNumber: 1
}

export default AllCharactersPage;