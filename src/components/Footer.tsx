import React from "react";
import { Link, useParams } from "react-router-dom";

type FooterInfo = {
    id: Number
}

const maxPage = 42;
const minPage = 1;

export default function Footer(_props:FooterInfo){
    return(
        <div>
            <Link to={`/page/${_props.id == minPage ? minPage: Number(_props.id)- 1}`}>PREV</Link>
            <Link to={`/page/${_props.id == maxPage ? maxPage: Number(_props.id)+ 1}`}>NEXT</Link>

        </div>
    )
}