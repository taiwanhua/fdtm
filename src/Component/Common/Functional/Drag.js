import React, {useContext, useLayoutEffect, useState} from "react"
import styled from 'styled-components';
import {Topcontext} from "../Context/Topcontext";

// language=LESS
/**
 * 拖拽視窗樣式
 *<br>
 * <br>
 * Description:<br>
 * 拖拽視窗樣式，待補
 *
 * @file: Drag.js
 * @constant  Styled-component_拖拽視窗樣式:Dragwindow
 * @author: Arhua Ho
 * @date: 2019/7/27
 */
const Dragwindow = styled.div.attrs(({initial}) => ({style: {width: initial.dragwidth, height: initial.draghieght}}))`
    position: absolute;
    //top: 100px;
    //left: 100px;
    //width: 300px;
    //height: 160px;
    background: #252525;
    border: 1px solid #414141;
    border-radius: 5px;
    box-shadow: 0 1px 3px 2px #666;
    display: ${(props) => ((props.initial.isclose) ? "none" : "block")};
    
     ${(props) => ("& #" + props.initial.id + "title")} {    
        position: relative;  //
        height: 27px;
        margin-bottom: 5px;
        background: #6c7b95;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        
        h2 {
            font-size: 14px;
            height: 27px;
            line-height: 24px;
            border-bottom: 1px solid #A1B4B0;
            padding-left: 5px;
         }
        
        div {
          position: absolute;
          height: 19px;
          top: 2px;
          right: 0;
        
           a {
                float: left;
                width: 21px;
                height: 19px;
                display: block;
                margin-left: 5px;
            }
            
           ${(props) => ("#" + props.initial.id + "max")} {
                background: url('./img/maximize.png') no-repeat;
                background-size: contain;
            }
            
           ${(props) => ("#" + props.initial.id + "min")} {
                background: url("./img/minimize.png") no-repeat;
                background-size: contain;
            }
            
          ${(props) => ("#" + props.initial.id + "revert")} {
                background: url("./img/resize.png") no-repeat;
                background-size: contain;
                display: none;
            }
            
          ${(props) => ("#" + props.initial.id + "close")} {
                background: url("./img/cancel.png") no-repeat;
                background-size: contain;
            }
            
          ${(props) => ("#" + props.initial.id + "lock")} {
                background: url("./img/unlock.png") no-repeat;
                background-size: contain;
            }
         }
      }  
       
    ${(props) => ("& #" + props.initial.id + "content")} {
        overflow: auto;
        padding: 0 5px;
        //width:285px; //-15px
        //height: 123px; //-37
        width:${ (props) => ((parseInt(props.initial.dragwidth, 10) - 15 + "px")) } ;//-15px
        height:${(props) => ((parseInt(props.initial.draghieght, 10) - 37 + "px")) } ; //-37px
     }
     
    ${(props) => ("& #" + props.initial.id + "resizeBR")} {
        position: absolute;
        width: 14px;
        height: 14px;
         right: 0;
        bottom: 0;
        overflow: hidden;
        cursor: nw-resize;
     }
     
     //  #resizeL, #resizeT, #resizeR, #resizeB, #resizeLT, #resizeTR, #resizeLB
    ${(props) => ("#" + props.initial.id + "resizeL, #" + props.initial.id + "resizeT, #" + props.initial.id + "resizeR, #" + props.initial.id + "resizeB, #" + props.initial.id + "resizeLT, #" + props.initial.id + "resizeTR, #" + props.initial.id + "resizeLB")} {
        position: absolute;
        background: #000;
        overflow: hidden;
        opacity: 0;
        filter: alpha(opacity=0);
     }
     
     //#resizeL, #resizeR
    ${(props) => ("#" + props.initial.id + "resizeL, #" + props.initial.id + "resizeR")} {
        top: 0;
        width: 5px;
        height: 100%;
        cursor: w-resize;
     }
     
    ${(props) => ("#" + props.initial.id + "resizeR")} {
        right: 0;
     }
      
     //#resizeT, #resizeB
    ${(props) => ("#" + props.initial.id + "resizeT, #" + props.initial.id + "resizeB")}{
        width: 100%;
        height: 5px;
        cursor: n-resize;
     }
      
    ${(props) => ("#" + props.initial.id + "resizeT")} {
        top: 0;
     }
      
    ${(props) => ("#" + props.initial.id + "resizeB")} {
        bottom: 0;
     }

     //#resizeLT, #resizeTR, #resizeLB
    ${(props) => ("#" + props.initial.id + "resizeLT, #" + props.initial.id + "resizeTR, #" + props.initial.id + "resizeLB")}{
        width: 8px;
        height: 8px;
        background: #FF0;
     }

    ${(props) => ("#" + props.initial.id + "resizeLT")} {
        top: 0;
        left: 0;
        cursor: nw-resize;
     }

    ${(props) => ("#" + props.initial.id + "resizeTR")} {
        top: 0;
        right: 0;
        cursor: ne-resize;
     }

    ${(props) => ("#" + props.initial.id + "resizeLB")} {
        left: 0;
        bottom: 0;
        cursor: ne-resize;
     }
`;


