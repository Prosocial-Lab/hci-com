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
  width: 100%;
}`

const TrendTd = styled.td`{
  text-align: left;
  padding: 8px;
}`

const TrendNum = styled.td`{
  text-align: right;
  padding: 8px;
  width: 25%;
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
  width: '275px',
  maxWidth: '275px',
  maxHeight: '400px',
  'overflow-y': 'auto'
  
};

am4core.useTheme(am4themes_animated);

function compare( a, b ) {
  if ( a.value < b.value ){
    return -1;
  }
  if ( a.value > b.value ){
    return 1;
  }
  return 0;
}


function organizeData(data, num){
  var new_data = []
  
  for (const key in data){
    new_data.push(data[key].slice(0, num))
  }

  return (new_data)
}

function renderTweet(tweet_id){
  return(
    <div key = {tweet_id + "tt"}>
    <Tweet tweetId={tweet_id} options={{ width: "200px", cards: "hidden"}}/>
    </div>
  )
}

function renderTweetTable(data, num){
  var r_tweets = []
  var p_tweets = []
  var o_tweets = []
  for (const key in data){
    if (key == "r"){
      var r_min = Math.min(data[key].length, num)
      for (var i = 0; i < r_min; i++){
        r_tweets.push(renderTweet(data[key][i]))
      }
    } else if (key == "p"){
      var p_min = Math.min(data[key].length, num)
      for (var i = 0; i < p_min; i++){
        p_tweets.push(renderTweet(data[key][i]))
      }
    } else if (key == "o"){
      var o_min = Math.min(data[key].length, num)
      for (var i = 0; i < o_min; i++){
        o_tweets.push(renderTweet(data[key][i]))
      }
    }
  }
  return(
    <div className='columns'>
        <div className='column'>
        <h4>Among researchers</h4>
          <Card style = {tweetpop}>
            {r_tweets}
          </Card>
        </div>
        <div className='column'>
        <h4>Among practitioners</h4>
          <Card style = {tweetpop}>
            {p_tweets}
          </Card>
        </div>
        <div className='column'>
        <h4>Among other publics</h4>
          <Card style = {tweetpop}>
            {o_tweets}
          </Card>
        </div>
    </div>
  )

}

function TopTweets(props) {
  var data = []
  //const [activeComs, setActiveComs] = useState({"r": true, "d": true, "s": true, "o": true})
  //data = organizeData(props.data, 10)
  data = props.data
  var table = renderTweetTable(data, 5)
  //const[table, setTable] = useState(renderTweetTable(data))

  //const[comList, setComList] = useState(<p>Topics among <strong>Researchers</strong>, <strong>Designers</strong>, <strong>Software Engineers</strong>, <strong>Others</strong> in your audience this week.</p>)

  /*
  const setState = (key) => {
    var state = {"r": activeComs["r"], "d": activeComs["d"], "s": activeComs["s"], "o": activeComs["o"]}
    state[key] = !state[key]
    setActiveComs(state)
    var p = writeComList(state)
    setComList(p)
  }
  */
  /*
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

    return <p> Top tweets among{r}{d}{s}{o} in your audience this week.</p>
  }
  */

  useLayoutEffect(() => {
    //data = organizeData(props.data, 10, activeComs)
    //setTable(renderTweetTable(data))

  }, []);

  return (
    <div>
        <div id={props.divid} style={{ width: "80%", height: "500px" }}>
         {table}
        </div>
    </div>
    
  );
}
export default TopTweets;