import React, {useState} from "react"
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/**
 * 邊框線按紐
 *<br>
 * <br>
 * Description:<br>
 * 創建邊框線按紐，
 * 參數請以一個物件包裝如:{ id : XXX , width : "200px" } ，適用xs、sm、md、lg、xl 標記，
 * 使用時只要將參數前加上xs、sm、md、lg、xl，如: xsbackground，
 * 只要有xs、sm、md、lg、xl當達到條件時都會覆蓋原來沒有使用xs、sm、md、lg、xl時的樣式
 * value             | 0      600      960     1280   1920      px     <br>
 * key                | xs     sm       md       lg       xl      <br>
 * screen width  |--------|--------|--------|--------|-------->    <br>
 * range             |   xs    |   sm    |   md  |   lg     |   xl      <br>
 *  父組件控制:
 *  1. icon : 請在父組件內本組件的內部添加icon圖標，並在父組件引入如， import DeleteIcon from '@material-ui/icons/Delete'; ，另外要控制圖標位置要在父組件控制 classes.leftIcon
 *  2. onClick : 點擊事件回調函數，在父組件與一般添加事件相同，如:  <LineButton onClick= { (e)=>setState({...state,background:"yellow"}) } i="123" props={state}  >
 * 必傳參數:
 * 1. id : 唯一ID
 * 2. textright : 在左邊按紐文字 (3、4擇一必傳)
 * 3. textleft: 在右邊按紐文字 (3、4擇一必傳)
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
export const LineButton = ({props, ...other}) => {
    // console.log(props.xsbackground)
    // console.log(other)
    // const uiTheme = {
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // };


    const useStyles = makeStyles((theme) => ({
        button: {
            margin: (props.spacing && theme.spacing(props.spacing) )  || theme.spacing(1),
            color: props.color,
            background: props.background,
            width: props.width,
            height: props.height,
            border: props.border,
            borderRadius: "8px",//要改參數化
            "&:hover": {
                background: props.hoverbackground,
            },
            [theme.breakpoints.up("xs")]: {
                margin:  (props.xsspacing && theme.spacing(props.xsspacing) )  || theme.spacing(1),
                color: props.xscolor,
                background: props.xsbackground,
                width: props.xswidth,
                height: props.xsheight,
                border: props.xsborder,
                "&:hover": {
                    background: props.xshoverbackground,
                },
            },
            [theme.breakpoints.up("sm")]: {
                margin:  (props.smspacing && theme.spacing(props.smspacing) )  || theme.spacing(1),
                color: props.smcolor,
                background: props.smbackground,
                width: props.smwidth,
                height: props.smheight,
                border: props.smborder,
                "&:hover": {
                    background: props.smhoverbackground,
                },
            },
            [theme.breakpoints.up("md")]: {
                margin:  (props.mdspacing && theme.spacing(props.mdspacing) )  || theme.spacing(1),
                color: props.mdcolor,
                background: props.mdbackground,
                width: props.mdwidth,
                height: props.mdheight,
                border: props.mdborder,
                "&:hover": {
                    background: props.mdhoverbackground,
                },
            },
            [theme.breakpoints.up("lg")]: {
                margin:  (props.lgspacing && theme.spacing(props.lgspacing) )  || theme.spacing(1),
                color: props.lgcolor,
                background: props.lgbackground,
                width: props.lgwidth,
                height: props.lgheight,
                border: props.lgborder,
                "&:hover": {
                    background: props.lghoverbackground,
                },
            },
            [theme.breakpoints.up("xl")]: {
                margin: (props.xlspacing && theme.spacing(props.xlspacing) )  || theme.spacing(1),
                color: props.xlcolor,
                background: props.xlbackground,
                width: props.xlwidth,
                height: props.xlheight,
                border: props.xlborder,
                "&:hover": {
                    background: props.xlhoverbackground,
                },
            }
        },
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

    return (
        <Button variant="outlined" disabled={props.disabled && props.disabled}
                fullWidth={props.fullWidth && props.fullWidth} onClick={other.onClick} className={classes.button} href={other.href}>
            {/*<DeleteIcon className={classes.leftIcon} />  //位置範例，要拿去父組件那邊用*/}
            {props.textleft}
            {other.children}
            {props.textright}
        </Button>
    )

}