/**
 * 拖拽視窗組件
 *<br>
 * <br>
 * Description:<br>
 * 創建一個可以拖動、八方位伸縮、最大最小化、還原、關閉與限制大小的視窗，
 * 透過將其他組件放入id="content"的div中，達到視窗化的效果
 * 調整參數指南:
 * 需要調整部分分為第一次渲染與改變瀏覽器窗口大小時，
 * 第一次渲染:
 * 1.修改初始視窗大小，搜尋"1.修改初始視窗大小"
 * 2.修改可拖拽視窗縮到最小大小，搜尋"2.修改可拖拽視窗縮到最小大小"
 * 3.修改視窗初始位置，搜尋"3.修改視窗初始位置"
 * 4.修改四周多少px不能是拖拽、縮放範圍，搜尋:"4.修改四周多少px不能是拖拽、縮放範圍"
 * 改變瀏覽器窗口大小時:
 * 3.修改視窗初始位置，搜尋"3.修改視窗初始位置"
 *
 * @file: Drag.js
 * @module React-export_拖拽視窗組件: Drag
 * @see   url   or  {FunctionName#var}
 * @param {props} props - 外部傳進來的一些初始參數
 * @author: Arhua Ho
 * @date: 2019/7/27
 */
const Drag = (props) => {
    // console.log(props)
    const {Globalcontext, Globalcontextdispatch} = useContext(Topcontext);
    // const [state, setState] = useState({ [props.initialvar.id]: {isclose:false} });
    // console.log(state)
    useLayoutEffect(() => {
        let propsid = props.initialvar.id;
        let initialgetdragwidth = 300;//視窗初始寬度       1.修改初始視窗大小
        let initialgetdragheight = 300;//視窗初始高度      1.修改初始視窗大小
        let initalleft = (document.documentElement.clientWidth - initialgetdragwidth) / 2 + "px";//初始位置      3.修改視窗初始位置  (請保留這行，另外複製一行去改，並註解此行)
        let initaltop = (document.documentElement.clientHeight - initialgetdragheight) / 2 + "px";//初始位置      3.修改視窗初始位置  (請保留這行，另外複製一行去改，並註解此行)
        const dragMinWidth = 250;//可拖拽視窗縮到最小寬度        2.修改可拖拽視窗縮到最小大小
        const dragMinHeight = 124;//可拖拽視窗縮到最小高度       2.修改可拖拽視窗縮到最小大小
        let widthbeforemax = initialgetdragwidth; //放大以前視窗寬度，預設值與 initial.dragwidth值一樣
        let heightbeforemax = initialgetdragheight; //放大以前視窗高度，預設值與 initial.draghieght值一樣
        let leftbeforemax = parseInt(initalleft);//放大以前視窗left
        let topbeforemax = parseInt(initaltop);//放大以前視窗right
        let ismove = true;//用來判斷這次是不是在拖拽視窗，需不需要再次儲存left、top
        let fixtop = 50;//用來控制視窗拖拽時，上方多少px不能是拖拽範圍                4.修改四周多少px不能是拖拽、縮放範圍
        let fixright = 100;//用來控制視窗拖拽時，右方多少px不能是拖拽範圍              4.修改四周多少px不能是拖拽、縮放範圍
        let fixleft = 100;//用來控制視窗拖拽時，左方多少px不能是拖拽範圍               4.修改四周多少px不能是拖拽、縮放範圍
        let fixbottom = 50;//用來控制視窗拖拽時，下方多少px不能是拖拽範圍             4.修改四周多少px不能是拖拽、縮放範圍

        /**
         * 透過ID取得DOM函數
         *<br>
         * <br>
         * Description:<br>
         * 透過ID取得DOM
         *
         * @file: Drag.js
         * @method   function_透過ID取得DOM函數: byId
         * @param {object_or_string} object_or_string - 欲取得DOM的元素其ID
         * @return {DOM} object_or_string - 透過ID取得的DOM
         * @author: Arhua Ho
         * @date: 2019/7/27
         */
        const byId = function (object_or_string) {
            //因為使用ID不需要透過此函數，可直接調用；亦提供方法
            // document.getElementById()
            // document.getElementsByClassName()
            // document.getElementsByTagName()
            // document.getElementsByName()
            // document.getElementsByTagNameNS()
            // document.getSelection()
            if (typeof object_or_string === "string") {
                // console.log("true");
                return document.getElementById(object_or_string);
            }
            if (typeof object_or_string === "object") {
                return object_or_string;
            }
        }

        /**
         * 拖拽視窗函數
         *<br>
         * <br>
         * Description:<br>
         * 拖拽視窗函數，待補
         *
         * @file: Drag.js
         * @function  function_拖拽視窗函數: drag
         * @param {type} oDrag - 拖拽視窗DOM
         * @param {type} handle - 拖拽視窗標題DOM
         * @author: Arhua Ho
         * @date: 2019/7/27
         */
        const drag = (oDrag, content, handle) => {
            let disY = 0; //鼠標對於當前瀏覽器窗口的X座標，預設0
            let disX = 0; //鼠標對於當前瀏覽器窗口的Y座標，預設0
            // let oMin = byId(propsid + "min"); //最小化按鈕 ( 先拿掉此功能)
            let oLock = byId(propsid + "lock"); //最大化按鈕
            let oMax = byId(propsid + "max"); //最大化按鈕
            let oRevert = byId(propsid + "revert"); //還原按鈕
            let oClose = byId(propsid + "close"); //關閉按鈕
            handle = handle || oDrag;
            handle.style.cursor = "move"; //設定鼠標樣式為move

            handle.onmousedown = function (event) {
                disX = event.clientX - oDrag.offsetLeft;//(鼠標對於當前瀏覽器窗口的X座標 - 瀏覽器窗口最左邊到DOM元素左邊Border外的長度)
                disY = event.clientY - oDrag.offsetTop;//(鼠標對於當前瀏覽器窗口的Y座標 - 瀏覽器窗口最上邊到DOM元素上邊Border外的長度)
                document.onmousemove = function (event) {
                    let iL = event.clientX - disX; //當前onmousemove事件鼠標對於當前瀏覽器窗口的X座 - onmousedown的disX座標
                    let iT = event.clientY - disY; //當前onmousemove事件鼠標對於當前瀏覽器窗口的Y座 - onmousedown的disY座標
                    let maxL = document.documentElement.clientWidth - oDrag.offsetWidth; //設定DOM元素left的最大值，當前瀏覽器窗口的X軸寬度 - DOM元素寬度
                    let maxT = document.documentElement.clientHeight - oDrag.offsetHeight; //設定DOM元素top的最大值，當前瀏覽器窗口的Y軸高度 - DOM元素高度
                    if (maxL == 0 && maxT == 0) {//如果現在是最大化之後按了還原的狀況
                    } else {
                        iL <= 0 + fixleft && (iL = 0 + fixleft); //設定當DOM元素left的值比0小，就設成0，就是不讓DOM元素被畫面切到    (fixleft控制上方多少px不能是拖拽範圍)
                        iT <= 0 + fixtop && (iT = 0 + fixtop); //設定當DOM元素top的值比0小，就設成0，就是不讓DOM元素被畫面切到       (fixtop控制上方多少px不能是拖拽範圍)
                    }
                    if (maxL == 0 && maxT == 0) {//如果現在是最大化之後按了還原的狀況
                    } else {//如果不是最大化的情況
                        iL >= maxL - fixright && (iL = maxL - fixright);//設定當DOM元素left的值比maxL大，就設成maxL，就是不讓DOM元素被畫面切到      (fixright控制上方多少px不能是拖拽範圍)
                        iT >= maxT - fixbottom && (iT = maxT - fixbottom);//設定當DOM元素left的值比maxT大，就設成maxT，就是不讓DOM元素被畫面切到    (fixbottom控制上方多少px不能是拖拽範圍)
                    }

                    oDrag.style.left = iL + "px"; //設定DOM元素left位置
                    oDrag.style.top = iT + "px"; //設定DOM元素top位置
                    // console.log(event.target)

                    if (ismove) {
                        leftbeforemax = parseInt(oDrag.style.left);//放大以前視窗left
                        topbeforemax = parseInt(oDrag.style.top);//放大以前視窗top
                    }
                    return false //去除預設事件
                };

                document.onmouseup = function () {
                    document.onmousemove = null; //清除事件
                    document.onmouseup = null; //清除事件
                    this.releaseCapture && this.releaseCapture()// 設定事件在當前DOM釋放
                };
                this.setCapture && this.setCapture(); // 設定事件鎖定在當前DOM
                return false  //去除預設事件
            };

            //最大化按鈕
            oMax.onclick = function () {
                oDrag.style.top = oDrag.style.left = 0;//設定DOM元素left位置為0
                oDrag.style.width = document.documentElement.clientWidth - 2 + "px"; //將DOM元素寬度增加到瀏覽器窗口 - border(為 1*2)
                oDrag.style.height = document.documentElement.clientHeight - 2 + "px"; //將DOM元素高度增加到瀏覽器窗口 - border(為 1*2)
                content.style.width = parseInt(oDrag.style.width, 10) - 15 + "px";//將content寬度增加到 oDrag.style.width - 15
                content.style.height = parseInt(oDrag.style.height, 10) - 37 + "px";//將content高度增加到 oDrag.style.width - 37
                this.style.display = "none"; //隱藏最大化按鈕
                oRevert.style.display = "block"; //取消隱藏還原按鈕
                ismove = false;
            };
            //還原按鈕
            oRevert.onclick = function () {
                // oDrag.style.width = dragMinWidth + "px";//設定DOM元素left位置為dragMinWidth
                // oDrag.style.height = dragMinHeight + "px";//設定DOM元素top位置為dragMinHeight
                oDrag.style.width = widthbeforemax + "px";//設定DOM元素left位置為widthbeforemax
                oDrag.style.height = heightbeforemax + "px";//設定DOM元素top位置為heightbeforemax
                // oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px"; //將DOM元素寬度還原到 (瀏覽器窗口 - DOM元素寬度) / 2
                // oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px"; //將DOM元素高度還原到 (瀏覽器窗口 - DOM元素高度) / 2
                oDrag.style.left = leftbeforemax + "px";
                oDrag.style.top = topbeforemax + "px";
                content.style.width = parseInt(oDrag.style.width, 10) - 15 + "px";//將content寬度增加到 oDrag.style.width - 15
                content.style.height = parseInt(oDrag.style.height, 10) - 37 + "px";//將content高度增加到 oDrag.style.width - 37
                this.style.display = "none";//隱藏還原按鈕
                oMax.style.display = "block";//取消隱藏最大化按鈕
                ismove = true;
            };
            // 舊版(暫時棄用)最小化、關閉按鈕，(先拿掉最小化按鈕，如果需要下一行改成:  oMin.onclick = oClose.onclick = function (){ )
            // oClose.onclick = function () {
            //     oDrag.style.display = "none";//隱藏DOM元素
            //     let oA = document.createElement("a"); //添加一個DOM元素，作為縮小視窗
            //     oA.id = "open"; //添加id給縮小視窗
            //     oA.href = "javascript:;";//添加一個href偽協議，代表什麼都不會執行，隨後會添加回調事件
            //     oA.title = "還原";//添加title給縮小視窗
            //     document.body.appendChild(oA);//添加縮小視窗DOM到body內
            //     oA.onclick = function () { //添加縮小視窗的回調事件
            //         oDrag.style.display = "block"; //隱藏縮小視窗
            //         document.body.removeChild(this); //移除縮小視窗DOM元素
            //         this.onclick = null; //清除當前縮小視窗DOM的onclick事件
            //     };
            // };

            //關閉按鈕
            oClose.onclick = function () {
                Globalcontextdispatch({
                    type: "dragclose",
                    payload: {
                        [propsid]: {isclose: true}
                    }
                });
                // setState({[propsid]:{isclose:true} });
            };

            let islock = false;//當前是否鎖定
            //鎖定按鈕
            oLock.onclick = function () {
                if (islock) {
                    oLock.style.background = "url(\"./img/unlock.png\") no-repeat";
                    oLock.style.backgroundSize = "contain";
                    oDrag.style.zIndex = "1";
                    islock = false;
                } else {
                    oLock.style.background = "url(\"./img/lock.png\") no-repeat";
                    oLock.style.backgroundSize = "contain";
                    oDrag.style.zIndex = "2";
                    islock = true;
                }
            };

            //阻止冒泡   (先拿掉最小化，如果需要把下一行改成 : oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function (event) { //一起綁定onmousedown事件 )
            oMax.onmousedown = oClose.onmousedown = function (event) { //一起綁定onmousedown事件
                this.onfocus = function () { //用來去除跳轉偽協議的虛框線
                    this.blur()
                };
                event.stopPropagation();
                (event || window.event).cancelBubble = true //阻止冒泡事件
            };
        }

        /**
         * 改變可拖拽視窗大小函數
         * <br>
         * <br>
         * Description: <br>
         * 改變大小函數，詳細待補
         *
         * @file: Drag.js
         * @function  function_改變可拖拽視窗大小函數: resize
         * @param {DOM} oParent - 包裹handle的父DOM，即可拖拽視窗
         *  @param {DOM} content - 視窗內文的DOM
         * @param {DOM} handle - 要往某方向拉伸，被點擊的DOM
         * @param {boolean} isLeft - handle是否位於oParent左測
         * @param {boolean} isTop - handle是否位於oParent上測
         *  @param {boolean} lockX - 是否垂直拉伸，即X軸不改變
         *  @param {boolean} lockY - 是否水平拉伸，即Y軸不改變
         * @author: Arhua Ho
         * @date: 2019/7/26
         */
        function resize(oParent, content, handle, isLeft, isTop, lockX, lockY) {
            handle.onmousedown = function (event) {//將被點擊的DOM綁定onmousedown事件
                let disX = event.clientX - handle.offsetLeft;//(鼠標對於當前瀏覽器窗口的X座標 - 瀏覽器窗口最左邊到被點擊的DOM元素左邊Border外的長度)
                let disY = event.clientY - handle.offsetTop;//(鼠標對於當前瀏覽器窗口的Y座標 - 瀏覽器窗口最上邊到被點擊的DOM元素上邊Border外的長度)
                let iParentTop = oParent.offsetTop;//瀏覽器窗口最上邊到可拖拽視窗上邊Border外的長度
                let iParentLeft = oParent.offsetLeft;//瀏覽器窗口最左邊到可拖拽視窗左邊Border外的長度
                let iParentWidth = oParent.offsetWidth;//可拖拽視窗寬度
                let iParentHeight = oParent.offsetHeight;//可拖拽視窗高度
                document.onmousemove = function (event) {//綁定onmousemove事件
                    let iL = event.clientX - disX;//當前onmousemove事件鼠標對於當前瀏覽器窗口的X座標 - onmousedown的disX座標，往左為負，往右為正 (即相對於disX移動多少)
                    let iT = event.clientY - disY;//當前onmousemove事件鼠標對於當前瀏覽器窗口的Y座標 - onmousedown的disY座標，往上為負，往下為正 (即相對於disY移動多少)
                    let maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2; //即可拖拽視窗左邊Border內到瀏覽器窗口最右邊的長度 - 2  (求最大可以變到多大) 往左拉值會變小，往右拉不變
                    let maxH = document.documentElement.clientHeight - oParent.offsetTop - 2; //即可拖拽視窗上邊Border內到瀏覽器窗口最下邊的長度 - 2  (求最大可以變到多大) 往上拉值會變大，往下拉不便
                    // console.log(maxW)
                    // console.log(maxH)

                    let iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;//若isLeft為true則即可拖拽視窗寬度+相對於disX移動多少距離  (求目前onmousemove讓可拖拽視窗縮小或變大為多少)
                    let iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;//若isTop為true則即可拖拽視窗高度+相對於disY移動多少距離  (求目前onmousemove讓可拖拽視窗縮小或變大為多少)
                    // console.log(isLeft)
                    // console.log(iW)
                    // console.log(isTop)
                    // console.log(iH)

                    // isLeft && (oParent.style.left = iParentLeft + iL + "px");//即設定可拖拽視窗left為 ( onmousedown時瀏覽器窗口最左邊到可拖拽視窗左邊Border外的長度 - 相對於disX移動多少 )，為了給可拖拽視窗定左上角座標用
                    if (isLeft) {
                        oParent.style.left = iParentLeft + iL + "px";//即設定可拖拽視窗left為 ( onmousedown時瀏覽器窗口最左邊到可拖拽視窗左邊Border外的長度 - 相對於disX移動多少 )，為了給可拖拽視窗定左上角座標用
                        (parseInt(oParent.style.left, 10) <= fixleft) && (oParent.style.left = fixleft + "px");//另外設定最小縮放到那個X座標的右方
                    }
                    if (isTop) {
                        oParent.style.top = iParentTop + iT + "px";//即設定可拖拽視窗top為 ( onmousedown時瀏覽器窗口最上邊到可拖拽視窗上邊Border外的長度 - 相對於disY移動多少 )，為了給可拖拽視窗定左上角座標用
                        (parseInt(oParent.style.top, 10) <= fixtop) && (oParent.style.top = fixtop + "px");//另外設定最小縮放到那個Y座標的下方
                    }
                    iW < dragMinWidth && (iW = dragMinWidth);//設定若目前onmousemove讓可拖拽視窗寬度縮小到比可拖拽視窗縮到最小寬度還小，則不讓他繼續縮小
                    iW > maxW - fixright && (iW = maxW - fixright);//設定若目前onmousemove讓可拖拽視窗寬度放大到比可拖拽視窗放到最大寬度還大，則不讓他繼續放大
                    lockX || (oParent.style.width = iW + "px");//如果是垂直拉伸，則返回 lockX (true，即不執行 oParent.style.width = iW + "px")，就是鎖定X軸座標；不然寬度就隨onmousemove變化
                    lockX || (content.style.width = parseInt(oParent.style.width, 10) - 15 + "px");//如果是垂直拉伸，則返回 lockX (true，即不執行 parseInt(oParent.style.width, 10) - 15 + "px")，就是鎖定X軸座標；不然content寬度就隨onmousemove變化
                    iH < dragMinHeight && (iH = dragMinHeight);//設定若目前onmousemove讓可拖拽視窗高度縮小到比可拖拽視窗縮到最小高度還小，則不讓他繼續縮小
                    iH > maxH - fixbottom && (iH = maxH - fixbottom);//設定若目前onmousemove讓可拖拽視窗高度放大到比可拖拽視窗放到最大高度還大，則不讓他繼續放大
                    lockY || (oParent.style.height = iH + "px");//如果是水平拉伸，則返回 lockY (true，即不執行 oParent.style.height = iH + "px")，就是鎖定Y軸座標；不然高度就隨onmousemove變化
                    lockY || (content.style.height = parseInt(oParent.style.height, 10) - 37 + "px");//如果是水平拉伸，則返回 lockY (true，即不執行  parseInt(oParent.style.height, 10) - 37 + "px"))，就是鎖定Y軸座標；不然content高度就隨onmousemove變化
                    widthbeforemax = parseInt(oParent.style.width); //放大以前視窗寬度，預設值與 initial.dragwidth值一樣
                    heightbeforemax = parseInt(oParent.style.height); //放大以前視窗高度，預設值與 initial.draghieght值一樣
                    leftbeforemax = parseInt(oParent.style.left);//放大以前視窗left
                    topbeforemax = parseInt(oParent.style.top);//放大以前視窗top
                    if ((isLeft && iW == dragMinWidth) || (isTop && iH == dragMinHeight)) document.onmousemove = null;//如果高度或寬度任一個縮到比最小高度或寬度還小，就清除onmousemove事件
                    if ((isLeft && (parseInt(oParent.style.left, 10) == fixleft)) || (isTop && (parseInt(oParent.style.top, 10) == fixtop))) document.onmousemove = null;//如果高度或寬度任一個放到比最大高度或寬度還大，就清除onmousemove事件
                    return false;
                };
                document.onmouseup = function () {//綁定onmouseup事件
                    document.onmousemove = null;//清除onmousemove事件
                    document.onmouseup = null;////清除onmouseup事件
                };
                return false;
            }
        };

        let oDrag = document.getElementById(props.initialvar.id + "drag");
        let oContent = document.getElementById(props.initialvar.id + "content");
        let oTitle = byId(props.initialvar.id + "title");
        let oL = byId(props.initialvar.id + "resizeL");
        let oT = byId(props.initialvar.id + "resizeT");
        let oR = byId(props.initialvar.id + "resizeR");
        let oB = byId(props.initialvar.id + "resizeB");
        let oLT = byId(props.initialvar.id + "resizeLT");
        let oTR = byId(props.initialvar.id + "resizeTR");
        let oBR = byId(props.initialvar.id + "resizeBR");
        let oLB = byId(props.initialvar.id + "resizeLB");
        drag(oDrag, oContent, oTitle);
        // oDrag.style.position = "absolute";
        //四角
        resize(oDrag, oContent, oLT, true, true, false, false);
        resize(oDrag, oContent, oTR, false, true, false, false);
        resize(oDrag, oContent, oBR, false, false, false, false);
        resize(oDrag, oContent, oLB, true, false, false, false);
        //四边
        resize(oDrag, oContent, oL, true, false, false, true);
        resize(oDrag, oContent, oT, false, true, true, false);
        resize(oDrag, oContent, oR, false, false, false, true);
        resize(oDrag, oContent, oB, false, false, true, false);
        oDrag.style.left = initalleft;//初始位置
        oDrag.style.top = initaltop;//初始位置

        window.onresize = function () {
            // console.log(document.getElementsByName("drag")[0].lastChild)
            for (let i = 0; i < document.getElementsByName("drag").length; i++) {
                let oDrag = document.getElementsByName("drag")[i];
                let oContent = document.getElementsByName("drag")[i].lastChild;
                let oTitle = byId(props.initialvar.id + "title");
                let oL = byId(props.initialvar.id + "resizeL");
                let oT = byId(props.initialvar.id + "resizeT");
                let oR = byId(props.initialvar.id + "resizeR");
                let oB = byId(props.initialvar.id + "resizeB");
                let oLT = byId(props.initialvar.id + "resizeLT");
                let oTR = byId(props.initialvar.id + "resizeTR");
                let oBR = byId(props.initialvar.id + "resizeBR");
                let oLB = byId(props.initialvar.id + "resizeLB");
                drag(oDrag, oContent, oTitle);
                //四角
                resize(oDrag, oContent, oLT, true, true, false, false);
                resize(oDrag, oContent, oTR, false, true, false, false);
                resize(oDrag, oContent, oBR, false, false, false, false);
                resize(oDrag, oContent, oLB, true, false, false, false);
                //四边
                resize(oDrag, oContent, oL, true, false, false, true);
                resize(oDrag, oContent, oT, false, true, true, false);
                resize(oDrag, oContent, oR, false, false, false, true);
                resize(oDrag, oContent, oB, false, false, true, false);
                // oDrag.style.position = "absolute";
                const initalleft = (document.documentElement.clientWidth - initialgetdragwidth) / 2 + "px";//初始位置        3.修改視窗初始位置  (請保留這行，另外複製一行去改，並註解此行)
                const initaltop = (document.documentElement.clientHeight - initialgetdragheight) / 2 + "px";//初始位置        3.修改視窗初始位置  (請保留這行，另外複製一行去改，並註解此行)
                leftbeforemax = parseInt(initalleft);//放大以前視窗left
                topbeforemax = parseInt(initaltop);//放大以前視窗right
                oDrag.style.left = initalleft;//初始位置
                oDrag.style.top = initaltop;//初始位置
            }
        }
    }, []);

    return (

        <Dragwindow name="drag" id={props.initialvar.id + "drag"} initial={{
            id: props.initialvar.id,
            dragwidth: props.initialvar.width,
            draghieght: props.initialvar.height,
            isclose: Globalcontext[props.initialvar.id].isclose
            // isclose:state[props.initialvar.id].isclose
        }}>{/*1.修改初始視窗大小*/}
            {console.log(Globalcontext[props.initialvar.id])}
            <div id={props.initialvar.id + "title"}>
                <h2>{props.initialvar.titletext}</h2>
                <div>
                    {/*<a id={props.initialvar.id + "min"} href="javascript:;" title="最小化"></a>*/}
                    <a id={props.initialvar.id + "lock"} href="javascript:;" title="鎖定"></a>
                    <a id={props.initialvar.id + "max"} href="javascript:;" title="最大化"></a>
                    <a id={props.initialvar.id + "revert"} href="javascript:;" title="還原"></a>
                    <a id={props.initialvar.id + "close"} href="javascript:;" title="關閉"></a>
                </div>
            </div>
            <div id={props.initialvar.id + "resizeL"}></div>
            <div id={props.initialvar.id + "resizeT"}></div>
            <div id={props.initialvar.id + "resizeR"}></div>
            <div id={props.initialvar.id + "resizeB"}></div>
            <div id={props.initialvar.id + "resizeLT"}></div>
            <div id={props.initialvar.id + "resizeTR"}></div>
            <div id={props.initialvar.id + "resizeBR"}></div>
            <div id={props.initialvar.id + "resizeLB"}></div>
            <div id={props.initialvar.id + "content"}>
                {props.children}
            </div>
        </Dragwindow>)
}

export default Drag;

