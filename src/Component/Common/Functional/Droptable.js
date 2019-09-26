import React, {useEffect, useState} from "react"
import styled from 'styled-components';

export const Droptable = (props) => {
    const Dragul = styled.ul`
      color: blueviolet;
      
      // margin-Top: ${(props) => ("themetop" === props.trprops.position) ? "20px" : "0px" }
      
    `;

    // let Jsondata =
    //     [
    //         {
    //             "DateTime": "2019/7/10 15:00",
    //             "Date": "2019/7/10",
    //             "Time": "15:00:59",
    //             "O": 10725,
    //             "H": 10727,
    //             "L": 10722,
    //             "C": 10724,
    //             "Vol": 656
    //         },
    //         {
    //             "DateTime": "2019/7/10 15:01",
    //             "Date": "2019/7/10",
    //             "Time": "15:01:58",
    //             "O": 10725,
    //             "H": 10726,
    //             "L": 10724,
    //             "C": 10725,
    //             "Vol": 208
    //         },
    //         {
    //             "DateTime": "2019/7/10 15:02",
    //             "Date": "2019/7/10",
    //             "Time": "15:02:59",
    //             "O": 10725,
    //             "H": 10725,
    //             "L": 10724,
    //             "C": 10725,
    //             "Vol": 104
    //         },
    //         {
    //             "DateTime": "2019/7/10 15:03",
    //             "Date": "2019/7/10",
    //             "Time": "15:03:59",
    //             "O": 10725,
    //             "H": 10725,
    //             "L": 10722,
    //             "C": 10722,
    //             "Vol": 264
    //         },
    //         {
    //             "DateTime": "2019/7/10 15:04",
    //             "Date": "2019/7/10",
    //             "Time": "15:04:57",
    //             "O": 10722,
    //             "H": 10724,
    //             "L": 10722,
    //             "C": 10724,
    //             "Vol": 234
    //         },
    //         {
    //             "DateTime": "2019/7/10 15:05",
    //             "Date": "2019/7/10",
    //             "Time": "15:05:57",
    //             "O": 10724,
    //             "H": 10724,
    //             "L": 10723,
    //             "C": 10724,
    //             "Vol": 68
    //         }
    //     ]



    //console.log(Jsondata);
    const [Data, setData] = useState(props.data);
    const [DragEnterstate, setDragEnterstate] = useState("themecenter");


    const ClearmarginTop = () => {
        //console.log(document.getElementById("testd").children.length)
        for (let i = 0; i < document.getElementById("testd").children.length; i++) {
            document.getElementById("testd").children[i].style.marginTop = "0px";
        }
    }
    let currenttarget;
    let Entertarget;
    //開始拖曳函數
    const R_DragStart = (e) => {
        currenttarget = e.currentTarget;
        console.log(e.currentTarget)


    }
    //當拖曳元件進入此元件函數
    const R_DragEnter = (e) => {
        console.log(e.target.parentElement);
        e.preventDefault();
        ClearmarginTop();
        e.target.parentElement.style.marginTop = "20px";
        Entertarget=e.target.parentElement;
    }
    //當拖曳元件離開此元件函數
    const R_DragLeave = (e) => {
        // console.log(e.target.parentElement);
        // e.preventDefault();
        // e.stopPropagation();
        // e.target.parentElement.style.marginTop = "0px";
        // ClearmarginTop();
    }

    //當拖曳元件經過此元件函數
    const R_DragOver = (e) => {
        e.preventDefault();
        currenttarget.style.display = "none";
    }
    //當拖曳元件放開此元件函數
    const R_Drop = (e) => {
        //e.preventDefault();
        console.log(currenttarget.getAttribute("name"))
        //刷新state
        let newJsondata = Array.from(Data)
        //console.log(newJsondata)
        newJsondata.splice(parseInt(currenttarget.getAttribute("name")), 1);
        newJsondata.splice(parseInt(e.target.parentElement.getAttribute("name")), 0,Data[parseInt(currenttarget.getAttribute("name"))] );
        //currenttarget.style.display = "block";
        setData(newJsondata);
        console.log(newJsondata)
    }
    //當拖曳元件放開時卻是禁止區域處理
    const R_DropError = (e) => {
        e.preventDefault();
        currenttarget.style.display = "block";
        Entertarget.style.marginTop = "0px";
        let newJsondata = Array.from(Data)
        newJsondata.splice(parseInt(currenttarget.getAttribute("name")), 1);
        newJsondata.splice(parseInt(Entertarget.getAttribute("name")), 0,Data[parseInt(currenttarget.getAttribute("name"))] );
        //currenttarget.style.display = "block";
        setData(newJsondata);
    }

    const ren = () => {
        return (Data.map((item, index) =>
                <Dragul key={index} name={index} trprops={{position: DragEnterstate}} draggable={true}
                        onDragStart={R_DragStart}
                        onDragEnter={R_DragEnter}
                        onDragLeave={R_DragLeave}
                        // onDragOver={R_DragOver}
                        onDrop={R_Drop}>
                    <li>
                        Drag{index}
                    </li>
                    <li>
                        {item.Date}
                    </li>
                    <li>
                        {item.DateTime}
                    </li>
                </Dragul>
            )
        )
    }
    return (

        <div>
            {("R" === props.drop.RorC) &&
            <div> {Data[0].Date}


                <div id="testd" onDragOver={R_DragOver} onDrop={R_DropError}>
                    {/*{Data.map((item, index) =>*/}
                    {/*<Dragul key={index} name={index} trprops={{position: DragEnterstate}} draggable={true}*/}
                    {/*onDragStart={R_DragStart}*/}
                    {/*onDragEnter={R_DragEnter}*/}
                    {/*onDragLeave={R_DragLeave}*/}
                    {/*onDragOver={R_DragOver}*/}
                    {/*onDrop={R_Drop}>*/}
                    {/*<li>*/}
                    {/*Drag{index}*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*{item.Date}*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*{item.DateTime}*/}
                    {/*</li>*/}
                    {/*</Dragul>*/}
                    {/*)}*/}
                    {ren()}
                </div>


            </div>
            }
            {("C" === props.drop.RorC) &&
            <div>aa</div>
            }

        </div>
    )

}



