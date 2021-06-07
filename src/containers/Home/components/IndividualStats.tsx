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
import 'bootstrap/dist/css/bootstrap.min.css';

//var id = "634739719"
//var id = "1293416714923683841"
//var id = "192812670"
//var id = "802233409338675200"
//var id = "18256350"
//var id = "2490180804"
//var id = "18670940"
//var id = "486899842"
//var id = "238753895"
var id = "38174427"

const Title = styled.p`
    &&& {
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

const vizpop = {
    width: '860px',
    maxWidth: 'none'
  };

const linepop = {
    width: '700px',
    maxWidth: 'none'
  };
    

function IndividualStats(props) {
    const [isLoading, setLoading] = useState(true);
    const [snaps, setSnaps] = useState([]);

    const [isLoading2, setLoading2] = useState(true);
    const [med, setMed] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/snapshotsWhereID/${id}`)
        .then(response => {
          setSnaps(response.data);
          setLoading(false);
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));

        axios
        .get(`http://localhost:4001/twitter/medsnaps`)
        .then(response => {
          setMed(response.data);
          setLoading2(false);
        })
        .catch(error => console.error(`There was an error retrieving the median list: ${error}`));
      }, []);

      if (isLoading || isLoading2) {
        return <div>
        <Card>
            <Title>My Tweets</Title>
            <p>Loading...</p>
        </Card>
        </div>
      }

      //Followers Popover
      const pop_followers = (
        <Popover id="popover-basic" placement="bottom" style={vizpop}>
            <Popover.Title>Median Followers</Popover.Title>
          <Popover.Content>
          <Card>
            <div className="columns">
            <div className="column">
            <Poptitle>Community Median</Poptitle>
          <WaffleChart legend_pos = "right" divid = "medfollowers" vars = {[{name: "Researchers", data: med[med.length - 1]['researchers']}, {name: "Non-researchers", data: med[med.length-1]['non_researchers']}]} r = {med[med.length - 1]['researchers']} n = {med[med.length - 1]['non_researchers']} />
          </div>
          <div className="column">
            <Poptitle>My Followers</Poptitle>
            <WaffleChart divid = "myfollowerscomp" vars = {[{name: "Researchers", data: snaps[snaps.length - 1]['researchers']}, {name: "Non-researchers", data: snaps[snaps.length-1]['non_researchers']}]} />
            </div>
            </div>
            </Card>
          </Popover.Content>
        </Popover>
      );
      
      const PopFollowers = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_followers}>
        <Button variant="outline-primary">Compare to Community Median</Button>
          
        </OverlayTrigger>
      );

      //Downstream Popover
      const pop_downstream = (
        <Popover id="popover-basic" placement="top" style={vizpop}>
            <Popover.Title>Median Downstream</Popover.Title>
          <Popover.Content>
            <Card>
            <div className="columns">
            <div className="column">
            <Poptitle>Community Median</Poptitle>
            <WaffleChart legend_pos = "right" divid = "meddownstream" vars = {[{name: "Researchers", data: med[med.length - 1]['median_down_r']}, {name: "Non-researchers", data: med[med.length-1]['median_down_n']}]} />
            </div>
            <div className="column">
            <Poptitle>My Downstream</Poptitle>
            <WaffleChart divid = "mydownstreamcomp" vars = {[{name: "Researchers", data: snaps[snaps.length - 1]['median_down_r']}, {name: "Non-researchers", data: snaps[snaps.length-1]['median_down_n']}]} />
            </div>
            </div>
            </Card>
          </Popover.Content>
        </Popover>
      );
      
      const PopDownstream = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_downstream}>
        <Button variant="outline-primary">Compare to Community Median</Button>
          
        </OverlayTrigger>
      );

      //Growth Popover
      const pop_growth = (
        <Popover id="popover-basic" placement="top" style={linepop}>
          <Popover.Content>

            <Poptitle>Community Median</Poptitle>
          <LineChart data = {snaps} med = {med} id = {"indlinemed"} dv = "total_followers" yaxis = "Followers"/>

          </Popover.Content>
        </Popover>
      );
      
      const PopGrowth= () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_growth}>
        <Button variant="outline-primary">Compare to Community Median</Button>
        </OverlayTrigger>
      );

      //Tweet Popover
      const pop_tweet = (
        <Popover id="popover-basic" placement="top" style={linepop}>
          <Popover.Content>
          <Poptitle>Community Median</Poptitle>
          <LineChart data = {snaps} med = {med} id = {"indlinemed2"} dv = "total_tweets" yaxis = "Tweets"/>
          </Popover.Content>
        </Popover>
      );
      
      const PopTweet= () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_tweet}>
        <Button variant="outline-primary">Compare to Community Median</Button>
        </OverlayTrigger>
      );

      

      return(

<div>
    <Card style ={{padding:"2em"}}>
        <Title>My Statistics</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>My Followers</Subtitle>
                    <WaffleChart divid = "myfollowers" vars = {[{name: "Researchers", data: snaps[snaps.length - 1]['researchers']}, {name: "Non-researchers", data: snaps[snaps.length-1]['non_researchers']}]} />
                    <PopFollowers/>
                    
                </div>
                <div className='column'>
                    <Subtitle>My Downstream Audience</Subtitle>
                    <WaffleChart divid = "mydownstream" vars = {[{name: "Researchers", data: snaps[snaps.length - 1]['median_down_r']}, {name: "Non-researchers", data: snaps[snaps.length-1]['median_down_n']}]} r = {snaps[snaps.length - 1]['median_down_r']} n = {snaps[snaps.length - 1]['median_down_n']} />
                    <PopDownstream/>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Follower Growth</Subtitle>
                    <LineChart data = {snaps} id = {"indline"} dv = "total_followers" yaxis = "Followers"/>
                    <PopGrowth/>
                </div>
                <div className='column'>
                    <Subtitle>Total Tweets</Subtitle>
                    <LineChart data = {snaps} id = {"indline2"} dv = "total_tweets" yaxis = "Tweets"/>
                    <PopTweet/>
                </div>
            </div>
    </Card>
    <br/>

</div>
      );
};


export default IndividualStats;