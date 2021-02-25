import React from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

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

const MyTweets = (props) => (
<div>
    <Card>
        <Title>My Tweets</Title>
            <div className='columns'>
                <div className='column'>
                    <Subtitle>Recent Tweets</Subtitle>

                    
                </div>
                <div className='column'>
                    <Subtitle>Downstream Audience</Subtitle>
                </div>
            </div>
    </Card>

</div>
);


export default MyTweets;