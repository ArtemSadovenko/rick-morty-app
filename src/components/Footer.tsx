import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button"

type FooterInfo = {
    id: Number
}

const maxPage = 42;
const minPage = 1;

export default function Footer(_props:FooterInfo){
    return(
        <div className="footer">
            <Link to={`/page/${_props.id == minPage ? minPage: Number(_props.id)- 1}`}>
                <Button variant="contained">PREV</Button>
            </Link>
            <Link to={`/page/${_props.id == maxPage ? maxPage: Number(_props.id)+ 1}`}>
                <Button variant="contained">NEXT</Button>
            </Link>

        </div>
    )
}