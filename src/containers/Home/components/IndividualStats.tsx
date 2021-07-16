import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import CardColumns from 'react-bootstrap/CardColumns';
import MyWaffle from './MyWaffle';
import MyDownstream from './MyDownstream';
import WaffleChart from './WaffleChart';
import axios from 'axios';
import LineChart from './LineChart';
import IconArray from './IconArray';
import BubbleChart from './BubbleChart';
import BubbleLite from './BubbleLite';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './Trending';
import TopTweets from './TopTweets';
import MyTweets from './MyTweets'
import * as am4core from "@amcharts/amcharts4/core";
import Tooltip from "react-bootstrap/Tooltip";
import StickyBox from "react-sticky-box";


import qtip from './q.jpg'

var id = "2418152184"
//var id = "1293416714923683841"
//var id = "192812670"
//var id = "802233409338675200"
//var id = "18256350"
//var id = "2490180804"
//var id = "18670940"
//var id = "486899842"
//var id = "238753895"
//var id = "247943631"
//var id = "30142130"

const Title = styled.p`
    &&& {
    margin-top: 120px;
    font-size: 30px;
    font-weight:bold;
}`

const Subtitle = styled.p`
    &&& {
    padding: .05em;
    font-size: 24px;
}`

const Poptitle = styled.p`
    &&& {
    padding: 0.3em;
    font-size: 24px;
}`

const Sticky = styled.div`
&&& {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 16px;
  left: 75%;
  background-color: lightblue; 
  height: 200px;
  width: 200px;
}`

const Space = styled.div`
    &&& {
    padding: 0.3em;
    font-size: 24px;
}`


const vizpop = {
    width: '860px',
    maxWidth: 'none'
  };

const linepop = {
    width: '700px',
    maxWidth: 'none'
  };

  const Center = styled.div `{
    text-align: center;
  }`

const Question = styled.button`
    &&& {
    border-radius: 50%;
    font-weight:bold;
    background-color: white;
    color: black;
    border: 2px solid black;
    font-size: 12px;
    cursor: default;
}`

var rp_grad = new am4core.LinearGradient();
    rp_grad.addColor(am4core.color("#66c2a5"));
    rp_grad.addColor(am4core.color("#fc8d62"));