/**
 * 實心按紐
 *<br>
 * <br>
 * Description:<br>
 * 創建實心按紐，
 * 參數請以一個物件包裝如:{ id : XXX , width : "200px" } ，適用xs、sm、md、lg、xl 標記，
 * 使用時只要將參數前加上xs、sm、md、lg、xl，如: xsbackground，
 * 只要有xs、sm、md、lg、xl當達到條件時都會覆蓋原來沒有使用xs、sm、md、lg、xl時的樣式
 * value             | 0      600      960     1280   1920      px     <br>
 * key                | xs     sm       md       lg       xl      <br>
 * screen width  |--------|--------|--------|--------|-------->    <br>
 * range             |   xs    |   sm    |   md  |   lg     |   xl      <br>
 *  父組件控制:
 *  1. icon : 請在父組件內本組件的內部添加icon圖標，並在父組件引入如， import DeleteIcon from '@material-ui/icons/Delete'; ，另外要控制圖標位置要在父組件控制 classes.leftIcon
 *  2. onClick : 點擊事件回調函數，在父組件與一般添加事件相同，如:  <ContainedButton onClick= { (e)=>setState({...state,background:"yellow"}) } i="123" props={state}  >
 * 必傳參數:
 * 1. id : 唯一ID
 * 2. textright : 在左邊按紐文字 (3、4擇一必傳)
 * 3. textleft: 在右邊按紐文字 (3、4擇一必傳)
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
 * @constant Styled-component_邊框線按紐:ContainedButton
 * @author: Arhua Ho
 * @date: 2019/8/4
 */
export const ContainedButton = ({props, ...other}) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: (props.spacing && theme.spacing(props.spacing) )  || theme.spacing(1),
            color: props.color,
            background: props.background,
            width: props.width,
            height: props.height,
            border: props.border,
            "&:hover": {
                background: props.hoverbackground,
            },
            [theme.breakpoints.up("xs")]: {
                margin:  (props.xsspacing && theme.spacing(props.xsspacing) )  || theme.spacing(1),
                color: props.xscolor,
                background: props.xsbackground,
                width: props.xswidth,
                height: props.xsheight,
                border: props.xsborder,
                "&:hover": {
                    background: props.xshoverbackground,
                },
            },
            [theme.breakpoints.up("sm")]: {
                margin:  (props.smspacing && theme.spacing(props.smspacing) )  || theme.spacing(1),
                color: props.smcolor,
                background: props.smbackground,
                width: props.smwidth,
                height: props.smheight,
                border: props.smborder,
                "&:hover": {
                    background: props.smhoverbackground,
                },
            },
            [theme.breakpoints.up("md")]: {
                margin:  (props.mdspacing && theme.spacing(props.mdspacing) )  || theme.spacing(1),
                color: props.mdcolor,
                background: props.mdbackground,
                width: props.mdwidth,
                height: props.mdheight,
                border: props.mdborder,
                "&:hover": {
                    background: props.mdhoverbackground,
                },
            },
            [theme.breakpoints.up("lg")]: {
                margin:  (props.lgspacing && theme.spacing(props.lgspacing) )  || theme.spacing(1),
                color: props.lgcolor,
                background: props.lgbackground,
                width: props.lgwidth,
                height: props.lgheight,
                border: props.lgborder,
                "&:hover": {
                    background: props.lghoverbackground,
                },
            },
            [theme.breakpoints.up("xl")]: {
                margin: (props.xlspacing && theme.spacing(props.xlspacing) )  || theme.spacing(1),
                color: props.xlcolor,
                background: props.xlbackground,
                width: props.xlwidth,
                height: props.xlheight,
                border: props.xlborder,
                "&:hover": {
                    background: props.xlhoverbackground,
                },
            }
        },
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
    return (
        <Button variant="contained" disabled={props.disabled && props.disabled}
                fullWidth={props.fullWidth && props.fullWidth} onClick={other.onClick} className={classes.button} href={other.href}>
            {/*<DeleteIcon className={classes.leftIcon} />  //位置範例，要拿去父組件那邊用*/}
            {props.textleft}
            {other.children}
            {props.textright}
        </Button>
    )

}

