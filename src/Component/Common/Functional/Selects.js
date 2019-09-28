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
 *  1.
 * 必傳參數:
 * 1. props : 下拉選單內容，由於props專門用於設定下拉選單內容 ( 如 : <SimpleSelect props={{a:11,b:22,c:33}}  /> )，所以其他參數個別傳遞
 * 2. muiSelectWidth : 下拉選單寬度，傳遞至SelectSetting的props，使用如 : <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px", labelname:"one"}} keep={["a"]} kill={["b"]} />
 * 選傳參數:
 * 1. fullWidth : 寬度最大化 (暫不開放)
 * 2. disabled : (boolean) 是否啟用 (暫不開放)
 * 3. label_background : 小標題背景色，使用如 : <SimpleSelect props={{a:11,b:22,c:33}} showvalue={true} selectSetting={{muiSelectWidth:"300px", labelname:"one"}} keep={["a"]} kill={["b"]} />
 * 4. label_border :小標題邊框
 * 5. label_border-radius : 小標題邊框圓角
 * 6. label_color : 小標題文字顏色
 * 7. label_fontSize : 小標題文字大小
 * 8. labelname : 小標題文字
 * 9.
 *
 * 3. color : 字體顏色  (暫不適用xs、sm、md、lg、xl)
 * 4. background : 背景色  (暫不適用xs、sm、md、lg、xl)
 * 5. width  : 寬度  (暫不適用xs、sm、md、lg、xl)
 * 6. height : 高度  (暫不適用xs、sm、md、lg、xl)
 * 7. border : 邊框樣式  (暫不適用xs、sm、md、lg、xl)
 * 8. spacing : spacing為[0,10]之區間的數，控制元素間間格距離(padding)每一單位為8px  (暫不適用xs、sm、md、lg、xl)
 * 9. hoverbackground :鼠標在按鈕上的背景色  (暫不適用xs、sm、md、lg、xl)
 *
 * @file: Buttons.js
 * @constant Styled-component_邊框線按紐:LineButton
 * @author: Arhua Ho
 * @date: 2019/8/4
 */
export const SimpleSelect = ({props, ...other}) => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            // (props.smspacing && theme.spacing(props.smspacing) )  || theme.spacing(1),

            "&& label": {
                //小標題樣式
                background: "red",
                border: "1px solid blue ",
                color: "white",
                "border-radius": "8px",
                fontSize: "5px",
            },
            "& .MuiInputBase-root": {
                //邊框樣式 ---組1
                height: "30px",
                width: other.selectSetting.muiSelectWidth,
                border: "1px solid red ",
                "border-radius": "8px",
            },
            "& .MuiSelect-root": {
                //下拉選單樣式 ---組1
                //color: "blue",
                height: "15px", //高度為邊框高度-15
                width:  other.selectSetting.muiSelectWidth,
                "border-radius": "8px",
                background: "pink",
            },
            "& .MuiSelect-root:hover": {
                //下拉選單hover樣式 ---組1
                //color: "blue",
                // height: "15px", //高度為邊框高度-15
                // width: "300px",
                // "border-radius": "8px",
                background: "orange",
            },
            "&& .MuiInput-underline:before": {
                //底線選擇前樣式 ---組2
                borderBottom: "0px solid rgba(0, 0, 0, 0.42)",
            },
            "&& .MuiInput-underline:after": {
                //底線選擇後樣式 ---組2
                borderBottom: "0px solid rgba(0, 0, 0, 0.42)",
            },
        }
        ,
        selectValue: {
            "&& .MuiSelect-select": {
                ////下拉選單字體樣式
                color: "red",
                textAlign: "center", //center,left,right
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
                background: "red",
                color: "green",
                border: "1px solid red ",
                "border-radius": "8px",
            },
            "&.MuiListItem-button:hover": {
                //被hover之下拉選項
                background: "blue",
                color: "green",
                border: "1px solid red ",
                "border-radius": "8px",
            },
            "&.Mui-selected": {
                //上一次選擇的選項之下拉選項
                background: "black",
                color: "black",
                border: "1px solid red ",
                "border-radius": "8px",
            },
            "&.Mui-selected:hover": {
                //上一次選擇的選項且被hover之下拉選項
                color: "black",
                background: "red",
                border: "1px solid red ",
                "border-radius": "8px",
            },
        }
        ,
        formControl: {
            //下拉選單容器樣式，保留此項暫不開放設置
            //margin: theme.spacing(1),
            //minWidth: 120,
            //height:"200px",
        },
    }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
        SelectValue: "",
        name: ""
    });

    function handleChange(event) {
        console.log("V:", values)
        console.log("tar:", event.target);
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value
        }));
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
                <InputLabel htmlFor="simpleSelect">{other.selectSetting.labelname && other.selectSetting.labelname}</InputLabel>
                <Select
                    value={values.SelectValue}
                    onChange={other.handleChange || handleChange}
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
