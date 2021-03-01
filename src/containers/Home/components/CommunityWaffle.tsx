import React, { useRef, useLayoutEffect } from 'react';
import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import axios from 'axios'
import Card from 'react-bootstrap/Card';

am4core.useTheme(am4themes_animated);

function WaffleProportion(n: Number, m: Number){
  var data1 = []
  var data2 = []
  var x_val = n.valueOf();
  var y_val = m.valueOf();
  var tot = x_val + y_val;
  var num1 = x_val / tot;
  var num2 = 1 - num1;

  var s1 = (num1 * 100).toFixed();
  var s2 = (num2 * 100).toFixed();

  var r1 = parseInt(s1);
  var r2 = parseInt(s2);

  var row = 1
  var col = 1

  for (let i = 0; i < r1; i++) {
    var x_str = row.toString();
    var y_str = col.toString();
    data1.push({ x: x_str, y: y_str});
    if(col == 10){
      row = row + 1;
      col = 1
    } else {
      col = col + 1
    }
  }

  for (let i = r1; i < 100; i++) {
    var x_str = row.toString();
    var y_str = col.toString();
    data2.push({ x: x_str, y: y_str});
    if(col == 10){
      row = row + 1;
      col = 1
    } else {
      col = col + 1
    }
  }

  return([data1, data2]);
}