const series_dict = {
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

const follower_q = "This is the set of all your followers."

const downstream_q = "Your downstream audience is the set of followers of everyone who retweeted your tweets (i.e. everyone exposed to your tweets via retweets). This is the median of that audience."
    
const test = "test"

const bubble_q = "Each bubble indicates a common word in your audiences' bios, calculated seperately for each segment (researcher, practitioner, other) of that audience."

const tweets_q = "Up to 1500 users each are randomly sampled from your followers and downstream audience from your most recent 5 tweets. Their most popular tweets from the past week will appear here."

const trending_q = "Up to 1500 users each are randomly sampled from your followers and downstream audience from your most recent 5 tweets. Their most used hashtags from the past week will appear here."

function IndividualStats(props) {
    

    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    var num_cols = 10
    var num_rows = 20
    var denom = 25

    /*
    const [isLoading2, setLoading2] = useState(true);
    const [med, setMed] = useState([]);
    */

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/userWhereID/${id}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));
        

      }, []);

      if (isLoading) {
        return <div>
        <Card>
            <Title>My Tweets</Title>
            <p>Loading...</p>
        </Card>
        </div>
      } else {
        var f = JSON.parse(user[0]['followers_class'])
        var d = JSON.parse(user[0]['median_downstream_class'])

        var tot_f = 0
        for (const key in f){
          tot_f = tot_f + Math.round(f[key])
        }

        
        var tot_d = 0
        for (const key in d){
          tot_d = tot_d + Math.round(d[key])
        }

        if (Math.max(tot_f, tot_d) > 10000) {
          //denom = Math.round(Math.max(tot_f, tot_d) / 20)
          denom = 50
        }

        var tot_fsquares = 0
        for (const key in f){
          tot_fsquares = tot_fsquares + Math.round(f[key] / denom)
        }

        
        var tot_dsquares = 0
        for (const key in d){
          tot_dsquares = tot_dsquares + Math.round(d[key] / denom)
        }

        var num = Math.max(tot_fsquares, tot_dsquares)
        num = Math.floor(Math.sqrt(num)) + 1
        num_cols = num
        num_rows = num + 1

      }

      return(

<div>
  <div className='columns'>
    <div className='column'>
       <Card style ={{padding:"0.5em"}}>
        <div style = {{backgroundColor:"#66c2a5",  textAlign: "center"}}><Subtitle style = {{color: "#000000"}}>Researchers</Subtitle></div>
        <p>This group includes academic, industrial, and government researchers across all research fields.</p>
        <p>Important keywords: <strong>data, phd, science, university, research</strong></p>
        </Card>
     </div>

      <div className='column'>
        <Card style ={{padding:"0.5em"}}>
        <div style = {{backgroundColor:"#fc8d62",  textAlign: "center"}}><Subtitle style = {{color: "#000000"}}>Practitioners</Subtitle></div>
          <p>This group includes designers and software engineers (future updates may include educators, healthcare providers, etc).</p>
          <p>Important keywords: <strong>design, ux, software, developer, game</strong></p>
        </Card>
      </div>

      <div className='column'>
        <Card style ={{padding:"0.5em"}}>
        <div style = {{backgroundColor:"#8da0cb",  textAlign: "center"}}><Subtitle style = {{color: "#000000"}}>Other Publics</Subtitle></div>
          <p>This group includes anyone who does not fall into the above categories.</p>
          <p>Important keywords: <strong>n/a</strong></p>
        </Card>
      </div>
    </div>

    {/*<Card style ={{padding:"2em"}}>*/}
        <Title id = "What is my audience?">What is my reach?</Title>
            <div className='columns'>
                <div className='column'>
                    <Center><Subtitle>Followers {toolTrigger(follower_q)}</Subtitle></Center>
                    {/*<WaffleChart divid = "myfollowers" data = {user['followers_class']} />*/}
                    {/*<PopFollowers/>*/}
                    <IconArray divid = "followers_icon" data = {JSON.parse(user[0]['followers_class'])} cols = {num_cols} rows = {num_rows} denom = {denom} series_dict = {series_dict}/>
                    
                </div>
                <div className='column'>
                <Center><Subtitle>Downstream {toolTrigger(downstream_q)}</Subtitle></Center>
                    {/*<WaffleChart divid = "mydownstream" data = {user['followers_class']} />*/}
                    {/*<PopDownstream/>*/}
                    <IconArray divid = "downstream_icon" data = {JSON.parse(user[0]['median_downstream_class'])} cols = {num_cols} rows = {num_rows} denom = {denom} series_dict = {series_dict}/>
                </div>
            </div>

            <br/>

            <Title id = "Who are my followers?">Who are my audience? {toolTrigger(bubble_q)}</Title>
            <p>By looking at keywords from people's bios, we can learn more about how they identify themselves.</p>

            <Subtitle id = "r_bubbles">Researchers</Subtitle>
            <div className='columns'>
                <div className='column'>
                  <Center><Subtitle>Followers {toolTrigger(follower_q)}</Subtitle></Center>
                  <BubbleLite divid = "r_bubble" data = {JSON.parse(user[0]['follower_keywords'])['r']} series_dict = {series_dict} com = "r"/>
                </div>

                <div className='column'>
                  <Center><Subtitle>Downstream {toolTrigger(downstream_q)}</Subtitle></Center>
                  <BubbleLite divid = "rd_bubble" data = {JSON.parse(user[0]['downstream_keywords'])['r']} series_dict = {series_dict} com = "r"/>
                </div>
            </div>

            <Subtitle id = "p_bubbles">Practitioners</Subtitle>
            <div className='columns'>
                <div className='column'>
                  <Center><Subtitle>Followers {toolTrigger(follower_q)}</Subtitle></Center>
                  <BubbleLite divid = "p_bubble" data = {JSON.parse(user[0]['follower_keywords'])['p']} series_dict = {series_dict} com = "p"/>
                </div>

                <div className='column'>
                  <Center><Subtitle>Downstream {toolTrigger(downstream_q)}</Subtitle></Center>
                  <BubbleLite divid = "pd_bubble" data = {JSON.parse(user[0]['downstream_keywords'])['p']} series_dict = {series_dict} com = "p"/>
                </div>
            </div>

            <Subtitle id = "o_bubbles">Other Publics</Subtitle>
            <div className='columns'>
                <div className='column'>
                <Center><Subtitle>Followers {toolTrigger(follower_q)}</Subtitle></Center>
                  <BubbleLite divid = "o_bubble" data = {JSON.parse(user[0]['follower_keywords'])['o']} series_dict = {series_dict} com = "o"/>
                </div>

                <div className='column'>
                <Center><Subtitle>Downstream {toolTrigger(downstream_q)}</Subtitle></Center>
                  <BubbleLite divid = "od_bubble" data = {JSON.parse(user[0]['downstream_keywords'])['o']} series_dict = {series_dict} com = "o"/>
                </div>
            </div>

            <br/>
            

            <Title id = "Who are my tweets reaching?">Who are my tweets reaching?</Title>
            <p>Are your tweets reaching the groups you want them to? Here are a few tips to help increase the reach of your tweets:</p>
            <ul style = {{listStyleType: "circle", padding: "20px"}}>
              <li>Tweet when most of your followers are active.</li>
              <li>Use images when appropriate [1].</li>
              <li>Use hashtags when appropriate (see <a href="#What is my audience talking about?">"What is my audience talking about?"</a> for examples) [1]</li>
              <li>Make sure your tweets are easily understood by your audience [2]</li>
              <li>Try framing your research to highlight its relevance to your audience [2, 3].</li>
              <li>This can involve highlighting its importance or usefulness for your particular audience [3]</li>
            </ul>
            <div>
              <Subtitle>My Recent Tweets</Subtitle>
              {<MyTweets id = {id} cols = {num_cols} rows = {num_rows} denom = {denom} series_dict = {series_dict}/>}
            </div>
          

    {/*</Card>*/}
    <br/>

    {/*<Card style ={{padding:"2em"}}>*/}
      <Title id = "What is my audience talking about?">What is my audience talking about?</Title>
      <div className='columns'>
                <div className='column'>
                <Subtitle>Trending Hashtags from the Past Week {toolTrigger(trending_q)}</Subtitle>
                  <Trending data = {JSON.parse(user[0]['audience_trending'])}/>
                  <Subtitle>Top Tweets from the Past Week {toolTrigger(tweets_q)}</Subtitle>
                  <TopTweets data = {JSON.parse(user[0]['audience_top_tweets'])}/>
                </div>

                <div className='column'>
                  

                </div>
            </div>
    {/*</Card>*/}

    <br/>

    <div className='columns'>
      <div className='column'>
        <Title>References</Title>
        <p>[1] Kopke, K., Black, J., & Dozier, A. (2019). Stepping out of the ivory tower for ocean literacy. Frontiers in Marine Science, 6, 60.</p>
        <p>[2] Tan, C., Lee, L., & Pang, B. (2014). The effect of wording on message propagation: Topic-and author-controlled natural experiments on Twitter. arXiv preprint arXiv:1405.1438.</p>
        <p>[3] Bobkowski, P. S. (2015). Sharing the news: Effects of informational utility and opinion leadership on online news sharing. Journalism & Mass Communication Quarterly, 92(2), 320-345.</p>
      </div>
    </div>

</div>
      );
};


export default IndividualStats;