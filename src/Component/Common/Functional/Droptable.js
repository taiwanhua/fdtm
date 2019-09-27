import React, {useEffect, useState} from "react"
import styled from 'styled-components';

export const Droptable = (props) => {
    const Dragul = styled.ul`
      color: blueviolet;
      float: ${(props) => ((props.trprops.float) ? "left" : "none")}
      
      
      
       li {
        margin: 0px 5px;
        display: ${(props) => ((props.trprops.float) ? "block" : "inline") }
      }
      
      
      }
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
        Entertarget = e.target.parentElement;
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
        newJsondata.splice(parseInt(e.target.parentElement.getAttribute("name")), 0, Data[parseInt(currenttarget.getAttribute("name"))]);
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
        newJsondata.splice(parseInt(Entertarget.getAttribute("name")), 0, Data[parseInt(currenttarget.getAttribute("name"))]);
        //currenttarget.style.display = "block";
        setData(newJsondata);
    }

    const renR = () => {
        return (Data.map((item, index) =>
                <Dragul key={index} name={index} trprops={{position: DragEnterstate, float: false}} draggable={true}
                        onDragStart={R_DragStart}
                        onDragEnter={R_DragEnter}
                        onDragLeave={R_DragLeave}
                    // onDragOver={R_DragOver}
                        onDrop={R_Drop}>
                    <li>
                        {item.DateTime}
                    </li>
                    <li>
                        {item.Date}
                    </li>
                    <li>
                        {item.Time}
                    </li>
                    <li>
                        {item.O}
                    </li>
                    <li>
                        {item.H}
                    </li>
                    <li>
                        {item.L}
                    </li>
                    <li>
                        {item.C}
                    </li>
                    <li>
                        {item.Vol}
                    </li>
                </Dragul>
            )
        )
    }
    //-------------------------------------------------------//

    //
    const ClearmarginLeft = () => {
        //console.log(document.getElementById("testd").children.length)
        for (let i = 0; i < document.getElementById("testd").children.length; i++) {
            document.getElementById("testd").children[i].style.borderLeft = "";
        }
    }
    const C_DragStart = (e) => {
        currenttarget = e.currentTarget;
        console.log(e.currentTarget)
    }
    const C_DragEnter = (e) => {
        console.log(e.target.parentElement);
        e.preventDefault();
        ClearmarginLeft();
        e.target.parentElement.style.borderLeft = "2px solid red";
        Entertarget = e.target.parentElement;
    }
    const C_DragLeave = () => {

    }
    const C_Drop = (e) => {
        //e.preventDefault();
        console.log(currenttarget.getAttribute("name"))
        //刷新state
        let newTransforData = Array.from(TransforData)
        //console.log(newJsondata)
        newTransforData.splice(parseInt(currenttarget.getAttribute("name")), 1);
        newTransforData.splice(parseInt(e.target.parentElement.getAttribute("name")), 0, TransforData[parseInt(currenttarget.getAttribute("name"))]);
        //currenttarget.style.display = "block";
        setData(newTransforData);
        console.log(newTransforData)
    }
    const C_DragOver = (e) => {
        e.preventDefault();
        currenttarget.style.display = "none";
    }
    const C_DropError = (e) => {
        e.preventDefault();
        currenttarget.style.display = "block";
        Entertarget.style.borderLeft = "";
        let newTransforData = Array.from(TransforData)
        //console.log(newJsondata)
        newTransforData.splice(parseInt(currenttarget.getAttribute("name")), 1);
        newTransforData.splice(parseInt(e.target.parentElement.getAttribute("name")), 0, TransforData[parseInt(currenttarget.getAttribute("name"))]);
        //currenttarget.style.display = "block";
        setData(newTransforData);
    }
    let TransforData = [];
    const renC = () => {

        if ("0" !== Object.keys(Data[0])[0]) {
            Object.keys(Data[0]).map((colname, index) => {
                console.log(colname);
                window[colname + "1"] = [];
            })
            Object.keys(Data[0]).map((colname, index) => {
                Data.map((item, index) => {
                    window[colname + "1"].push(item[colname])
                })
            })

            Object.keys(Data[0]).map((colname, index) => {
                TransforData.push(window[colname + "1"]);
            })
            console.log(TransforData);
            //setCData(TransforData);
        }else{
            console.log(Data)
            TransforData=Array.from(Data);
        }

        return (



            TransforData.map((item, index) =>
                <Dragul key={index} name={index} trprops={{position: DragEnterstate, float: true}} draggable={true}
                        onDragStart={C_DragStart}
                        onDragEnter={C_DragEnter}
                        onDragLeave={C_DragLeave}
                    // onDragOver={C_DragOver}
                        onDrop={C_Drop}>

                    {item.map((innerItem, index) =>
                        <li key={"li" + index}> {innerItem}</li>
                    )}
                </Dragul>
            )


            // <Dragul key={index} name={index} trprops={{position: DragEnterstate}} draggable={true}
            //         onDragStart={R_DragStart}
            //         onDragEnter={R_DragEnter}
            //         onDragLeave={R_DragLeave}
            //     // onDragOver={R_DragOver}
            //         onDrop={R_Drop}>
            //     <li>
            //         Drag{index}
            //     </li>
            //     <li>
            //         {item.Date}
            //     </li>
            //     <li>
            //         {item.DateTime}
            //     </li>
            // </Dragul>

        )
    }

    return (

        <div>
            {("R" === props.drop.RorC) &&
            <div>
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
                    {renR()}
                </div>
            </div>
            }
            {("C" === props.drop.RorC) &&
            <div id="testd" onDragOver={C_DragOver} onDrop={C_DropError}>
                {renC()}

            </div>
            }

        </div>
    )

}



