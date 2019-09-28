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
 * 1. props : 下拉選單內容
 * 選傳參數:
 * 1. fullWidth : 寬度最大化
 * 2. disabled : (boolean) 是否啟用
 * 3. color : 字體顏色  (適用xs、sm、md、lg、xl)
 * 4. background : 背景色  (適用xs、sm、md、lg、xl)
 * 5. width  : 寬度  (適用xs、sm、md、lg、xl)
 * 6. height : 高度  (適用xs、sm、md、lg、xl)
 * 7. border : 邊框樣式  (適用xs、sm、md、lg、xl)
 * 8. spacing : spacing為[0,10]之區間的數，控制元素間間格距離(padding)每一單位為8px  (適用xs、sm、md、lg、xl)
 * 9. hoverbackground :鼠標在按鈕上的背景色  (適用xs、sm、md、lg、xl)
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
            "& label": {
                //標題樣式
                background: "red",
                color: "green",
            },
            "& .MuiInputBase-root": {
                border: "1px solid red ",
                "border-radius": "4px",
                // background:"blue",
            },
            // "& #select-SelectValue":{
            //     color: "red",
            // },
            "& .MuiSelect-root": {
                color: "red",
                background: "pink",
            },
            // "& .MuiInput-underline:before":{
            //     "border-bottom":"5px solid green",
            // },
            // "& .MuiInput-underline:hover:not(.Mui-disabled):before":{
            //     "border-bottom":"10px solid red",
            // }

        }
        ,
        selectValue: {
            ".MuiSelect-select": {
                color: "red",
            },

        }
        ,
        menu: {
            // MuiButtonBase-root MuiListItem-root MuiMenuItem-root makeStyles-menu-481 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button
            color: "blue",
            background: "purple",
            "&& .MuiPaper-root": {
                background: "yellow",
            },
            "&.MuiListItem-button": {
                background: "red",
                color: "green",
            },
            "&.MuiListItem-button:hover": {
                background: "blue",
                color: "green",
            },
            "&.Mui-selected": {
                background: "black",

            },
            "&.Mui-selected:hover": {
                //針對上一次選擇的選項
                color: "black",
            },

        },
        menucontainer: {
            background: "yellow"
        }
        ,
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120
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
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="simpleSelect">{other.labelname && other.labelname}</InputLabel>
                <Select
                    value={values.SelectValue}
                    onChange={other.handleChange || handleChange}
                    inputProps={{
                        name: "SelectValue",
                        id: "simpleSelect"
                    }} className={classes.selectValue}
                >
                    {other.showvalue ? Object.keys(props).map(function (key) {
                        return <MenuItem key={key} value={props[key]} className={classes.menu}>
                            {key} : {props[key]}
                        </MenuItem>
                    }) : Object.keys(props).map(function (key) {
                        return <MenuItem key={key} value={props[key]} className={classes.menu}>
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
