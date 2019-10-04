import React, {useEffect, useState} from "react"
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/brush';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/axisPointer';


// npm install echarts


//-------------------------------------------------------

export const TradeChart = (props) => {
    useEffect(() => {
        let datas = [
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
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // }, {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
            // {
            //     "DateTime": "",
            //     "Date": "2019/7/10",
            //     "Time": "15:00:59",
            //     "O": "-",
            //     "H": "-",
            //     "L": "-",
            //     "C": "-",
            //     "Vol": "-"
            // },
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
            },
            {
                "DateTime": "2019/7/10 15:06",
                "Date": "2019/7/10",
                "Time": "15:06:47",
                "O": 10724,
                "H": 10725,
                "L": 10724,
                "C": 10724,
                "Vol": 70
            },
            {
                "DateTime": "2019/7/10 15:07",
                "Date": "2019/7/10",
                "Time": "15:07:51",
                "O": 10724,
                "H": 10725,
                "L": 10724,
                "C": 10724,
                "Vol": 38
            },
            {
                "DateTime": "2019/7/10 15:08",
                "Date": "2019/7/10",
                "Time": "15:08:57",
                "O": 10725,
                "H": 10725,
                "L": 10725,
                "C": 10725,
                "Vol": 58
            },
            {
                "DateTime": "2019/7/10 15:09",
                "Date": "2019/7/10",
                "Time": "15:09:51",
                "O": 10725,
                "H": 10726,
                "L": 10725,
                "C": 10725,
                "Vol": 88
            },
            {
                "DateTime": "2019/7/10 15:10",
                "Date": "2019/7/10",
                "Time": "15:10:48",
                "O": 10726,
                "H": 10727,
                "L": 10725,
                "C": 10727,
                "Vol": 50
            },
            {
                "DateTime": "2019/7/10 15:11",
                "Date": "2019/7/10",
                "Time": "15:11:58",
                "O": 10727,
                "H": 10727,
                "L": 10726,
                "C": 10726,
                "Vol": 38
            },
            {
                "DateTime": "2019/7/10 15:12",
                "Date": "2019/7/10",
                "Time": "15:12:59",
                "O": 10726,
                "H": 10726,
                "L": 10725,
                "C": 10726,
                "Vol": 114
            },
            // {
            //     "DateTime": "2019/7/10 15:13",
            //     "Date": "2019/7/10",
            //     "Time": "15:13:55",
            //     "O": 10727,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10728,
            //     "Vol": 62
            // },
            // {
            //     "DateTime": "2019/7/10 15:14",
            //     "Date": "2019/7/10",
            //     "Time": "15:14:58",
            //     "O": 10728,
            //     "H": 10729,
            //     "L": 10725,
            //     "C": 10726,
            //     "Vol": 198
            // },
            // {
            //     "DateTime": "2019/7/10 15:15",
            //     "Date": "2019/7/10",
            //     "Time": "15:15:57",
            //     "O": 10726,
            //     "H": 10726,
            //     "L": 10725,
            //     "C": 10726,
            //     "Vol": 14
            // },
            // {
            //     "DateTime": "2019/7/10 15:16",
            //     "Date": "2019/7/10",
            //     "Time": "15:16:26",
            //     "O": 10726,
            //     "H": 10728,
            //     "L": 10726,
            //     "C": 10727,
            //     "Vol": 68
            // },
            // {
            //     "DateTime": "2019/7/10 15:17",
            //     "Date": "2019/7/10",
            //     "Time": "15:17:53",
            //     "O": 10728,
            //     "H": 10728,
            //     "L": 10728,
            //     "C": 10728,
            //     "Vol": 14
            // },
            // {
            //     "DateTime": "2019/7/10 15:18",
            //     "Date": "2019/7/10",
            //     "Time": "15:18:53",
            //     "O": 10728,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10727,
            //     "Vol": 84
            // },
            // {
            //     "DateTime": "2019/7/10 15:19",
            //     "Date": "2019/7/10",
            //     "Time": "15:19:59",
            //     "O": 10727,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10728,
            //     "Vol": 46
            // },
            // {
            //     "DateTime": "2019/7/10 15:20",
            //     "Date": "2019/7/10",
            //     "Time": "15:20:58",
            //     "O": 10728,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10728,
            //     "Vol": 52
            // },
            // {
            //     "DateTime": "2019/7/10 15:21",
            //     "Date": "2019/7/10",
            //     "Time": "15:21:54",
            //     "O": 10728,
            //     "H": 10730,
            //     "L": 10727,
            //     "C": 10730,
            //     "Vol": 94
            // },
            // {
            //     "DateTime": "2019/7/10 15:22",
            //     "Date": "2019/7/10",
            //     "Time": "15:22:53",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10729,
            //     "C": 10729,
            //     "Vol": 124
            // },
            // {
            //     "DateTime": "2019/7/10 15:23",
            //     "Date": "2019/7/10",
            //     "Time": "15:23:59",
            //     "O": 10729,
            //     "H": 10729,
            //     "L": 10728,
            //     "C": 10728,
            //     "Vol": 40
            // },
            // {
            //     "DateTime": "2019/7/10 15:24",
            //     "Date": "2019/7/10",
            //     "Time": "15:24:49",
            //     "O": 10728,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10728,
            //     "Vol": 16
            // },
            // {
            //     "DateTime": "2019/7/10 15:25",
            //     "Date": "2019/7/10",
            //     "Time": "15:25:47",
            //     "O": 10727,
            //     "H": 10727,
            //     "L": 10727,
            //     "C": 10727,
            //     "Vol": 62
            // },
            // {
            //     "DateTime": "2019/7/10 15:26",
            //     "Date": "2019/7/10",
            //     "Time": "15:26:59",
            //     "O": 10727,
            //     "H": 10727,
            //     "L": 10725,
            //     "C": 10726,
            //     "Vol": 152
            // },
            // {
            //     "DateTime": "2019/7/10 15:27",
            //     "Date": "2019/7/10",
            //     "Time": "15:27:44",
            //     "O": 10726,
            //     "H": 10727,
            //     "L": 10726,
            //     "C": 10726,
            //     "Vol": 62
            // },
            // {
            //     "DateTime": "2019/7/10 15:28",
            //     "Date": "2019/7/10",
            //     "Time": "15:28:41",
            //     "O": 10726,
            //     "H": 10728,
            //     "L": 10726,
            //     "C": 10727,
            //     "Vol": 138
            // },
            // {
            //     "DateTime": "2019/7/10 15:29",
            //     "Date": "2019/7/10",
            //     "Time": "15:29:52",
            //     "O": 10727,
            //     "H": 10727,
            //     "L": 10727,
            //     "C": 10727,
            //     "Vol": 32
            // },
            // {
            //     "DateTime": "2019/7/10 15:30",
            //     "Date": "2019/7/10",
            //     "Time": "15:30:49",
            //     "O": 10728,
            //     "H": 10728,
            //     "L": 10725,
            //     "C": 10725,
            //     "Vol": 160
            // },
            // {
            //     "DateTime": "2019/7/10 15:31",
            //     "Date": "2019/7/10",
            //     "Time": "15:31:56",
            //     "O": 10725,
            //     "H": 10727,
            //     "L": 10725,
            //     "C": 10727,
            //     "Vol": 40
            // },
            // {
            //     "DateTime": "2019/7/10 15:32",
            //     "Date": "2019/7/10",
            //     "Time": "15:32:57",
            //     "O": 10727,
            //     "H": 10727,
            //     "L": 10726,
            //     "C": 10726,
            //     "Vol": 18
            // },
            // {
            //     "DateTime": "2019/7/10 15:33",
            //     "Date": "2019/7/10",
            //     "Time": "15:33:54",
            //     "O": 10727,
            //     "H": 10727,
            //     "L": 10727,
            //     "C": 10727,
            //     "Vol": 14
            // },
            // {
            //     "DateTime": "2019/7/10 15:34",
            //     "Date": "2019/7/10",
            //     "Time": "15:34:53",
            //     "O": 10727,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10728,
            //     "Vol": 48
            // },
            // {
            //     "DateTime": "2019/7/10 15:35",
            //     "Date": "2019/7/10",
            //     "Time": "15:35:53",
            //     "O": 10728,
            //     "H": 10728,
            //     "L": 10727,
            //     "C": 10727,
            //     "Vol": 44
            // },
            // {
            //     "DateTime": "2019/7/10 15:36",
            //     "Date": "2019/7/10",
            //     "Time": "15:36:44",
            //     "O": 10728,
            //     "H": 10729,
            //     "L": 10728,
            //     "C": 10728,
            //     "Vol": 10
            // },
            // {
            //     "DateTime": "2019/7/10 15:37",
            //     "Date": "2019/7/10",
            //     "Time": "15:37:52",
            //     "O": 10729,
            //     "H": 10729,
            //     "L": 10728,
            //     "C": 10728,
            //     "Vol": 72
            // },
            // {
            //     "DateTime": "2019/7/10 15:38",
            //     "Date": "2019/7/10",
            //     "Time": "15:38:38",
            //     "O": 10728,
            //     "H": 10729,
            //     "L": 10728,
            //     "C": 10729,
            //     "Vol": 14
            // },
            // {
            //     "DateTime": "2019/7/10 15:39",
            //     "Date": "2019/7/10",
            //     "Time": "15:39:59",
            //     "O": 10729,
            //     "H": 10730,
            //     "L": 10728,
            //     "C": 10730,
            //     "Vol": 90
            // },
            // {
            //     "DateTime": "2019/7/10 15:40",
            //     "Date": "2019/7/10",
            //     "Time": "15:40:58",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 46
            // },
            // {
            //     "DateTime": "2019/7/10 15:41",
            //     "Date": "2019/7/10",
            //     "Time": "15:41:59",
            //     "O": 10731,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 80
            // },
            // {
            //     "DateTime": "2019/7/10 15:42",
            //     "Date": "2019/7/10",
            //     "Time": "15:42:56",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 30
            // },
            // {
            //     "DateTime": "2019/7/10 15:43",
            //     "Date": "2019/7/10",
            //     "Time": "15:43:51",
            //     "O": 10731,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 52
            // },
            // {
            //     "DateTime": "2019/7/10 15:44",
            //     "Date": "2019/7/10",
            //     "Time": "15:44:51",
            //     "O": 10731,
            //     "H": 10731,
            //     "L": 10731,
            //     "C": 10731,
            //     "Vol": 10
            // },
            // {
            //     "DateTime": "2019/7/10 15:45",
            //     "Date": "2019/7/10",
            //     "Time": "15:45:45",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10730,
            //     "Vol": 42
            // },
            // {
            //     "DateTime": "2019/7/10 15:46",
            //     "Date": "2019/7/10",
            //     "Time": "15:46:33",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10730,
            //     "C": 10730,
            //     "Vol": 4
            // },
            // {
            //     "DateTime": "2019/7/10 15:47",
            //     "Date": "2019/7/10",
            //     "Time": "15:47:48",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 8
            // },
            // {
            //     "DateTime": "2019/7/10 15:48",
            //     "Date": "2019/7/10",
            //     "Time": "15:48:57",
            //     "O": 10731,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 12
            // },
            // {
            //     "DateTime": "2019/7/10 15:49",
            //     "Date": "2019/7/10",
            //     "Time": "15:49:52",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 14
            // },
            // {
            //     "DateTime": "2019/7/10 15:50",
            //     "Date": "2019/7/10",
            //     "Time": "15:50:55",
            //     "O": 10731,
            //     "H": 10732,
            //     "L": 10731,
            //     "C": 10731,
            //     "Vol": 80
            // },
            // {
            //     "DateTime": "2019/7/10 15:52",
            //     "Date": "2019/7/10",
            //     "Time": "15:52:32",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10730,
            //     "C": 10730,
            //     "Vol": 4
            // },
            // {
            //     "DateTime": "2019/7/10 15:53",
            //     "Date": "2019/7/10",
            //     "Time": "15:53:31",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10730,
            //     "C": 10730,
            //     "Vol": 14
            // },
            // {
            //     "DateTime": "2019/7/10 15:54",
            //     "Date": "2019/7/10",
            //     "Time": "15:54:28",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10730,
            //     "C": 10730,
            //     "Vol": 46
            // },
            // {
            //     "DateTime": "2019/7/10 15:55",
            //     "Date": "2019/7/10",
            //     "Time": "15:55:34",
            //     "O": 10729,
            //     "H": 10729,
            //     "L": 10729,
            //     "C": 10729,
            //     "Vol": 18
            // },
            // {
            //     "DateTime": "2019/7/10 15:56",
            //     "Date": "2019/7/10",
            //     "Time": "15:56:36",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 28
            // },
            // {
            //     "DateTime": "2019/7/10 15:57",
            //     "Date": "2019/7/10",
            //     "Time": "15:57:45",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10730,
            //     "C": 10730,
            //     "Vol": 26
            // },
            // {
            //     "DateTime": "2019/7/10 15:58",
            //     "Date": "2019/7/10",
            //     "Time": "15:58:53",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10729,
            //     "C": 10729,
            //     "Vol": 26
            // },
            // {
            //     "DateTime": "2019/7/10 15:59",
            //     "Date": "2019/7/10",
            //     "Time": "15:59:28",
            //     "O": 10730,
            //     "H": 10730,
            //     "L": 10729,
            //     "C": 10729,
            //     "Vol": 24
            // },
            // {
            //     "DateTime": "2019/7/10 16:00",
            //     "Date": "2019/7/10",
            //     "Time": "16:00:57",
            //     "O": 10730,
            //     "H": 10731,
            //     "L": 10730,
            //     "C": 10731,
            //     "Vol": 36
            // },
            // {
            //     "DateTime": "2019/7/10 16:01",
            //     "Date": "2019/7/10",
            //     "Time": "16:01:37",
            //     "O": 10731,
            //     "H": 10731,
            //     "L": 10731,
            //     "C": 10731,
            //     "Vol": 26
            // },
            // {
            //     "DateTime": "2019/7/10 16:02",
            //     "Date": "2019/7/10",
            //     "Time": "16:02:59",
            //     "O": 10732,
            //     "H": 10732,
            //     "L": 10731,
            //     "C": 10732,
            //     "Vol": 104
            // },
            // {
            //     "DateTime": "2019/7/10 16:03",
            //     "Date": "2019/7/10",
            //     "Time": "16:03:57",
            //     "O": 10732,
            //     "H": 10733,
            //     "L": 10732,
            //     "C": 10733,
            //     "Vol": 72
            // },
            // {
            //     "DateTime": "2019/7/10 16:04",
            //     "Date": "2019/7/10",
            //     "Time": "16:04:52",
            //     "O": 10733,
            //     "H": 10733,
            //     "L": 10732,
            //     "C": 10732,
            //     "Vol": 62
            // },
            // {
            //     "DateTime": "2019/7/10 16:05",
            //     "Date": "2019/7/10",
            //     "Time": "16:05:44",
            //     "O": 10732,
            //     "H": 10733,
            //     "L": 10732,
            //     "C": 10732,
            //     "Vol": 26
            // },
            // {
            //     "DateTime": "2019/7/10 16:06",
            //     "Date": "2019/7/10",
            //     "Time": "16:06:58",
            //     "O": 10732,
            //     "H": 10734,
            //     "L": 10732,
            //     "C": 10733,
            //     "Vol": 40
            // },
            // {
            //     "DateTime": "2019/7/10 16:07",
            //     "Date": "2019/7/10",
            //     "Time": "16:07:54",
            //     "O": 10734,
            //     "H": 10734,
            //     "L": 10733,
            //     "C": 10733,
            //     "Vol": 90
            // },
            // {
            //     "DateTime": "2019/7/10 16:08",
            //     "Date": "2019/7/10",
            //     "Time": "16:08:58",
            //     "O": 10733,
            //     "H": 10734,
            //     "L": 10733,
            //     "C": 10734,
            //     "Vol": 56
            // },
            // {
            //     "DateTime": "2019/7/10 16:09",
            //     "Date": "2019/7/10",
            //     "Time": "16:09:54",
            //     "O": 10734,
            //     "H": 10735,
            //     "L": 10734,
            //     "C": 10734,
            //     "Vol": 132
            // },
            // {
            //     "DateTime": "2019/7/10 16:10",
            //     "Date": "2019/7/10",
            //     "Time": "16:10:59",
            //     "O": 10734,
            //     "H": 10734,
            //     "L": 10733,
            //     "C": 10734,
            //     "Vol": 48
            // },
            // {
            //     "DateTime": "2019/7/10 16:11",
            //     "Date": "2019/7/10",
            //     "Time": "16:11:46",
            //     "O": 10734,
            //     "H": 10734,
            //     "L": 10733,
            //     "C": 10733,
            //     "Vol": 18
            // },
            // {
            //     "DateTime": "2019/7/10 16:12",
            //     "Date": "2019/7/10",
            //     "Time": "16:12:54",
            //     "O": 10733,
            //     "H": 10733,
            //     "L": 10733,
            //     "C": 10733,
            //     "Vol": 12
            // },
            // {
            //     "DateTime": "2019/7/10 16:13",
            //     "Date": "2019/7/10",
            //     "Time": "16:13:10",
            //     "O": 10733,
            //     "H": 10733,
            //     "L": 10733,
            //     "C": 10733,
            //     "Vol": 2
            // },
            // {
            //     "DateTime": "2019/7/10 16:14",
            //     "Date": "2019/7/10",
            //     "Time": "16:14:20",
            //     "O": 10733,
            //     "H": 10734,
            //     "L": 10733,
            //     "C": 10733,
            //     "Vol": 32
            // },
            // {
            //     "DateTime": "2019/7/10 16:15",
            //     "Date": "2019/7/10",
            //     "Time": "16:15:52",
            //     "O": 10733,
            //     "H": 10734,
            //     "L": 10733,
            //     "C": 10733,
            //     "Vol": 56
            // },
            // {
            //     "DateTime": "2019/7/10 16:16",
            //     "Date": "2019/7/10",
            //     "Time": "16:16:37",
            //     "O": 10734,
            //     "H": 10734,
            //     "L": 10734,
            //     "C": 10734,
            //     "Vol": 18
            // },
            // {
            //     "DateTime": "2019/7/10 16:17",
            //     "Date": "2019/7/10",
            //     "Time": "16:17:59",
            //     "O": 10734,
            //     "H": 10734,
            //     "L": 10734,
            //     "C": 10734,
            //     "Vol": 20
            // }
        ]
        let OHLCdata = [];
        let Voldata = [];
        let CategoryData = [];
        datas.map((item, index) => {
            let pushrow = [item.O, item.C, item.L, item.H, item.Vol]
            let pushVol = [index, item.Vol, item.C >= item.O ? 1 : -1];
            OHLCdata.push(pushrow);
            Voldata.push(pushVol)
            CategoryData.push(item.DateTime)
        })
        console.log(OHLCdata)
        console.log(Voldata)
        console.log(CategoryData)

        const calculateMA = (Count, data) => {
            let result = [];
            for (let i = 0, len = data.length; i < len; i++) {
                if (i < Count - 1) {
                    result.push('-');//跳過無法計算MA的點
                    continue;
                }
                let sum = 0;
                for (let j = 0; j < Count; j++) {
                    sum = sum + data[i - j][1];//Count個收盤價加總
                }
                result.push(+(sum / (Count)).toFixed(0));//Count個收盤價加總除Count
            }
            // console.log("result---")
            // console.log(result)
            return result;
        }
        let D = calculateMA(3, OHLCdata)
        // console.log(D)

        //--option
        let upColor = '#ec0000';
        let downColor = '#00da3c';

        let option = {
            //backgroundColor: '#21202D',
            animation: false,
            legend: {

                icon: 'circle',
                bottom: 10,
                left: 'center',
                data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30'],
                // tooltip: {
                //     formatter: function (param) {
                //         param = param[0];
                //         console.log(param);
                //         return [
                //             '日期時間: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                //             '開盤價: ' + param.data[0] + '<br/>',
                //             '收盤價: ' + param.data[1] + '<br/>',
                //             '最低價: ' + param.data[2] + '<br/>',
                //             '最高價: ' + param.data[3] + '<br/>'
                //         ].join('');
                //     }
                // }
            },
            tooltip: {

                trigger: 'axis',
                axisPointer: {
                    type: 'cross'

                },
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                    color: '#000'
                },
                position: function (pos, params, el, elRect, size) {
                    let obj = {top: 10};
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                    return obj;
                },


                // formatter: function (param) {
                //     param = param[0];
                //     console.log(param);
                //     return [
                //         '日期時間: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                //         '開盤價: ' + param.data[1] + '<br/>',
                //         '收盤價: ' + param.data[2] + '<br/>',
                //         '最低價: ' + param.data[3] + '<br/>',
                //         '最高價: ' + param.data[4] + '<br/>',
                //         '成交量: ' + param.value[1] + '<br/>'
                //     ].join('');
                //
                // },
                // extraCssText: 'width: 170px'
            },
            axisPointer: {

                link: {xAxisIndex: 'all'},
                label: {
                    backgroundColor: '#777'

                }
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        title: {
                            zoom: "局部放大",
                            back: "還原"
                        },
                        yAxisIndex: false
                    },
                    // brush: {
                    //     type: ['lineX', 'clear']
                    // }
                }
            },
            // brush: {
            //     xAxisIndex: 'all',
            //     brushLink: 'all',
            //     outOfBrush: {
            //         colorAlpha: 0.1
            //     }
            // },
            visualMap: {
                show: false,
                seriesIndex: 5,
                dimension: 2,
                pieces: [{
                    value: -1,
                    color: downColor
                }, {
                    value: 1,
                    color: upColor
                }]
            },
            grid: [
                {
                    left: '10%',
                    right: '8%',
                    height: '50%',
                },
                {
                    left: '10%',
                    right: '8%',
                    top: '70%',
                    height: '13%',
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    data: CategoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: {onZero: false},
                    splitLine: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisPointer: {
                        z: 100
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: CategoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: {onZero: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLabel: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax'

                }
            ],
            yAxis: [
                {
                    // splitNumber: 3,//網格線條條數(預設為5)，還是會隨實際情況調整
                    // minInterval:1,
                    min: (value) => {
                        return value.min - 5
                    },//設置Y軸最小值
                    max: (value) => {
                        return value.max + 5
                    },//設置Y軸最大值
                    scale: true,//設置成 true 後坐標刻度不會強制包含零刻度。在雙數值軸的散點圖中比較有用。
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['#333333']
                        }
                    },
                    splitLine: {
                        show: true,

                        // interval:20,
                        lineStyle: {
                            //網格線條設置
                            color: '#777'
                        }
                    },

                },
                {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 2,
                    axisLabel: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false}
                }
            ],
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: [0, 1],//要連動的X軸 index
                    start: 50,
                    end: 100,

                },
                {
                    //拖曳欄
                    // backgroundColor: '#21202D',
                    show: true,
                    xAxisIndex: [0, 1],//要連動的X軸 index
                    type: 'slider',
                    top: '85%',
                    start: 50,
                    end: 100
                },
            ],
            series: [
                {
                    name: 'Dow-Jones index',
                    type: 'candlestick',
                    data: OHLCdata,
                    itemStyle: {

                        normal: {
                            areaColor: "#777",
                            color: upColor,
                            color0: downColor,
                            borderColor: null,
                            borderColor0: null,

                        }
                    },

                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5, OHLCdata),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10, OHLCdata),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: calculateMA(20, OHLCdata),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30, OHLCdata),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'Volume',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: Voldata
                }
            ]
        }


        //--
        let myChart = echarts.init(document.getElementById("main"), 'dark');
        myChart.setOption(option, true);
        const redrow = () => {
            myChart.setOption(option, true);
        }
        myChart.dispatchAction({
            type: 'brush',
            areas: [
                {
                    brushType: 'lineX',
                    coordRange: ['2019/7/10 15:57', '2019/7/10 16:16'],
                    xAxisIndex: 0
                }
            ]
        });

//------------------------------------------------

    }, [])


    const [state, setState] = useState({width: "500px", height: "500px"});
    useEffect(() => {
        let myChart = echarts.init(document.getElementById("main"), 'dark');
        myChart.resize({width: state.width, height: state.height})
    }, [state]);
    const drawresize = () => {
        let width = document.getElementById("FuturesTradecontent").offsetWidth;
        let height = document.getElementById("FuturesTradecontent").offsetHeight;
        console.log(width);
        console.log(height);
        setState({...state, width: width,height:height});
    }
    return (
        <React.Fragment>
            <div id={"main"} style={state}></div>
            <button style={state} onClick={drawresize}></button>

        </React.Fragment>
    )
}
