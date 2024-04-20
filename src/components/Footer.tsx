import React from "react";

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Pagination from '@mui/material/Pagination';
import {useNavigate} from 'react-router-dom'

type FooterInfo = {
    id: Number
}

const maxPage = 42;
const minPage = 1;


export default function Footer(_props:FooterInfo){
    const navigate = useNavigate();


    const handleChange = (e:any, p:any) => {
        console.log(e,p);
        navigate(`/page/${p}`);
    }


    return(
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <Pagination sx={{stopColor:"gray" ,backgroundColor: "aquamarine", borderRadius: "5px"}} count={42} color="primary" onChange={ handleChange}></Pagination>
        </Box>
        // <div className="footer">
        //     <Link to={`/page/${_props.id == minPage ? minPage: Number(_props.id)- 1}`}>
        //         <Button variant="contained">PREV</Button>
        //     </Link>
        //     <Link to={`/page/${_props.id == maxPage ? maxPage: Number(_props.id)+ 1}`}>
        //         <Button variant="contained">NEXT</Button>
        //     </Link>

        // </div>
    )
}