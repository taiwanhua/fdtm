import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

/**
 * 基本下拉選單
 *<br>
 * <br>
 * Description:<br>
 * 創建基本下拉選單，
 * 參數請以一個物件包裝如:{ id : XXX , width : "200px" } ，適用xs、sm、md、lg、xl 標記，
 * 使用時只要將參數前加上xs、sm、md、lg、xl，如: xsbackground，
 * 只要有xs、sm、md、lg、xl當達到條件時都會覆蓋原來沒有使用xs、sm、md、lg、xl時的樣式
 * value             | 0      600      960     1280   1920      px     <br>
 * key                | xs     sm       md       lg       xl      <br>
 * screen width  |--------|--------|--------|--------|-------->    <br>
 * range             |   xs    |   sm    |   md  |   lg     |   xl      <br>
 *  父組件控制:
 *  1. handleChange : (可選)由父組件傳入 setState 或 dispatch 的方法 ( 請以object傳入，Key名為對應props的Key名 )，供SimpleSelect(基本下拉選單)更新state，不傳也沒關係，因SimpleSelect內部也有 state 控制，使用如 :
 *      <SimpleSelect props={{a: 11, b: 22, c: 33}} showvalue={true} handleChange={{
 *          a: () => {
 *              Globalcontextdispatch({
 *                  type: "dragclose",
 *                      payload: {
 *                          test: {isclose: false}
 *                      }
 *                  });
 *              },
 *          b: () => {
 *              Globalcontextdispatch({
 *                  type: "dragclose",
 *                      payload: {
 *                          test13: {isclose: false}
 *                      }
 *                  });
 *              }
 *      }} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} keep={["a","b","c"]} kill={[]}/>
 *          ，另外若有需要請以 StateNotRerendercontainer 容器包裹，以阻止多餘的重新渲染
 * 必傳參數:
 * 1. props : 下拉選單內容，由於props專門用於設定下拉選單內容 ( 如 : <SimpleSelect props={{a:11,b:22,c:33}}  /> )，所以其他參數個別傳遞
 * 2. muiSelectWidth : 下拉選單寬度，傳遞至SelectSetting的props，使用如 : <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px", labelname:"one"}} keep={["a"]} kill={["b"]} />
 * 選傳參數:
 * 1. fullWidth : 寬度最大化 (暫不開放)
 * 2. disabled : (boolean) 是否啟用 (暫不開放)
 * 3. label_background : 小標題背景色，使用如 : <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px", labelname:"one"}} keep={["a"]} kill={["b"]} />
 * 4. label_border :小標題邊框
 * 5. label_borderradius : 小標題邊框圓角
 * 6. label_color : 小標題文字顏色
 * 7. label_fontSize : 小標題文字大小
 * 8. labelname : 小標題文字
 * 9. MuiSelect_height : 下拉選單高度
 * 10. MuiSelect_borderradius : 下拉選單邊框圓角
 * 11. MuiSelect_background : 下拉選單背景色
 * 12. MuiSelect_border : 下拉選單邊框
 * 13. MuiSelect_hover_background : 下拉選單hover背景色
 * 14. underline_before : 下拉選單選擇前底線
 * 15. underline_after : 下拉選單選擇前底線(推薦優先underline_before使用)
 * 16. MuiListItem_InMuiSelect_color : 下拉選單內選項文字顏色
 * 17. MuiListItem_InMuiSelect_textAlign : 下拉選單內選項文字對齊 ( center、left、right )
 * 18. MuiListItem_background : 選項背景色
 * 19. MuiListItem_color : 選項文字顏色
 * 20. MuiListItem_border : 選項邊框
 * 21. MuiListItem_borderradius : 選項邊框圓角
 * 22. MuiListItem_hover_background : 選項hover背景色
 * 23. MuiListItem_hover_color : 選項hover文字顏色
 * 24. MuiListItem_hover_border : 選項hover邊框
 * 25. MuiListItem_hover_borderradius : 選項hover邊框圓角
 * 26. MuiListItem_selected_background : 上次被選擇選項背景色
 * 27. MuiListItem_selected_color :上次被選擇選項文字顏色
 * 28. MuiListItem_selected_border :上次被選擇選項邊框
 * 29. MuiListItem_selected_borderradius :上次被選擇選項邊框圓角
 * 30. MuiListItem_selected_hover_background :上次被選擇選項hover背景色
 * 31. MuiListItem_selected_hover_color : 上次被選擇選項hover文字顏色
 * 32. MuiListItem_selected_hover_border : 上次被選擇選項hover邊框
 * 33. MuiListItem_selected_hover_borderradius : 上次被選擇選項hover邊框圓角
 * 34. showvalue : 下拉選單選項要不要顯示其值，預設為false，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}/>
 * 35. itemvalue : 下拉選單預選的選項，預設為false，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}/>
 * 36. keep : 下拉選單內選項篩選後要保留哪些選項，請傳入陣列，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}  keep={["a"]} kill={["b"]} />
 * 37. kill : 下拉選單內選項篩選後要刪除哪些選項，請傳入陣列，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}  keep={["a"]} kill={["b"]} />
 *
 * X. color : 字體顏色  (暫不適用xs、sm、md、lg、xl)
 * X. background : 背景色  (暫不適用xs、sm、md、lg、xl)
 * X. width  : 寬度  (暫不適用xs、sm、md、lg、xl)
 * X. height : 高度  (暫不適用xs、sm、md、lg、xl)
 * X. border : 邊框樣式  (暫不適用xs、sm、md、lg、xl)
 * X. spacing : spacing為[0,10]之區間的數，控制元素間間格距離(padding)每一單位為8px  (暫不適用xs、sm、md、lg、xl)
 * X. hoverbackground :鼠標在按鈕上的背景色  (暫不適用xs、sm、md、lg、xl)
 *
 * @file: Selects.js
 * @constant Styled-component_基本下拉選單:SimpleSelect
 * @author: Arhua Ho
 * @date: 2019/9/29
 */
