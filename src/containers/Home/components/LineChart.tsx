import React, { useRef, useLayoutEffect } from 'react';
import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { ContactlessOutlined } from '@material-ui/icons';

am4core.useTheme(am4themes_animated);

function date_format(s: string) {
  s = s.substring(0, 10);
  s = s.replaceAll('/', '-');
  return s;
}

function LineChart(props) {
  const chart = useRef(null);

  var rs = 3600
  var nrs = 6400

  useLayoutEffect(() => {
    let x = am4core.create(props.id, am4charts.XYChart);

    x.paddingRight = 20;
    x.paddingLeft = 20;

    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Chart
let chart = am4core.create( props.id, am4charts.XYChart );

// Add data
chart.data = [ {
  "date": "2020-06-01",
  "value": 10000
}, {
  "date": "2020-06-10",
  "value": 10091
},
{
  "date": "2020-06-20",
  "value": 10514
},
{
  "date": "2020-07-01",
  "value": 11111
}, {
  "date": "2020-07-10",
  "value": 11138
},
{
  "date": "2020-07-20",
  "value": 13136
},
{
  "date": "2020-08-01",
  "value": 13204
}, {
  "date": "2020-08-10",
  "value": 13609
},
{
  "date": "2020-08-20",
  "value": 14609
},
{
  "date": "2020-09-01",
  "value": 16609
}, {
  "date": "2020-09-10",
  "value": 17111
},
{
  "date": "2020-09-20",
  "value": 17911
},
   ];

//Update data
var com = props.data;
var coms:object[] = [];
for (let i = 0; i < com.length; i++){
  coms.push({"date": date_format(com[i]['timestamp']),
               "value": com[i][props.dv]})
}
chart.data = coms

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 50;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Followers"

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.tooltipText = "{valueY}";
series.strokeWidth = 3;
series.fillOpacity = 0.5;
series.minBulletDistance = 15;

// Add vertical scrollbar
// chart.scrollbarY = new am4core.Scrollbar();
//chart.scrollbarY.marginLeft = 0;

// Add cursor
chart.cursor = new am4charts.XYCursor();
valueAxis.cursorTooltipEnabled = false;
//chart.cursor.behavior = "zoomY";
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;



// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";

// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;


  }, []);

  return (
    <div>
        <div id={props.id} style={{ width: "75%", height: "300px" }}></div>
    </div>
    
  );
  
  }; // end am4core.ready()

export default LineChart;