/**
 * 文本按紐
 *<br>
 * <br>
 * Description:<br>
 * 創建文本按紐，
 * 參數請以一個物件包裝如:{ id : XXX , width : "200px" } ，適用xs、sm、md、lg、xl 標記，
 * 使用時只要將參數前加上xs、sm、md、lg、xl，如: xsbackground，
 * 只要有xs、sm、md、lg、xl當達到條件時都會覆蓋原來沒有使用xs、sm、md、lg、xl時的樣式
 * value             | 0      600      960     1280   1920      px     <br>
 * key                | xs     sm       md       lg       xl      <br>
 * screen width  |--------|--------|--------|--------|-------->    <br>
 * range             |   xs    |   sm    |   md  |   lg     |   xl      <br>
 *  父組件控制:
 *  1. icon : 請在父組件內本組件的內部添加icon圖標，並在父組件引入如， import DeleteIcon from '@material-ui/icons/Delete'; ，另外要控制圖標位置要在父組件控制 classes.leftIcon
 *  2. onClick : 點擊事件回調函數，在父組件與一般添加事件相同，如:  <TextButton onClick= { (e)=>setState({...state,background:"yellow"}) } i="123" props={state}  >
 * 必傳參數:
 * 1. id : 唯一ID
 * 2. textright : 在左邊按紐文字 (3、4擇一必傳)
 * 3. textleft: 在右邊按紐文字 (3、4擇一必傳)
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
 * @constant Styled-component_邊框線按紐:TextButton
 * @author: Arhua Ho
 * @date: 2019/8/4
 */
export const TextButton = ({props, ...other}) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: (props.spacing && theme.spacing(props.spacing) )  || theme.spacing(1),
            color: props.color,
            background: props.background,
            width: props.width,
            height: props.height,
            border: props.border,
            "&:hover": {
                background: props.hoverbackground,
            },
            [theme.breakpoints.up("xs")]: {
                margin:  (props.xsspacing && theme.spacing(props.xsspacing) )  || theme.spacing(1),
                color: props.xscolor,
                background: props.xsbackground,
                width: props.xswidth,
                height: props.xsheight,
                border: props.xsborder,
                "&:hover": {
                    background: props.xshoverbackground,
                },
            },
            [theme.breakpoints.up("sm")]: {
                margin:  (props.smspacing && theme.spacing(props.smspacing) )  || theme.spacing(1),
                color: props.smcolor,
                background: props.smbackground,
                width: props.smwidth,
                height: props.smheight,
                border: props.smborder,
                "&:hover": {
                    background: props.smhoverbackground,
                },
            },
            [theme.breakpoints.up("md")]: {
                margin:  (props.mdspacing && theme.spacing(props.mdspacing) )  || theme.spacing(1),
                color: props.mdcolor,
                background: props.mdbackground,
                width: props.mdwidth,
                height: props.mdheight,
                border: props.mdborder,
                "&:hover": {
                    background: props.mdhoverbackground,
                },
            },
            [theme.breakpoints.up("lg")]: {
                margin:  (props.lgspacing && theme.spacing(props.lgspacing) )  || theme.spacing(1),
                color: props.lgcolor,
                background: props.lgbackground,
                width: props.lgwidth,
                height: props.lgheight,
                border: props.lgborder,
                "&:hover": {
                    background: props.lghoverbackground,
                },
            },
            [theme.breakpoints.up("xl")]: {
                margin: (props.xlspacing && theme.spacing(props.xlspacing) )  || theme.spacing(1),
                color: props.xlcolor,
                background: props.xlbackground,
                width: props.xlwidth,
                height: props.xlheight,
                border: props.xlborder,
                "&:hover": {
                    background: props.xlhoverbackground,
                },
            }
        },
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
    return (
        <Button disabled={props.disabled && props.disabled}
                fullWidth={props.fullWidth && props.fullWidth} onClick={other.onClick} className={classes.button} href={other.href}>
            {/*<DeleteIcon className={classes.leftIcon} />  //位置範例，要拿去父組件那邊用*/}
            {props.textleft}
            {other.children}
            {props.textright}
        </Button>
    )

}