export const SimpleSelect = ({props, ...other}) => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            // (props.smspacing && theme.spacing(props.smspacing) )  || theme.spacing(1),

            "&& label": {
                //小標題樣式
                background: other.selectSetting.label_background || "#5c94bd",
                border: other.selectSetting.label_border || "1px solid #470938",
                color: other.selectSetting.label_color || "#d9eeec",
                "border-radius": other.selectSetting.label_borderradius || "6px",
                fontSize: other.selectSetting.fontSize || "17px",
            },
            "& .MuiInputBase-root": {
                //邊框樣式 ---組1
                height: (other.selectSetting.MuiSelect_height && parseInt(other.selectSetting.MuiSelect_height) + "px") || "30px",
                width: other.selectSetting.muiSelectWidth,
                border: other.selectSetting.MuiSelect_border || "2px solid #5c94bd ",
                "border-radius": other.selectSetting.MuiSelect_borderradius || "8px",
            },
            "& .MuiSelect-root": {
                //下拉選單樣式 ---組1
                //color: "blue",
                height: (other.selectSetting.MuiSelect_height && parseInt(other.selectSetting.MuiSelect_height) - 15 + "px") || "15px", //高度為邊框高度-15
                width: other.selectSetting.muiSelectWidth,
                "border-radius": other.selectSetting.MuiSelect_borderradius || "8px",
                background: other.selectSetting.MuiSelect_background || "#5c94bd",
                border: other.selectSetting.MuiSelect_border || "1px solid #5c94bd ",
            },
            "& .MuiSelect-root:hover": {
                //下拉選單hover樣式 ---組1
                //color: "blue",
                // height: "15px", //高度為邊框高度-15
                // width: "300px",
                // "border-radius": "8px",
                background: other.selectSetting.MuiSelect_hover_background || "#3c9d9b",
            },
            "&& .MuiInput-underline:before": {
                //底線選擇前樣式 ---組2
                borderBottom: other.selectSetting.underline_before || "0px solid rgba(0, 0, 0, 0.42)",
            },
            "&& .MuiInput-underline:after": {
                //底線選擇後樣式 ---組2
                borderBottom: other.selectSetting.underline_after || "0px solid rgba(0, 0, 0, 0.42)",
            },
        }
        ,
        selectValue: {
            "&& .MuiSelect-select": {
                ////下拉選單字體樣式
                color: other.selectSetting.MuiListItem_InMuiSelect_color || "#d9eeec",
                textAlign: other.selectSetting.MuiListItem_InMuiSelect_textAlign || "center", //center,left,right
            },
        }
        ,
        menu: {
            // MuiButtonBase-root MuiListItem-root MuiMenuItem-root makeStyles-menu-481 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button
            //color: "blue",
            //background: "purple",
            // "&& .MuiPaper-root": {
            //     background: "yellow",
            // },
            "&.MuiListItem-button": {
                //未被選中之下拉選項
                background: other.selectSetting.MuiListItem_background || "#64b2cd",
                color: other.selectSetting.MuiListItem_color || "#105e62",
                border: other.selectSetting.MuiListItem_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_borderradius || "8px",
            },
            "&.MuiListItem-button:hover": {
                //被hover之下拉選項
                background: other.selectSetting.MuiListItem_hover_background || "#f77754",
                color: other.selectSetting.MuiListItem_hover_color || "#105e62",
                border: other.selectSetting.MuiListItem_hover_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_hover_borderradius || "8px",
            },
            "&.Mui-selected": {
                //上一次選擇的選項之下拉選項
                background: other.selectSetting.MuiListItem_selected_background || "#ef4b4b",
                color: other.selectSetting.MuiListItem_selected_color || "#105e62",
                border: other.selectSetting.MuiListItem_selected_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_selected_borderradius || "8px",
            },
            "&.Mui-selected:hover": {
                //上一次選擇的選項且被hover之下拉選項
                color: other.selectSetting.MuiListItem_selected_hover_color || "#105e62",
                background: other.selectSetting.MuiListItem_selected_hover_background || "#f77754",
                border: other.selectSetting.MuiListItem_selected_hover_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_selected_hover_borderradius || "8px",
            },
        }
        ,
        formControl: {
            //下拉選單容器樣式，保留此項暫不開放設置
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            //minWidth: 120,
            //height:"200px",
        },
    }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
        SelectValue: (other.defaultSelectItemValue && other.defaultSelectItemValue.itemvalue) || "",
        name: ""
    });

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    function handleChange(event) {
        console.log("V:", values)
        console.log("tar:", event.target);
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value
        }));
        (((other.handleChange && other.handleChange[getKeyByValue(props, event.target.value)]) && other.handleChange[getKeyByValue(props, event.target.value)]()) || console.log("No HandleChange"))

    }

    //移除kill陣列內內容
    other.kill && (other.kill.map(ele =>
        props[ele] && delete props[ele]
    ));
    //移除keep陣列外內容
    other.keep && (Object.keys(props).map(ele =>
            !other.keep.includes(ele) && (delete props[ele])
        )
    );

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl} disabled={false}>
                <InputLabel
                    htmlFor="simpleSelect">{other.selectSetting.labelname && other.selectSetting.labelname}</InputLabel>
                <Select
                    value={values.SelectValue}
                    // onChange={other.handleChange || handleChange}
                    onChange={handleChange}
                    inputProps={{
                        name: "SelectValue",
                        id: "simpleSelect",
                    }} className={classes.selectValue}
                >
                    {other.showvalue ? Object.keys(props).map(function (key) {
                        return <MenuItem key={key} value={props[key]} disabled={false} className={classes.menu}>
                            {key} : {props[key]}
                        </MenuItem>
                    }) : Object.keys(props).map(function (key) {
                        return <MenuItem key={key} value={props[key]} disabled={false} className={classes.menu}>
                            {key}
                        </MenuItem>
                    })
                    }
                    {/*<MenuItem value={10}>Ten</MenuItem>*/}
                    {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                </Select>
            </FormControl>


        </form>
    );
}

