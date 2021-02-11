import React from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';

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

                    
                </div>
                <div className='column'>
                    <Subtitle>Tweet Content</Subtitle>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Follower Growth</Subtitle>
                </div>
                <div className='column'>
                    <Subtitle>Tweet Engagements</Subtitle>
                </div>
            </div>
    </Card>
    <br/>
</div>
);


export default CommunityStats;