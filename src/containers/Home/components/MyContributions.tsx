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
    padding: 0.5em;
    font-size: 24px;
}`

const List = styled.li`
    &&& {
    padding:.25em;
    font-size: 18px;
    margin-left: 50px;
}`
    

const MyContributions = (props) => (
<div>
    <Card style ={{padding:"3em", height:"500px"}}>
        <Title>My Contributions</Title>

        <Subtitle>My Tweets</Subtitle>
            <List> links to Medium</List>
            <List> links to Medium</List>
            <List> links to Medium</List>
        <Subtitle>My Community Engagement</Subtitle>
            <List> links to Medium</List>
            <List> links to Medium</List>

    </Card>
    <br/>

</div>
);


export default MyContributions;