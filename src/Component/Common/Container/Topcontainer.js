import React, {useState, useEffect, useContext} from 'react';
import {Topcontext, Topcontextfunction} from "../Context/Topcontext";
import Navigation from "../Functional/Navigation"
import Drag from "../Functional/Drag";

function Topcontainer(props) {


    return (
        <Topcontextfunction>
            <Navigation/>
            <Drag  initialvar={{id:"test",width:"300px",height:"300px"}}><div>YES</div><div>YES</div><div>YES</div></Drag>
            <Drag  initialvar={{id:"test13",width:"300px",height:"300px"}}><div>NONONO</div></Drag>
            {/*<Test/>*/}
            {/*<Chartcomponent/>*/}
            {/*<Idfetchtest/>*/}
        </Topcontextfunction>
    );
}

export default Topcontainer;
