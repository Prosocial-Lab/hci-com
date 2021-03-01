import React from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import MyWaffle from './MyWaffle';
import MyDownstream from './MyDownstream';

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
    

const CommunityStats = (props) => (
<div>
    <Card style ={{padding:"3em"}}>
        <Title>My Statistics</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>My Followers</Subtitle>
                    <MyWaffle/>

                    
                </div>
                <div className='column'>
                    <Subtitle>My Downstream Audience</Subtitle>
                    <MyDownstream/>
                </div>
            </div>
    </Card>
    <br/>

</div>
);


export default CommunityStats;