function CommunityWaffle(props) {
  const chart = useRef(null);

  var rs = 3600
  var nrs = 6400

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    x.paddingRight = 20;
    x.paddingLeft = 20;

    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Chart
let chart = am4core.create( "chartdiv", am4charts.XYChart );
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
//chart.colors.step = 2;
chart.colors.list = [am4core.color( "#98a2df" ), am4core.color( "#e96b6a" ), am4core.color("#a2df98")]

// X axis
let xAxis = chart.xAxes.push( new am4charts.CategoryAxis() );
xAxis.dataFields.category = "x";
xAxis.renderer.grid.template.location = 0;
xAxis.renderer.minGridDistance = 10;
xAxis.renderer.labels.template.disabled = true;
xAxis.data = [{ x: "1" }, { x: "2" }, { x: "3" }, { x: "4" }, { x: "5" }, { x: "6" }, { x: "7" }, { x: "8" }, { x: "9" }, { x: "10" }];

// Y axis
let yAxis = chart.yAxes.push( new am4charts.CategoryAxis() );
yAxis.renderer.labels.template.disabled = true;
yAxis.renderer.grid.template.location = 0;
yAxis.renderer.minGridDistance = 10;
yAxis.dataFields.category = "y";
yAxis.data = [{ y: "1" }, { y: "2" }, { y: "3" }, { y: "4" }, { y: "5" }, { y: "6" }, { y: "7" }, { y: "8" }, { y: "9" }, { y: "10" }];

// Legend
chart.legend = new am4charts.Legend();
chart.legend.position = "right";
chart.legend.scrollable = true;
chart.legend.maxWidth = 200;
// Create series
function createSeries(name) {
  let series = chart.series.push( new am4charts.ColumnSeries() );
  series.dataFields.categoryX = "x";
  series.dataFields.categoryY = "y";
  series.sequencedInterpolation = true;
  series.defaultState.transitionDuration = 3000;
  series.name = name;


  // Set up column appearance
  let column = series.columns.template;
  column.strokeWidth = 1;
  column.strokeOpacity = 1;
  column.stroke = am4core.color( "#ffffff" );
  column.width = am4core.percent( 100 );
  column.height = am4core.percent( 100 );
  //column.column.cornerRadius(6, 6, 6, 6);
  
  return series;
}

let series1 = createSeries("Researchers");
series1.data = [
  { x: "1", y: "1" },
  { x: "1", y: "2" },
  { x: "1", y: "3" },
  { x: "1", y: "4" },
  { x: "1", y: "5" },
  { x: "1", y: "6" },
  { x: "1", y: "7" },
  { x: "1", y: "8" },
  { x: "1", y: "9" },
  { x: "1", y: "10" },
  
  { x: "2", y: "1" },
  { x: "2", y: "2" },
  { x: "2", y: "3" },
  { x: "2", y: "4" },
  { x: "2", y: "5" },
  { x: "2", y: "6" },
  { x: "2", y: "7" },
  { x: "2", y: "8" },
  { x: "2", y: "9" },
  { x: "2", y: "10" },
  
  { x: "3", y: "1" },
  { x: "3", y: "2" },
  { x: "3", y: "3" },
  { x: "3", y: "4" },
  { x: "3", y: "5" },
  { x: "3", y: "6" },
  { x: "3", y: "7" },
  { x: "3", y: "8" },
  { x: "3", y: "9" },
  { x: "3", y: "10" },

  { x: "4", y: "1" },
  { x: "4", y: "2" },
  { x: "4", y: "3" },
  { x: "4", y: "4" },
  { x: "4", y: "5" },
  { x: "4", y: "6" },

];

let series2 = createSeries("Non-Researchers");
series2.data = [
  
  { x: "4", y: "7" },
  { x: "4", y: "8" },
  { x: "4", y: "9" },
  { x: "4", y: "10" },
  
  { x: "5", y: "1" },
  { x: "5", y: "2" },
  { x: "5", y: "3" },
  { x: "5", y: "4" },
  { x: "5", y: "5" },
  { x: "5", y: "6" },
  { x: "5", y: "7" },
  { x: "5", y: "8" },
  { x: "5", y: "9" },
  { x: "5", y: "10" },

  { x: "6", y: "1" },
  { x: "6", y: "2" },
  { x: "6", y: "3" },
  { x: "6", y: "4" },
  { x: "6", y: "5" },
  { x: "6", y: "6" },
  { x: "6", y: "7" },
  { x: "6", y: "8" },
  { x: "6", y: "9" },
  { x: "6", y: "10" },

  { x: "7", y: "1" },
  { x: "7", y: "2" },
  { x: "7", y: "3" },
  { x: "7", y: "4" },
  { x: "7", y: "5" },
  { x: "7", y: "6" },
  { x: "7", y: "7" },
  { x: "7", y: "8" },
  { x: "7", y: "9" },
  { x: "7", y: "10" },

  { x: "8", y: "1" },
  { x: "8", y: "2" },
  { x: "8", y: "3" },
  { x: "8", y: "4" },
  { x: "8", y: "5" },
  { x: "8", y: "6" },
  { x: "8", y: "7" },
  { x: "8", y: "8" },
  { x: "8", y: "9" },
  { x: "8", y: "10" },

  { x: "9", y: "1" },
  { x: "9", y: "2" },
  { x: "9", y: "3" },
  { x: "9", y: "4" },
  { x: "9", y: "5" },
  { x: "9", y: "6" },
  { x: "9", y: "7" },
  { x: "9", y: "8" },
  { x: "9", y: "9" },
  { x: "9", y: "10" },

  { x: "10", y: "1" },
  { x: "10", y: "2" },
  { x: "10", y: "3" },
  { x: "10", y: "4" },
  { x: "10", y: "5" },
  { x: "10", y: "6" },
  { x: "10", y: "7" },
  { x: "10", y: "8" },
  { x: "10", y: "9" },
  { x: "10", y: "10" },
];

axios
.get(`http://localhost:4001/twitter/communityAll`)
.then(response => {
  // Update the books state
  var com = response.data;
  var coms:object[] = [];
  var num1 = new Number(0)
  num1 = com[com.length -1]['researchers']
  series1.name = "Researchers: " + num1.toString();

  var num2 = new Number(0)
  num2 = com[com.length -1]['non_researchers']
  series2.name = "Non-researchers: " + num2.toString();

  var datas = WaffleProportion(num1, num2);

  series1.data = datas[0];
  series2.data = datas[1];

})
.catch(error => console.error(`There was an error retrieving the user list: ${error}`))

  }, []);

  return (
    <div>
        <div id="chartdiv" style={{ width: "100%", height: "250px" }}></div>
    </div>
    
  );
}
export default CommunityWaffle;