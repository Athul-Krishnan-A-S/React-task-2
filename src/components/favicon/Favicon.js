import React from "react";
import { Helmet } from "react-helmet";


const FavIcon = ({href}) => {
    return(
        <Helmet>
           <link rel="icon" type="image/x-icon" href={href} />
        </Helmet>
    )
}

export default FavIcon;