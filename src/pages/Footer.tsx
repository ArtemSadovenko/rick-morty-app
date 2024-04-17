import React from "react";

interface Props {
    nextPage: () => void,
    prevPage: () => void
}

export default function Footer({nextPage, prevPage}: Props){
    return(
        <div>
            <button onClick={prevPage}>`{'<'}`</button>
            <button onClick={nextPage}>`{'>'}`</button>
        </div>
    )
}