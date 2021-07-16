import React, { useRef, useLayoutEffect } from 'react';
import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import qtip from './q.jpg'
import rsq from './images/r_square.jpg'
import psq from './images/p_square.jpg'
import osq from './images/o_square.jpg'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

var user_id = "634739719";

am4core.useTheme(am4themes_animated);

/*
var rd_grad = new am4core.LinearGradient();
rd_grad.addColor(am4core.color("#9EFA99"));
rd_grad.addColor(am4core.color("#7BD2FA"));
rd_grad.rotation = 45


var rs_grad = new am4core.LinearGradient();
rs_grad.addColor(am4core.color("#FA5F3A"));
rs_grad.addColor(am4core.color("#9EFA99"));
rs_grad.rotation = 45

var ds_grad = new am4core.LinearGradient();
ds_grad.addColor(am4core.color("#7BD2FA"));
ds_grad.addColor(am4core.color("#FA5F3A"));
ds_grad.rotation = 45

var rds_grad = new am4core.LinearGradient();
rds_grad.addColor(am4core.color("#9EFA99"));
rds_grad.addColor(am4core.color("#7BD2FA"));
rds_grad.addColor(am4core.color("#FA5F3A"));
rds_grad.rotation = 45

const series_dict = {
  r: {col: am4core.color( "#9EFA99" ),
        name: "Researchers"
       },
  d: {col: am4core.color( "#7BD2FA" ),
       name: "Designers"
      },
  s: {col: am4core.color( "#FA5F3A" ),
       name: "Software Engineers"
      },
  o: {col: am4core.color( "#FA9810" ),
  name: "Other Publics"
 },
  rd: {col: rd_grad,
  name: "Researcher/Designers"
 },
 rs: {col: rs_grad,
  name: "Researcher/Engineers"
 },
 ds: {col: ds_grad,
  name: "Designer/Engineers"
 },
 rds: {col: rds_grad,
  name: "Researcher/Designer/Engineers"
 },
}
*/

function renderTooltip(text){
  return(
  <Tooltip id="button-tooltip">
    {text}
  </Tooltip>
  )
}

function toolTrigger(text){
  return(<OverlayTrigger
    placement="right"
    delay={{ show: 100, hide: 100 }}
    overlay={renderTooltip(text)}
  >
    <img width = "20px" src = {qtip} />
  </OverlayTrigger>
  )
}

const tweetpop = {
  width: '275px',
  maxWidth: '275px',
  maxHeight: '400px',
  'overflow-y': 'auto'
  
};

const Legend = styled.table `{
  border-spacing: 50px;
  border-collapse: collapse;
  width: 200px;
  margin-left: 20px; 
  margin-right:auto;
}`

const Ltr = styled.tr `{
  padding: 8px;
}`

const pract_explanation = "'Practitioners' currently includes software engineers and designers. Future updates may include additional practitioners groups relevant to HCI, such as teachers, healthcare providers, etc."


function CustomLegend() {
  return(
    <Legend>
      <tbody>
      <Ltr>
        <td><img width = "25px" src = {rsq}/></td>
        <td>Researchers</td>
      </Ltr>
      <Ltr>
        <td><img width = "25px" src = {psq}/></td>
        <td>Practitioners {toolTrigger(pract_explanation)}</td>
      </Ltr>
      <Ltr>
        <td><img width = "25px" src = {osq}/></td>
        <td>Other Publics</td>
      </Ltr>
      </tbody>
    </Legend>
  )
}

function CalculateCols(nums: number[], num_cols: number, denom) {

  var tot_squares = 0
  for (var i = 0; i < nums.length; i++){
    tot_squares = tot_squares + Math.round(nums[i] / denom)
  }

  var num2 = Math.floor(Math.sqrt(tot_squares)) + 1
  var num2_cols = num2

  num_cols = Math.max(num_cols, num2_cols)
  
  return num_cols
}

function CalculateRows(nums: number[], num_rows: number, denom) {

  var tot_squares = 0
  for (var i = 0; i < nums.length; i++){
    tot_squares = tot_squares + Math.round(nums[i] / denom)
  }

  var num2 = Math.floor(Math.sqrt(tot_squares)) + 1
  var num2_rows = num2 + 1

  num_rows = Math.max(num_rows, num2_rows)
  
  return num_rows
}

