import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {TweetsWaffle} from "../components";
import WaffleChart from './WaffleChart';
import LineChart from './LineChart';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    

function CommunityStats(props) {
    const [isLoading, setLoading] = useState(true);
    const [snaps, setSnaps] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/communityAll`)
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
    <Card style ={{padding:"2em"}}>
        <Title>A look at the HCI Research Community on Twitter</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Community Followers</Subtitle>
                    <WaffleChart divid = "communityfollow" vars = {[{name: "Researchers", data: snaps[snaps.length - 1]['researchers']}, {name: "Non-researchers", data: snaps[snaps.length-1]['non_researchers']}]} data = {snaps[snaps.length - 1]} r = {snaps[snaps.length - 1]['researchers']} n = {snaps[snaps.length - 1]['non_researchers']} />
                    
                </div>
                <div className='column'>
                    <Subtitle>Tweet Content</Subtitle>
                    <WaffleChart scheme = "tweets" divid = "communitytweets" vars = {[{name: "Paper", data: snaps[snaps.length - 1]['paper_tweets']}, {name: "Blog", data: snaps[snaps.length - 1]['blog_tweets']}, {name: "None", data: (snaps[snaps.length - 1]['total_tweets'] - (snaps[snaps.length - 1]['paper_tweets'] + snaps[snaps.length - 1]['blog_tweets']) )}]} />
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Follower Growth</Subtitle>
                    <LineChart data = {snaps} id = {"comline"} dv = "total_followers" yaxis = "Followers" />
                </div>
                <div className='column'>
                    <Subtitle>Total Tweets</Subtitle>
                    <LineChart data = {snaps} id = {"tline"} dv = "total_tweets" yaxis = "Tweets"/>
                </div>
            </div>
    </Card>
    <br/>
</div>
);
}


export default CommunityStats;