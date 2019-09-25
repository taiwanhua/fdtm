import React, {useState, useEffect, useContext} from 'react';
import {Topcontext, Topcontextfunction} from "../Context/Topcontext";
import Navigation from "../Functional/Navigation"
import Drag from "../Functional/Drag";
import {LineButton, ContainedButton, TextButton} from "../Functional/Buttons"
import {SimpleSelect} from "../Functional/Selects"

import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core/styles/index";
import {Droptable} from "../Functional/Droptable";

function Topcontainer(props) {
    const useStyles = makeStyles((theme) => ({

        input: {
            display: 'none',
        },
        leftIcon: {
            marginRight: theme.spacing(1),
        },
        rightIcon: {
            marginLeft: theme.spacing(1),
        }
    }));
    const classes = useStyles();

    const [state, setState] = useState({ id:"asd",spacing:5,mdspacing:8,border:"black 1px solid",fullWidth:true,textleft:"ssfgfdgfgdf",disabled:false,color:"red",background:"blue",width:"200px",height:"200px"});
console.log(state)
    return (
        <Topcontextfunction>
            {/*<Navigation/>*/}
            <Drag  initialvar={{id:"test",width:"300px",height:"300px",titletext:"視窗1"}}><div>YES</div><div>YES</div><div>YES</div></Drag>
            <Drag  initialvar={{id:"test13",width:"500px",height:"400px",titletext:"視窗2"}}><div>NONONO</div></Drag>
            {/*<Test/>*/}
            {/*<Chartcomponent/>*/}
            {/*<Idfetchtest/>*/}

            {/*<LineButton onClick= { (e)=>setState({...state,background:"yellow"}) } i="123"  href="https://tw.yahoo.com/" props={state}  >*/}
                {/*<DeleteIcon className={classes.leftIcon} />*/}
            {/*</LineButton>*/}
            {/*<LineButton  props={{id:"dfsadf",border:"black 1px solid",textleft:"fff"}}/>*/}
            {/*<ContainedButton  props={{id:"as",textright:"CB",background:"red"}}></ContainedButton>*/}
            {/*<TextButton  props={{id:"as1",textright:"CB"}} />*/}
            {/*<SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} labelname="one" keep={["a"]} kill={["b"]} />*/}
            {/*<SimpleSelect props={{a:11,b:22,c:33}}  />*/}
            <Droptable/>



        </Topcontextfunction>
    );
}

export default Topcontainer;
