import React, { useRef, useLayoutEffect, useState } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import './chart.css';
import Popover from 'react-bootstrap/Popover'
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

var user_id = "634739719";

am4core.useTheme(am4themes_animated);
am4core.options.autoDispose = true;

const tweetpop = {
  width: '400px',
  maxWidth: 'none',
  height: '600px',
  maxHeight: '600px'
  
};

const rcheck = {
  color: '#9EFA99',
  backgroundColor: '#9EFA99'

}

const Check = styled.p`
    &&& {
    padding: .05em;
    font-size: 24px;
}`

function Pop(data){
  return(

  <div>
    <Popover id="popover-basic" placement="top" style={tweetpop}>
      <Popover.Title>Sample Audience</Popover.Title>
      <Popover.Content>
          {data}
      </Popover.Content>
    </Popover>
  </div>

  )
}


function organizeData(data, num, active, series_dict){
  var new_data = []
  var num_coms = 0
  for (const key in active){
    if (active[key]){
      num_coms++
    }
  }
  if (num_coms > 0){
    num = Math.round(num / num_coms)
  }
  
  for (const key in data){
    if (!active[key]){
      continue
    }
    //console.log("Organizing")
    var i = 0
    for (const n in data[key]){
      i = i + 1
      if (i >= Object.keys(data[key]).length - num){
        new_data.push({"name": String(n),
                     "value": data[key][n]["number"],
                    "color": series_dict[key]['col'],
                    "sample": data[key][n]["audience_sample"]})
      }
      
    }
  }
  //console.log(new_data)
  return (new_data)
}

function makeAudList(audience) {
  var div = document.createElement("div")
  for (var i = 0; i < audience.length; i++) {
    
    var h = document.createElement("h4")
    var node = document.createTextNode(audience[i]["name"])
    h.append(node)

    var hsub = document.createElement("h5")
  
    var anchor = document.createElement("a")
    node = document.createTextNode(audience[i]["id_text"])
    anchor.append(node)
    anchor.href = "https://www.twitter.com/i/user/" + audience[i]["id_text"]
    anchor.target = "_blank"
    anchor.rel = "noopener noreferrer"
    hsub.append(anchor)

    var p = document.createElement("p")
    node = document.createTextNode(audience[i]["bio"]);

    p.appendChild(node)
    div.append(h)
    div.append(hsub)
    div.append(p)
  };
  return div
};

function displayPopup(chart, audience) {
  
  chart.closeAllPopups();
 
  var g = makeAudList(audience)
  var gs = g.outerHTML;
  chart.openPopup(gs, "Sample users");
}

function BubbleChart(props) {
  const full_data = props.data
  const [activeComs, setActiveComs] = useState({"r": true, "p": true, "o": true})

  //const [isLoading, setLoading] = useState(true);
  //const [audience, setAudience] = useState([]);
  var series_dict = props.series_dict

  const setState = (key) => {
    var state = {"r": activeComs["r"], "p": activeComs["p"], "o": activeComs["o"]}
    state[key] = !state[key]
    setActiveComs(state)
  }
  /*
  var ids = []

  for (var key in full_data){
    for (var word in full_data[key]){
      console.log(full_data[key][word]["audience_sample"])
      ids.push(...full_data[key][word]["audience_sample"])
    }
  }
  console.log("ids:")
  console.log(ids)
  */

  useLayoutEffect(() => {

    //chart.paddingRight = 20;
    //chart.paddingLeft = 20;

    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var data0 = props.data

// Chart
//if (chart !== undefined) {chart.dispose()}
let chart = am4core.create(props.divid, am4plugins_forceDirected.ForceDirectedTree); 
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

console.log(chart.popups.template)

/*series.colors.list = [am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000"),
                      am4core.color("#000000")];
series.colors.wrap = false;
*/
series.dataFields.color = "color";
// Set data
series.data = [{
  "name": "First",
  "value": 190,
  "color": am4core.color("#000000")
}, {
  "name": "Second",
  "value": 289,
  "color": am4core.color("#000000")
}, {
  "name": "Third",
  "value": 635,
  "color": am4core.color("#000000")
}, {
  "name": "Fourth",
  "value": 732,
  "color": am4core.color("#000000")
}, {
  "name": "Fifth",
  "value": 835,
  "color": am4core.color("#000000")
}, {
  "name": "First",
  "value": 190,
  "color": am4core.color("#9efa99")
}, {
  "name": "Second",
  "value": 289,
  "color": am4core.color("#9efa99")
}, {
  "name": "Third",
  "value": 635,
  "color": am4core.color("#9efa99")
}, {
  "name": "Fourth",
  "value": 732,
  "color": am4core.color("#9efa99")
}, {
  "name": "Fifth",
  "value": 835,
  "color": am4core.color("#9efa99")
}]

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";

// Add labels
series.nodes.template.label.text = "{name}";
series.nodes.template.label.fill = am4core.color("#000000")
series.fontSize = 10;
series.minRadius = 5;
series.maxRadius = 40;

series.manyBodyStrength = -8;
series.links.template.distance = 2;
series.links.template.strength = 2;

//chart.cursorOverStyle = am4core.MouseCursorStyle.grab;
series.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.grab;
series.cursorOverStyle = am4core.MouseCursorStyle.grab;

series.nodes.template.tooltipText = "{name}: {value}";
series.nodes.template.events.on("hit", function(ev) {
  var ids = ev.target.dataItem.dataContext['sample']
  axios
        .get(`http://localhost:4001/twitter/audienceWhereIDs/${ids}`)
        .then(response => {
          displayPopup(chart, response.data)
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));
  /*chart.modal.close();
 
  // get object info
  console.log(ev.target.dataItem.dataContext['sample']);
  //chart.openModal(ev.target.dataItem.dataContext['sample']);
  //chart.openModal("<div>This is a <strong>strong</strong></div>");
  var g = makeAudList([])
  var gs = g.outerHTML;
  chart.openModal(gs);*/
});

series.data = organizeData(props.data, 60, activeComs, series_dict)


  }, [activeComs]);

  return (
    <div>
        <div id={props.divid} style={{ width: "100%", height: "500px" }}></div>
        <Checkbox
        icon={<Icon.FiCheck color="#000000" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value) => {setState("r")}}
        borderColor="#9EFA99"
        borderWidth='3'
        style={{ cursor: "pointer" }}
        labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: "18px"}}
        label="Researchers"
      />
      <Checkbox
        icon={<Icon.FiCheck color="#000000" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value) => {setState("p")}}
        borderColor="#FA999E"
        borderWidth='3'
        style={{ cursor: "pointer" }}
        labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: "18px" }}
        label="Practitioners"
      />
      <Checkbox
        icon={<Icon.FiCheck color="#000000" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value) => {setState("o")}}
        borderColor="#999EFA"
        borderWidth='3'
        style={{ cursor: "pointer" }}
        labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: "18px" }}
        label="Other Publics"
      />
    </div>
    
  );
}
export default BubbleChart;