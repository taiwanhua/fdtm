import React, { useContext,useEffect } from "react";
import { Topcontext } from "../Context/Topcontext";
import {FetchID} from "../../../DBCommunicator/FetchID"

const Navigation = props => {
    const {Globalcontext, Globalcontextdispatch,state1, dispatch1 } = useContext(Topcontext);
    // console.log("state",state)
    // console.log("state1",state1)
    // console.log(window)
    // FetchID(3);
    // FetchID(2);
    // FetchID(99);
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

export default Navigation;
