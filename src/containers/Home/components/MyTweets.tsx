import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import WaffleChart from './WaffleChart';
import axios from 'axios'
import { Tweet} from 'react-twitter-widgets'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Carousel from 'react-bootstrap/Carousel'
import IconArray from './IconArray';
import * as am4core from "@amcharts/amcharts4/core";
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../../../config/routes.config';

import './chart.css'


//var id = "634739719"
//var id = "1293416714923683841"
//var id = "192812670"
//var id = "802233409338675200"
//var id = "18256350"
//var id = "2490180804"
//var id = "18670940"
//var id = "486899842"
//var id = "238753895"

const Title = styled.p`
    &&& {
    padding: 1em;
    font-size: 30px;
    font-weight:bold;
}`

const Subtitle = styled.p`
    &&& {
    padding: .05em;
    font-size: 16px;
}`

const Semititle = styled.p`
    &&& {
    padding: .05em;
    font-size: 22px;
    margin-left: auto;
    margin-right: auto;
}`

const Center = styled.div`
    &&& {
    margin: auto;
    text-align: center;
}`

const Retweet = styled.p`
    &&& {
    padding: 1em;
    font-size: 24px;
    font-weight:bold;
    margin-left:80px
}`

const tweetwind = {
    padding: '1em',
    width: '840px',
    maxWidth: '840px',
    maxHeight: '700px',
    'overflow-y': 'auto'
    
  };

const square = {
    width: "200px",
    maxWidth: "200px",
    maxHeight: "200x",
    height: "200px",
    padding: "0.5em",
}

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
    height: '600px',
    maxHeight: '800px'
    
  };

  const roundButton = {
      borderRadius: '8px',
      background: '#ffffff',
      height: '50px',
      widght: '100px'
  }

/*
function RenderTweet(tweets, num){
    if (tweets.length < num){
        return (<div></div>);
    } else if (tweets[tweets.length - num]['downstream_r'] + tweets[tweets.length - num]['downstream_n'] <= 0){
        return (<div></div>);
    }
    else{
        return(
            <div>
                <Card style ={{padding:"3em"}}>
            <div className='columns'>
                <div className='column'>
                    <Tweet tweetId={tweets[tweets.length - num]['tweet_id_text']} options={{ width: "50%", cards: "hidden" }}/>

                    
                </div>
                <div className='column'>
                    <WaffleChart legend_pos = "right" title = {tweets[tweets.length - num]['retweets'].toString()} divid={"td".concat(num.toString())} vars = {[{name: "Researchers", data: tweets[tweets.length - num]['downstream_r']}, {name: "Non-researchers", data: tweets[tweets.length - num]['downstream_n']}]} />
                    <Retweet>
                    Retweets: {tweets[tweets.length - num]['retweets']}
                    </Retweet>
                </div>
            </div>
            </Card>

            <br/>
            </div>
        )
    }
}
*/

/*
function PopButton(tweet_id, downstream, num_cols, num_rows, denom, dict) {
    return (
    <OverlayTrigger trigger="click" rootClose placement="top" overlay={TweetPop(tweet_id, downstream, num_cols, num_rows, denom, dict)}>
    <button style = {roundButton}>See Reach</button>
      
    </OverlayTrigger>
    )
  };
  
  function TweetPop(tweet_id, data, num_cols, num_rows, denom, dict){
    var new_lines = CalcPlotSize(data, num_cols, num_rows, denom)
    num_cols = new_lines[0]
    num_rows = new_lines[1]
    return(

    <div>
      <Popover id="popover-basic" placement="top" style={tweetpop}>
        <Popover.Title>Sample Tweets</Popover.Title>
        <Popover.Content>
            <IconArray divid = {tweet_id + "_icon"} data = {JSON.parse(data)} cols = {num_cols} rows = {num_rows} denom = {denom} series_dict = {dict}/>
        </Popover.Content>
      </Popover>
    </div>

    )
  }
  */

  /*
  function TweetCarousel(tweets){
      var divs = [] 
      for (var i = 0; i < tweets.length; i++){
          divs.push(tweets[i])
      }
      return(
          <Carousel>
              <div>{qtip}</div>
              <div>{qtip}</div>
          </Carousel>
      )
  }
  */

  function TweetCarousel(tweets) {
      return(
        <Carousel>
            {tweets.map(item => <Carousel.Item>{item}</Carousel.Item>)}
      </Carousel>
      )
  }

function RenderTweet(tweet_id, downstream, num_cols, num_rows, denom, dict){

    return(
        <Card key = {tweet_id} style ={{padding:"3em"}}>
          <div className='columns'>
            <div className='column'>
              <Center>
                <Semititle>Tweet</Semititle>
              </Center>
              <Tweet tweetId={tweet_id} options={{ width: "100%", cards: "hidden", conversation: "none"}}/>
              {/*PopButton(tweet_id, downstream, num_cols, num_rows, denom, dict)*/}
            </div>
            <div className='column'>
              <Center>
                <Semititle>Downstream</Semititle>
              </Center>
              <IconArray divid = {tweet_id + "_icon"} data = {JSON.parse(downstream)} cols = {num_cols} rows = {num_rows} denom = {denom} series_dict = {dict}/>
            </div>
          </div>
        </Card>
    )


    /*
   var new_text = ""

   if (text.length > 110){
       new_text = text.slice(0, 110)
       new_text = new_text + "..."
   } else{
       new_text = text
   }

   return(
    <div key = {tweet_id}>
        <Card style = {square}>
        <p>{new_text}</p>
        </Card>
        <br/>
    </div>
   )
   */
   
}




function MyTweets(props) {
    const [isLoading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);
    var id = props.id
  
    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/retweetsWhereUserID/${id}`)
        .then(response => {
          setTweets(response.data);
          setLoading(false);
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));
      }, []);

      if (isLoading) {
        return <div>

            <Title>My Tweets</Title>
            <p>Loading...</p>
 
        </div>
      }

      /*

      var col1 = []
      var col2 = []
      var col3 = []
      */
      var tweet_array = []

      var max = Math.min(tweets.length, 8)
      max = max + 1

      const cols = props.cols
      const rows = props.rows
      const denom = props.denom
      const dict = props.series_dict

      for (var i = 1; i < max; i++){

       tweet_array.push(RenderTweet(tweets[tweets.length - i].tweet_id_text, tweets[tweets.length - i].downstream_class, cols, rows, denom, dict))
       console.log(dict)

      }

      return (
            <div className='columns'>
                <div className='column'>
                    {/*tweet_array*/}
                    {TweetCarousel(tweet_array)}
                    <NavLink

          to={RoutesConfig.Tweets.path}
          exact={RoutesConfig.Tweets.exact}
          activeClassName={RoutesConfig.Tweets.activeClassName}
        >
          <span>See more tweets</span>
        </NavLink>
                </div>
            </div>
        );
    
}


export default MyTweets;