/**
 * 功能列下拉選單
 *<br>
 * <br>
 * Description:<br>
 * 創建基本下拉選單，
 * 參數請以一個物件包裝如:{ id : XXX , width : "200px" } ，適用xs、sm、md、lg、xl 標記，
 * 使用時只要將參數前加上xs、sm、md、lg、xl，如: xsbackground，
 * 只要有xs、sm、md、lg、xl當達到條件時都會覆蓋原來沒有使用xs、sm、md、lg、xl時的樣式
 * value             | 0      600      960     1280   1920      px     <br>
 * key                | xs     sm       md       lg       xl      <br>
 * screen width  |--------|--------|--------|--------|-------->    <br>
 * range             |   xs    |   sm    |   md  |   lg     |   xl      <br>
 *  父組件控制:
 *  1. handleChange : (可選)由父組件傳入 setState 或 dispatch 的方法 ( 請以object傳入，Key名為對應props的Key名 )，供SimpleSelect(基本下拉選單)更新state，不傳也沒關係，因SimpleSelect內部也有 state 控制，使用如 :
 *      <SimpleSelect props={{a: 11, b: 22, c: 33}} showvalue={true} handleChange={{
 *          a: () => {
 *              Globalcontextdispatch({
 *                  type: "dragclose",
 *                      payload: {
 *                          test: {isclose: false}
 *                      }
 *                  });
 *              },
 *          b: () => {
 *              Globalcontextdispatch({
 *                  type: "dragclose",
 *                      payload: {
 *                          test13: {isclose: false}
 *                      }
 *                  });
 *              }
 *      }} selectSetting={{muiSelectWidth: "300px", labelname: "one1"}} keep={["a","b","c"]} kill={[]}/>
 *          ，另外若有需要請以 StateNotRerendercontainer 容器包裹，以阻止多餘的重新渲染
 * 必傳參數:
 * 1. props : 下拉選單內容，由於props專門用於設定下拉選單內容 ( 如 : <SimpleSelect props={{a:11,b:22,c:33}}  /> )，所以其他參數個別傳遞
 * 2. muiSelectWidth : 下拉選單寬度，傳遞至SelectSetting的props，使用如 : <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px", labelname:"one"}} keep={["a"]} kill={["b"]} />
 * 3. defaultSelectItemValue : 下拉選單的功能名字，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{ YourTagName:"標籤值" }} selectSetting={{muiSelectWidth:"300px"}}/>
 * 選傳參數:
 * 1. fullWidth : 寬度最大化 (暫不開放)
 * 2. disabled : (boolean) 是否啟用 (暫不開放)
 * 3. label_background : 小標題背景色，使用如 : <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px", labelname:"one"}} keep={["a"]} kill={["b"]} />
 * 4. label_border :小標題邊框
 * 5. label_borderradius : 小標題邊框圓角
 * 6. label_color : 小標題文字顏色
 * 7. label_fontSize : 小標題文字大小
 * 8. labelname : 小標題文字
 * 9. MuiSelect_height : 下拉選單高度
 * 10. MuiSelect_borderradius : 下拉選單邊框圓角
 * 11. MuiSelect_background : 下拉選單背景色
 * 12. MuiSelect_border : 下拉選單邊框
 * 13. MuiSelect_hover_background : 下拉選單hover背景色
 * 14. underline_before : 下拉選單選擇前底線
 * 15. underline_after : 下拉選單選擇前底線(推薦優先underline_before使用)
 * 16. MuiListItem_InMuiSelect_color : 下拉選單內選項文字顏色
 * 17. MuiListItem_InMuiSelect_textAlign : 下拉選單內選項文字對齊 ( center、left、right )
 * 18. MuiListItem_background : 選項背景色
 * 19. MuiListItem_color : 選項文字顏色
 * 20. MuiListItem_border : 選項邊框
 * 21. MuiListItem_borderradius : 選項邊框圓角
 * 22. MuiListItem_hover_background : 選項hover背景色
 * 23. MuiListItem_hover_color : 選項hover文字顏色
 * 24. MuiListItem_hover_border : 選項hover邊框
 * 25. MuiListItem_hover_borderradius : 選項hover邊框圓角
 * 26. MuiListItem_selected_background : 上次被選擇選項背景色
 * 27. MuiListItem_selected_color :上次被選擇選項文字顏色
 * 28. MuiListItem_selected_border :上次被選擇選項邊框
 * 29. MuiListItem_selected_borderradius :上次被選擇選項邊框圓角
 * 30. MuiListItem_selected_hover_background :上次被選擇選項hover背景色
 * 31. MuiListItem_selected_hover_color : 上次被選擇選項hover文字顏色
 * 32. MuiListItem_selected_hover_border : 上次被選擇選項hover邊框
 * 33. MuiListItem_selected_hover_borderradius : 上次被選擇選項hover邊框圓角
 * 34. showvalue : 下拉選單選項要不要顯示其值，預設為false，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}/>
 * 35. keep : 下拉選單內選項篩選後要保留哪些選項，請傳入陣列，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}  keep={["a"]} kill={["b"]} />
 * 36. kill : 下拉選單內選項篩選後要刪除哪些選項，請傳入陣列，使用如 : <SimpleSelect props={{a:11,b:22,c:33,d:34,e:21,f:32,g:51}} showvalue={true} defaultSelectItemValue={{itemvalue:51}} selectSetting={{muiSelectWidth:"300px"}}  keep={["a"]} kill={["b"]} />
 *
 * X. color : 字體顏色  (暫不適用xs、sm、md、lg、xl)
 * X. background : 背景色  (暫不適用xs、sm、md、lg、xl)
 * X. width  : 寬度  (暫不適用xs、sm、md、lg、xl)
 * X. height : 高度  (暫不適用xs、sm、md、lg、xl)
 * X. border : 邊框樣式  (暫不適用xs、sm、md、lg、xl)
 * X. spacing : spacing為[0,10]之區間的數，控制元素間間格距離(padding)每一單位為8px  (暫不適用xs、sm、md、lg、xl)
 * X. hoverbackground :鼠標在按鈕上的背景色  (暫不適用xs、sm、md、lg、xl)
 *
 * @file: Selects.js
 * @constant Styled-component_功能列下拉選單:FunctionSelect
 * @author: Arhua Ho
 * @date: 2019/9/29
 */
