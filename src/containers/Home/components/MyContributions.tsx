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
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    padding: 0.05em;
    font-size: 24px;
}`

const Space = styled.p`
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
    
function MyContributions(props) {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const [isLoading2, setLoading2] = useState(true);
    const [med, setMed] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/userWhereID/${id}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));

        axios
        .get(`http://localhost:4001/twitter/median`)
        .then(response => {
          setMed(response.data);
          setLoading2(false);
        })
        .catch(error => console.error(`There was an error retrieving the median list: ${error}`));


      }, []);

      if (isLoading || isLoading2) {
        return <div>
        <Card>
            <Title>My Contributions</Title>
            <p>Loading...</p>
        </Card>
        </div>
      }

      const popover = (
        <Popover id="popover-basic">
            <Popover.Title>Median Contributions</Popover.Title>
          <Popover.Content>
              <Subtitle>Median Tweets</Subtitle>
            <List> Blog links: {med["blog_tweets"]}</List>
            <List> Paper links: {med["paper_tweets"]}</List>
            <Space> </Space>
        <Subtitle>Median Exposure</Subtitle>
            <List> Total blog exposure: {med["blog_nreach_aud"]}</List>
            <List> Total paper exposure: {med["paper_nreach_aud"]}</List>
          </Popover.Content>
        </Popover>
      );
      
      const Pop = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="outline-primary">Compare to Community Median</Button>
          
        </OverlayTrigger>
      );

      return(
<div>
    <Card style ={{padding:"2em", height:"600px"}}>
        <Title>My Research Communication</Title>
        <Subtitle>My Tweets</Subtitle>
            <List> Blog links: {user[0]["blog_tweets"]}</List>
            <List> Paper links: {user[0]["paper_tweets"]}</List>
            <Space> </Space>
        <Subtitle>Non-researcher Exposure</Subtitle>
            <List> Total blog exposure: {user[0]["blog_nreach_aud"]}</List>
            <List> Total paper exposure: {user[0]["paper_nreach_aud"]}</List>
            <Space> </Space>
            <Pop/>
            
    </Card>
    
    <br/>

</div>
);
      }

export default MyContributions;