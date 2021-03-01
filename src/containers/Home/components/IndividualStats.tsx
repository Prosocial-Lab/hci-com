import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import MyWaffle from './MyWaffle';
import MyDownstream from './MyDownstream';
import WaffleChart from './WaffleChart';
import axios from 'axios';
import LineChart from './LineChart';

var id = "634739719"

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
    

function IndividualStats(props) {
    const [isLoading, setLoading] = useState(true);
    const [snaps, setSnaps] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/snapshotsWhereID/${id}`)
        .then(response => {
          setSnaps(response.data);
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
      }

      return(

<div>
    <Card style ={{padding:"3em"}}>
        <Title>My Statistics</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>My Followers</Subtitle>
                    <WaffleChart divid = "myfollowers" data = {snaps[snaps.length - 1]} r = {snaps[snaps.length - 1]['researchers']} n = {snaps[snaps.length - 1]['non_researchers']} />

                    
                </div>
                <div className='column'>
                    <Subtitle>My Downstream Audience</Subtitle>
                    <WaffleChart divid = "mydownstream" data = {snaps[snaps.length - 1]} r = {snaps[snaps.length - 1]['median_down_r']} n = {snaps[snaps.length - 1]['median_down_n']} />
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Follower Growth</Subtitle>
                    <LineChart data = {snaps} id = {"indline"} dv = "total_followers" yaxis = "Followers"/>
                </div>
                <div className='column'>
                    <Subtitle>Tweet Engagements</Subtitle>
                    <LineChart data = {snaps} id = {"indline2"} dv = "total_tweets" yaxis = "Tweets"/>
                </div>
            </div>
    </Card>
    <br/>

</div>
      );
};


export default IndividualStats;