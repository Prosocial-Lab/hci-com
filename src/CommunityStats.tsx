import React from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {CommunityWaffle} from "../components";
import {TweetsWaffle} from "../components";
import CommunityLine from './CommunityLine';
import CommunityEngagement from './CommunityEngagement';

const Title = styled.p`
    &&& {
    padding: 1em;
    font-size: 20px;
    font-weight:bold;
}`

const Subtitle = styled.p`
    &&& {
    padding: 2em;
    font-size: 16px;
}`
    

const CommunityStats = (props) => (

<div>
    <Card>
        <Title>Community Statistics</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Community Followers</Subtitle>
                    <CommunityWaffle/>
                    
                </div>
                <div className='column'>
                    <Subtitle>Tweet Content</Subtitle>
                    <TweetsWaffle/>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Follower Growth</Subtitle>
                    <CommunityLine/>
                </div>
                <div className='column'>
                    <Subtitle>Tweet Engagements</Subtitle>
                    <CommunityEngagement/>
                </div>
            </div>
    </Card>
    <br/>
</div>
);


export default CommunityStats;