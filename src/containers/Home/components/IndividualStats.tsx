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
var id = "1293416714923683841"

const Title = styled.p`
    &&& {
    font-size: 30px;
    font-weight:bold;
}`

const Subtitle = styled.p`
    &&& {
    padding: 1em;
    font-size: 24px;
}`

const vizpop = {
    width: '425px',
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
        <Popover id="popover-basic" placement="top" style={vizpop}>
            <Popover.Title>Median Followers</Popover.Title>
          <Popover.Content>
          <WaffleChart divid = "medfollowers" r = {med[med.length - 1]['researchers']} n = {med[med.length - 1]['non_researchers']} />
          </Popover.Content>
        </Popover>
      );
      
      const PopFollowers = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_followers}>
        <Button variant="outline-primary">See Median</Button>
          
        </OverlayTrigger>
      );

      //Downstream Popover
      const pop_downstream = (
        <Popover id="popover-basic" placement="top" style={vizpop}>
            <Popover.Title>Median Downstream</Popover.Title>
          <Popover.Content>
          <WaffleChart divid = "meddownstream"  r = {med[med.length - 1]['median_down_r']} n = {med[med.length - 1]['median_down_n']} />
          </Popover.Content>
        </Popover>
      );
      
      const PopDownstream = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_downstream}>
        <Button variant="outline-primary">See Median</Button>
          
        </OverlayTrigger>
      );

      //Growth Popover
      const pop_growth = (
        <Popover id="popover-basic" placement="top" style={vizpop}>
          <Popover.Content>
          <LineChart data = {med} id = {"indlinemed"} dv = "total_followers" yaxis = "Followers"/>
          </Popover.Content>
        </Popover>
      );
      
      const PopGrowth= () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_growth}>
        <Button variant="outline-primary">See Median</Button>
        </OverlayTrigger>
      );

      //Tweet Popover
      const pop_tweet = (
        <Popover id="popover-basic" placement="top" style={vizpop}>
          <Popover.Content>
          <LineChart data = {med} id = {"indlinemed2"} dv = "total_tweets" yaxis = "Tweets"/>
          </Popover.Content>
        </Popover>
      );
      
      const PopTweet= () => (
        <OverlayTrigger trigger="click" placement="right" overlay={pop_tweet}>
        <Button variant="outline-primary">See Median</Button>
        </OverlayTrigger>
      );

      

      return(

<div>
    <Card style ={{padding:"3em"}}>
        <Title>My Statistics</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>My Followers</Subtitle>
                    <WaffleChart divid = "myfollowers" data = {snaps[snaps.length - 1]} r = {snaps[snaps.length - 1]['researchers']} n = {snaps[snaps.length - 1]['non_researchers']} />
                    <PopFollowers/>
                    
                </div>
                <div className='column'>
                    <Subtitle>My Downstream Audience</Subtitle>
                    <WaffleChart divid = "mydownstream" data = {snaps[snaps.length - 1]} r = {snaps[snaps.length - 1]['median_down_r']} n = {snaps[snaps.length - 1]['median_down_n']} />
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