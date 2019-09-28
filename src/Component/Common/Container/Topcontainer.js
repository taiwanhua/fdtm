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

    let Jsondata =
        [
            {
                "DateTime": "2019/7/10 15:00",
                "Date": "2019/7/10",
                "Time": "15:00:59",
                "O": 10725,
                "H": 10727,
                "L": 10722,
                "C": 10724,
                "Vol": 656
            },
            {
                "DateTime": "2019/7/10 15:01",
                "Date": "2019/7/10",
                "Time": "15:01:58",
                "O": 10725,
                "H": 10726,
                "L": 10724,
                "C": 10725,
                "Vol": 208
            },
            {
                "DateTime": "2019/7/10 15:02",
                "Date": "2019/7/10",
                "Time": "15:02:59",
                "O": 10725,
                "H": 10725,
                "L": 10724,
                "C": 10725,
                "Vol": 104
            },
            {
                "DateTime": "2019/7/10 15:03",
                "Date": "2019/7/10",
                "Time": "15:03:59",
                "O": 10725,
                "H": 10725,
                "L": 10722,
                "C": 10722,
                "Vol": 264
            },
            {
                "DateTime": "2019/7/10 15:04",
                "Date": "2019/7/10",
                "Time": "15:04:57",
                "O": 10722,
                "H": 10724,
                "L": 10722,
                "C": 10724,
                "Vol": 234
            },
            {
                "DateTime": "2019/7/10 15:05",
                "Date": "2019/7/10",
                "Time": "15:05:57",
                "O": 10724,
                "H": 10724,
                "L": 10723,
                "C": 10724,
                "Vol": 68
            }
        ]



    return (
        <Topcontextfunction>
            <Navigation/>
            <Drag  initialvar={{id:"test",width:"300px",height:"300px",titletext:"視窗1"}}><div>YES</div><div>YES</div><div>YES</div></Drag>
            <Drag  initialvar={{id:"test13",width:"500px",height:"400px",titletext:"視窗2"}}><div>NONONO</div>
                <LineButton onClick= { (e)=>setState({...state,background:"red"}) } i="123"  href="https://tw.yahoo.com/" props={state}  >
                <DeleteIcon className={classes.leftIcon} />
                </LineButton>
            </Drag>
            {/*<Test/>*/}
            {/*<Chartcomponent/>*/}
            {/*<Idfetchtest/>*/}

            {/*<LineButton onClick= { (e)=>setState({...state,background:"yellow"}) } i="123"  href="https://tw.yahoo.com/" props={state}  >*/}
                {/*<DeleteIcon className={classes.leftIcon} />*/}
            {/*</LineButton>*/}
            {/*<LineButton  props={{id:"dfsadf",border:"black 1px solid",textleft:"fff"}}/>*/}
            {/*<ContainedButton  props={{id:"as",textright:"CB",background:"red"}}></ContainedButton>*/}
            {/*<TextButton  props={{id:"as1",textright:"CB"}} />*/}
            <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px",labelname:"one1"}}  keep={["a"]} kill={["b"]} />
            <SimpleSelect props={{a:11,b:22,c:33}}  selectSetting={{muiSelectWidth:"300px"}}/>
            <Droptable drop={{RorC:"C"}} data={Jsondata} />



        </Topcontextfunction>
    );
}

export default Topcontainer;
