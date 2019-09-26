import React, {useEffect, useState} from "react"
import styled from "styled-components";

export const Droptable = (props) => {

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

    console.log(Jsondata);
    const allowDrop = (ev) => {
        // ev.stopPropagation();
        // console.log("123132")
        // ev.preventDefault();
    }

    const drag = (ev) => {

        // ev.stopPropagation();
        // console.log(ev.target.id)


    }

    const drop = (ev) => {
        // ev.stopPropagation();
        // ev.preventDefault();
        // let data = ev.dataTransfer.getData("text");
        // ev.target.appendChild(document.getElementById(data));
    }

    const dragEnter = (ev) => {
        // ev.preventDefault();
        // ev.stopPropagation();
        // console.log("aaaaaa")

    }
    const subdragEnter = (ev) => {
        // console.log(ev.target)
        // ev.preventDefault();
        // // ev.stopPropagation();
        // ev.target.style.position="absolute";
        // ev.target.style.top="20px";

    }

    // let ren = Jsondata.map((item, index) =>
    //     <tr>{item.DateTime}</tr>
    // );
    // console.log(ren);
    const dragtr =styled.tr.attrs(({trprops}) => ({}) )`
    display: ${};

`

    const [DragEnterstate, setDragEnterstate] = useState("themecenter");

    //開始拖曳函數
    const R_DragStart = () => {

    }
    //當拖曳元件進入此元件函數
    const R_DragEnter = (e) => {
        console.log(e.target.parentElement)

    }

    return (

        <div>
            {("R" === props.drop.RorC) &&
            <div> {Jsondata[0].Date}
                <table>
                    <tbody>
                    {Jsondata.map((item, index) =>
                        <tr key={index} draggable={true} onDragStart={R_DragStart} onDragEnter={R_DragEnter}>
                            <td>
                                Drag
                            </td>
                            <td>
                                {item.Date}
                            </td>
                            <td>
                                {item.DateTime}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>


            </div>
            }
            {("C" === props.drop.RorC) &&
            <div>aa</div>
            }


            <div id="div1" onDrop={drop} onDragOver={allowDrop} onDragEnter={dragEnter}
                 style={{width: "336px", height: "370px"}}>

            </div>
            <br/>
            <div id="drag1" draggable="true" onDragStart={drag} onDragEnter={subdragEnter}
                 style={{width: "336px", height: "69px"}}>
                <div>sdf1</div>
                <div>sdf11</div>
                <div>sdf111</div>
            </div>
            <div id="drag2" draggable="true" onDragStart={drag} onDragEnter={subdragEnter}
                 style={{width: "336px", height: "69px"}}>
                <div>2</div>
                <div>22</div>
                <div>222</div>
            </div>
        </div>
    )

}



