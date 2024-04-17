import React from "react";
import { Link, useParams } from "react-router-dom";

// interface Props {
//     nextPage: () => void,
//     prevPage: () => void
// }

type FooterInfo = {
    id: Number
}

const maxPage = 42;
const minPage = 1;

export default function Footer(_props:FooterInfo){

    // const params = useParams();

    // let id: Number;
    // if( params.id == null){
    //     id = 1;
    // }else{
    //     id = Number(params.id);
    // }
    
    return(
        <div>
            {/* <button onClick={prevPage}>`{'<'}`</button>
            <button onClick={nextPage}>`{'>'}`</button> */}
            <Link to={`/page/${_props.id == minPage ? minPage: Number(_props.id)- 1}`}>PREV</Link>
            <Link to={`/page/${_props.id == maxPage ? maxPage: Number(_props.id)+ 1}`}>NEXT</Link>

        </div>
    )
}