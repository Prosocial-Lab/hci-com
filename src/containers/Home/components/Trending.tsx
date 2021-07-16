import React, { useRef, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import axios from 'axios'
import { Tweet} from 'react-twitter-widgets'
import PopoverContent from 'react-bootstrap/esm/PopoverContent';

const TrendTable = styled.table`
&&& {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 275px;
}`

const TrendTd = styled.td`{
  text-align: left;
  padding: 8px;
}`

const TrendNum = styled.td`{
  text-align: right;
  padding: 8px;
  width: 35%;
}`

const TrendTrGray = styled.tr `{
  background-color: #dddddd;
}`

const Pop = styled.button `{
  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;
  color:blue;
}`

const tweetpop = {
  width: '600px',
  maxWidth: 'none',
  maxHeight: '500px',
  'overflow-y': 'auto'
  
};

am4core.useTheme(am4themes_animated);

var rp_grad = new am4core.LinearGradient();
rp_grad.addColor(am4core.color("#9EFA99"));
rp_grad.addColor(am4core.color("#FA999E"));

const series_dict = {
  r: {col: am4core.color( "#9EFA99" ),
        name: "Researchers"
       },
  rp: {col: rp_grad,
        name: "Researcher/Practitioners"
       },
  p: {col: am4core.color( "#FA999E" ),
       name: "Practitioners"
      },
  o: {col: am4core.color( "#999EFA" ),
  name: "Other Publics"
 }
}

function compare( a, b ) {
  if ( a.value < b.value ){
    return -1;
  }
  if ( a.value > b.value ){
    return 1;
  }
  return 0;
}


function organizeData(data, num, active){
  var new_data = []

  
  for (const key in data){
    if (!active[key]){
      continue
    }

    for (const n in data[key]){
      new_data.push({"name": String(n),
                     "value": data[key][n]["num"],
                    "color": series_dict[key]['col'],
                    "sample": data[key][n]["tweets"]})
      
    }
  }
  new_data.sort(compare)
  if (new_data.length > num){
    new_data = new_data.slice(-num)
  }
  return (new_data)
}

function PopFollowers(text, tweets) {
  return (
  <OverlayTrigger trigger="click" placement="left" overlay={TweetPop(tweets)}>
  <Pop>{text}</Pop>
    
  </OverlayTrigger>
  )
};

function TweetPop(tweet_ids){
  var tweets = []
  for (var i = 0; i < tweet_ids.length; i++){
    tweets.push(<Tweet tweetId={tweet_ids[i]} options={{ width: "90%", cards: "hidden" }}/>)
  }
  return(
  <div>
    <Popover id="popover-basic" placement="bottom" style={tweetpop}>
      <Popover.Title>Sample Tweets</Popover.Title>
      <Popover.Content>
        {tweets}
      </Popover.Content>
    </Popover>
  </div>
  )
}

// !!! the users' tweet and user id JSONs need to be strings, otherwise they get fucked by js
// need to edit the backend to fix this
function renderTrendRow(data, gray){
  var text = ""
  text = String(data.value) + " tweets"
  if (gray){
    return (
      <TrendTrGray>
    <TrendTd>{data.name}</TrendTd>
    <TrendNum>{PopFollowers(text, data.sample)}</TrendNum>
  </TrendTrGray>
    )
  } else {
  return(
    <tr>
    <TrendTd>{data.name}</TrendTd>
    <TrendNum>{PopFollowers(text, data.sample)}</TrendNum>
  </tr>
  )
  }
}

function renderEmptyRow(gray){
  if (gray){
    return (
      <TrendTrGray>
    <TrendTd>_____</TrendTd>
    <TrendNum>___</TrendNum>
  </TrendTrGray>
    )
  } else {
  return(
    <tr>
    <TrendTd>_____</TrendTd>
    <TrendNum>___</TrendNum>
  </tr>
  )
  }
}

function renderTrendTable(data){
  const rrows = []
  const prows = []
  const orows = []
  for (const key in data){
    var empties = 0
    var gray = false
    var words = Object.keys(data[key])
    for (var i = 0; i <= 9; i++){
      if (words.length <= i){
        empties++;
      } else{
        var datum = {"name": String(words[i]),
        "value": data[key][words[i]]["num"],
       "sample": data[key][words[i]]["tweets"]}
        gray = !gray
        if (key == "r"){
          rrows.push(renderTrendRow(datum, gray))
        } else if (key == "p"){
          prows.push(renderTrendRow(datum, gray))
        } else if (key == "o"){
          orows.push(renderTrendRow(datum, gray))
        }
        
      }
    }
    for (var i = 0; i < empties; i++){
      gray = !gray
      if (key == "r"){
        rrows.push(renderEmptyRow(gray))
      } else if (key == "p"){
        prows.push(renderEmptyRow(gray))
      } else if (key == "o"){
        orows.push(renderEmptyRow(gray))
      }
    }

  }
  return(
    <div className='columns'>
        <div className='column'>
        <h4>Among researchers</h4>
          <TrendTable>
            <tbody>
            {rrows}
            </tbody>
          </TrendTable>
        </div>
        <div className='column'>
        <h4>Among practitioners</h4>
        <TrendTable>
            {prows}
          </TrendTable>
        </div>
        <div className='column'>
        <h4>Among other publics</h4>
        <TrendTable>
            {orows}
          </TrendTable>
        </div>
    </div>
  )

}

function Trending(props) {
  var data = []
  data = props.data
  var uid = props.id
  var table = renderTrendTable(data)
  //const [activeComs, setActiveComs] = useState({"r": true, "d": true, "s": true, "o": true})
  //data = organizeData(props.data, 10, activeComs)
  //const[table, setTable] = useState(renderTrendTable(data))

  //const[comList, setComList] = useState(<p>Topics among <strong>Researchers</strong>, <strong>Designers</strong>, <strong>Software Engineers</strong>, <strong>Others</strong> in your audience this week.</p>)

  /*
  const setState = (key) => {
    var state = {"r": activeComs["r"], "d": activeComs["d"], "s": activeComs["s"], "o": activeComs["o"]}
    state[key] = !state[key]
    setActiveComs(state)
    var p = writeComList(state)
    setComList(p)
  }

  function writeComList(coms){
    var r = <></>
    var d = <></>
    var s = <></>
    var o = <></>
    var num = 0

    if (coms.r){
      r = <strong> Researchers</strong>
      num++
    }
    if (coms.d){
      if (num > 0){d = <>,<strong> Designers</strong></>}
      else{d = <strong> Designers</strong>}
      num++
    }
    if (coms.s){
      if (num > 0){s = <>,<strong> Software Engineers</strong></>}
      else{d = <strong> Software Engineers</strong>}
      num++
    }
    if (coms.o){
      if (num > 0){o = <>,<strong> Others</strong></>}
      else{d = <strong> Others</strong>}
    }

    return <p> Trending topics among{r}{d}{s}{o} in your audience this week.</p>
  }
  */

  useLayoutEffect(() => {
    //data = organizeData(props.data, 10, activeComs)
    //setTable(renderTrendTable(data))

  }, []);

  return (
    <div>
        <div id={uid} style={{ width: "80%"}}>
         {table}
         <br/>
        </div>
    </div>
    
  );
}
export default Trending;