function CalculateData(nums: number[], num_cols: number, num_rows: number, denom) {
  var data_list = []

  //actually need to calculate the number of rows, since we get them in reverse order
  /*
  var num_rows = 0
  for (var i = 0; i < nums.length; i++){
    var m = Math.round(nums[i] / denom)
    num_rows = num_rows + m
  }

  num_rows = Math.ceil(num_rows / num_cols)
  */

  var cur_col = 1
  var cur_row = 1

  /*
  var tot_squares = 0
  for (var i = 0; i < nums.length; i++){
    tot_squares = tot_squares + Math.round(nums[i] / denom)
  }

  var num2 = Math.floor(Math.sqrt(tot_squares)) + 1
  var num2_cols = num2
  var num2_rows = num2 + 1

  num_cols = Math.max(num_cols, num2_cols)
  num_rows = Math.max(num_rows, num2_rows)
  console.log(num_cols)
  console.log(num2_cols)
  */

  var new_yaxis = [{y: num_rows.toString()}]

  for (var i = num_rows; i > 0; i--){
    new_yaxis.push({y: i.toString()})
  }

  for (var i = 0; i < nums.length; i++){
    var m = Math.round(nums[i] / denom)

    var cur_data = [] 

    for (var j = 0; j < m; j++) {
      var col = cur_col.toString()
      var row = cur_row.toString()
      cur_data.push({x: col, y: row})
      cur_col = cur_col + 1
      if (cur_col > num_cols){
        cur_col = 1
        cur_row = cur_row + 1
        new_yaxis.push({y: cur_row.toString()})
      }

    }

    data_list.push(cur_data)

  }

  data_list.push(new_yaxis)
  console.log(data_list)

  return data_list

}

function IconArray(props) {

  useLayoutEffect(() => {

    var rp_grad = new am4core.LinearGradient();
    rp_grad.addColor(am4core.color("#66c2a5"));
    rp_grad.addColor(am4core.color("#fc8d62"));

const series_dict0 = {
  r: {col: am4core.color( "#66c2a5" ),
        name: "Researchers"
       },
  rp: {col: rp_grad,
        name: "Researcher/Practitioners"
       },
  p: {col: am4core.color( "#fc8d62" ),
       name: "Practitioners"
      },
  o: {col: am4core.color( "#8da0cb" ),
  name: "Other Publics"
 }
}

    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var data0 = props.data

const series_dict = props.series_dict

// Chart
var chart = am4core.create( props.divid, am4charts.XYChart );
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
//chart.colors.step = 2;
//chart.colors.list = [am4core.color( "#9EFA99" ), am4core.color( "#7BD2FA" ), am4core.color("#DB6EF0"), am4core.color("#FA9810")]

// X axis
var xAxis = chart.xAxes.push( new am4charts.CategoryAxis() );
xAxis.dataFields.category = "x";
xAxis.renderer.grid.template.disabled = true;
xAxis.renderer.minGridDistance = 10;
xAxis.renderer.labels.template.disabled = true;

// Y axis
var yAxis = chart.yAxes.push( new am4charts.CategoryAxis() );
yAxis.renderer.labels.template.disabled = true;
yAxis.renderer.grid.template.disabled = true;
yAxis.renderer.minGridDistance = 10;
yAxis.dataFields.category = "y";

// Legend
//chart.legend = new am4charts.Legend();

chart.tooltip.getFillFromObject = false;
chart.tooltip.background.fill = am4core.color("#67b7dc");

// Create series
function createSeries(key, hidden) {
  var series = chart.series.push( new am4charts.ColumnSeries() );
  series.dataFields.categoryX = "x";
  series.dataFields.categoryY = "y";
  series.sequencedInterpolation = true;
  series.defaultState.transitionDuration = 3000;
  series.name = series_dict0[key]["name"];
  series.hiddenInLegend = hidden;
  
  var tool_text = series.name
  tool_text = tool_text + ": "
  tool_text = tool_text + data0[key].toString()
  
  series.tooltipText = tool_text
  series.tooltipPosition = "pointer"


  // Set up column appearance
  var column = series.columns.template;
  column.strokeWidth = 1;
  column.strokeOpacity = 1;
  column.stroke = am4core.color( "#ffffff" );
  column.width = am4core.percent( 90 );
  column.height = am4core.percent( 90 );
  //series.columns.template.fill = series_dict[key]['col'];
  column.fill = series_dict0[key]['col'];

  column.events.on("hit", function(ev) {
    var info = ev.target.realFill
  })
  
  return series;
}

let series_list = [];
let num_list = []


//actually, we gotta put these in the right order
if ("r" in data0){
  series_list.push(createSeries("r", false))
  num_list.push(data0["r"])
}
if ("rp" in data0){
  series_list.push(createSeries("rp", true))
  num_list.push(data0["rp"])
}
if ("p" in data0){
  series_list.push(createSeries("p", false))
  num_list.push(data0["p"])
}
if ("o" in data0){
  series_list.push(createSeries("o", false))
  num_list.push(data0["o"])
}


var num_cols = props.cols
var num_rows = props.rows

num_cols = CalculateCols(num_list, num_cols, props.denom)
num_rows = CalculateRows(num_list, num_rows, props.denom)

var new_xaxis = []
for (var i = 1; i <= num_cols; i++){
  new_xaxis.push({x: i.toString()})

}

var datas = CalculateData(num_list, num_cols, num_rows, props.denom)


for (var i = 0; i < series_list.length; i++){
  series_list[i].data = datas[i]
}


xAxis.data = new_xaxis
yAxis.data = datas[series_list.length]


  }, []);

  return (
    <div>
        <div id={props.divid} style={{ width: "100%", height: "500px" }}></div>
    </div>
    
  );
}
export default IconArray;