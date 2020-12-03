import React from "react";
import "./Customer.css"
import {IconButton} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";


export default function Customer(){
    return(
        <div className="customer">
    <IconButton>
    <ForumIcon fontSize="large" className="customer__icon"/>
    </IconButton>
    </div>
    )
}