export const FunctionSelect = ({props, ...other}) => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            // (props.smspacing && theme.spacing(props.smspacing) )  || theme.spacing(1),

            "&& label": {
                //小標題樣式
                background: other.selectSetting.label_background || "#5c94bd",
                border: other.selectSetting.label_border || "1px solid #470938",
                color: other.selectSetting.label_color || "#d9eeec",
                "border-radius": other.selectSetting.label_borderradius || "6px",
                fontSize: other.selectSetting.fontSize || "17px",
            },
            "& .MuiInputBase-root": {
                //邊框樣式 ---組1
                height: (other.selectSetting.MuiSelect_height && parseInt(other.selectSetting.MuiSelect_height) + "px") || "30px",
                width: other.selectSetting.muiSelectWidth,
                border: other.selectSetting.MuiSelect_border || "2px solid #5c94bd ",
                "border-radius": other.selectSetting.MuiSelect_borderradius || "8px",
            },
            "& .MuiSelect-root": {
                //下拉選單樣式 ---組1
                //color: "blue",
                height: (other.selectSetting.MuiSelect_height && parseInt(other.selectSetting.MuiSelect_height) - 15 + "px") || "15px", //高度為邊框高度-15
                width: other.selectSetting.muiSelectWidth,
                "border-radius": other.selectSetting.MuiSelect_borderradius || "8px",
                background: other.selectSetting.MuiSelect_background || "#5c94bd",
                border: other.selectSetting.MuiSelect_border || "1px solid #5c94bd ",
            },
            "& .MuiSelect-root:hover": {
                //下拉選單hover樣式 ---組1
                //color: "blue",
                // height: "15px", //高度為邊框高度-15
                // width: "300px",
                // "border-radius": "8px",
                background: other.selectSetting.MuiSelect_hover_background || "#3c9d9b",
            },
            "&& .MuiInput-underline:before": {
                //底線選擇前樣式 ---組2
                borderBottom: other.selectSetting.underline_before || "0px solid rgba(0, 0, 0, 0.42)",
            },
            "&& .MuiInput-underline:after": {
                //底線選擇後樣式 ---組2
                borderBottom: other.selectSetting.underline_after || "0px solid rgba(0, 0, 0, 0.42)",
            },
        }
        ,
        selectValue: {
            "&& .MuiSelect-select": {
                ////下拉選單字體樣式
                color: other.selectSetting.MuiListItem_InMuiSelect_color || "#d9eeec",
                textAlign: other.selectSetting.MuiListItem_InMuiSelect_textAlign || "center", //center,left,right
            },
        }
        ,
        menu: {
            // MuiButtonBase-root MuiListItem-root MuiMenuItem-root makeStyles-menu-481 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button
            //color: "blue",
            //background: "purple",
            // "&& .MuiPaper-root": {
            //     background: "yellow",
            // },
            "&.MuiListItem-button": {
                //未被選中之下拉選項
                background: other.selectSetting.MuiListItem_background || "#64b2cd",
                color: other.selectSetting.MuiListItem_color || "#105e62",
                border: other.selectSetting.MuiListItem_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_borderradius || "8px",

            },
            "&.MuiListItem-button:hover": {
                //被hover之下拉選項
                background: other.selectSetting.MuiListItem_hover_background || "#f77754",
                color: other.selectSetting.MuiListItem_hover_color || "#105e62",
                border: other.selectSetting.MuiListItem_hover_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_hover_borderradius || "8px",
            },
            "&.Mui-selected": {
                //上一次選擇的選項之下拉選項
                background: other.selectSetting.MuiListItem_selected_background || "#ef4b4b",
                color: other.selectSetting.MuiListItem_selected_color || "#105e62",
                border: other.selectSetting.MuiListItem_selected_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_selected_borderradius || "8px",
            },
            "&.Mui-selected:hover": {
                //上一次選擇的選項且被hover之下拉選項
                color: other.selectSetting.MuiListItem_selected_hover_color || "#105e62",
                background: other.selectSetting.MuiListItem_selected_hover_background || "#f77754",
                border: other.selectSetting.MuiListItem_selected_hover_border || "2px solid #b6e6bd ",
                "border-radius": other.selectSetting.MuiListItem_selected_hover_borderradius || "8px",
            },
        }
        ,
        formControl: {
            //下拉選單容器樣式，保留此項暫不開放設置
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            //minWidth: 120,
            //height:"200px",
        },
    }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
        SelectValue: (other.defaultSelectItemValue && other.defaultSelectItemValue[Object.keys(other.defaultSelectItemValue)[0]]) || "",
        name: ""
    });

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    function handleChange(event) {
        // console.log("V:", values)
        // console.log("tar:", event.target);
        // setValues(oldValues => ({
        //     ...oldValues,
        //     [event.target.name]: event.target.value
        // }));
        (((other.handleChange && other.handleChange[getKeyByValue(props, event.target.value)]) && other.handleChange[getKeyByValue(props, event.target.value)]()) || console.log("No HandleChange"))

    }

    //移除kill陣列內內容
    other.kill && (other.kill.map(ele =>
        props[ele] && delete props[ele]
    ));
    //移除keep陣列外內容
    other.keep && (Object.keys(props).map(ele =>
            !other.keep.includes(ele) && (delete props[ele])
        )
    );

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl} disabled={false}>
                <InputLabel
                    htmlFor="simpleSelect">{other.selectSetting.labelname && other.selectSetting.labelname}</InputLabel>
                <Select
                    value={values.SelectValue}
                    // onChange={other.handleChange || handleChange}
                    onChange={handleChange}
                    inputProps={{
                        name: "SelectValue",
                        id: "simpleSelect",
                    }} className={classes.selectValue}
                >

                    {other.showvalue ? <MenuItem key={9999}
                                                 value={other.defaultSelectItemValue[Object.keys(other.defaultSelectItemValue)[0]]}
                                                 disabled={true}  className={classes.menu}>
                            {Object.keys(other.defaultSelectItemValue)[0]} {" : " + other.defaultSelectItemValue[Object.keys(other.defaultSelectItemValue)[0]]}
                        </MenuItem> :
                        <MenuItem key={9999}
                                  value={other.defaultSelectItemValue[Object.keys(other.defaultSelectItemValue)[0]]}
                                  disabled={true}  className={classes.menu}>
                            {Object.keys(other.defaultSelectItemValue)[0]}
                        </MenuItem>
                    }

                    {other.showvalue ? Object.keys(props).map(function (key) {
                        return <MenuItem key={key} value={props[key]} disabled={false} className={classes.menu}>
                            {key} : {props[key]}
                        </MenuItem>
                    }) : Object.keys(props).map(function (key) {
                        return <MenuItem key={key} value={props[key]} disabled={false} className={classes.menu}>
                            {key}
                        </MenuItem>
                    })
                    }
                    {/*<MenuItem value={10}>Ten</MenuItem>*/}
                    {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                </Select>
            </FormControl>


        </form>
    );
}
