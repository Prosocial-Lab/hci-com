import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import MyWaffle from './MyWaffle';
import MyDownstream from './MyDownstream';
import axios from 'axios';

var id = "634739719"

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
    

function MyContributions(props) {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/userWhereID/${id}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));
      }, []);

      if (isLoading) {
        return <div>
        <Card>
            <Title>My Contributions</Title>
            <p>Loading...</p>
        </Card>
        </div>
      }

      return(
<div>
    <Card style ={{padding:"3em", height:"500px"}}>
        <Title>My Contributions</Title>

        <Subtitle>My Tweets</Subtitle>
            <List> Blog links: {user[0]["blog_tweets"]}</List>
            <List> Paper links: {user[0]["paper_tweets"]}</List>
            <List> Median daily tweets: {user[0]["median_daily_tweets"]}</List>
        <Subtitle>My Community Engagement</Subtitle>
            <List> Median likes: {user[0]["median_likes"]}</List>
            <List> Median retweets: {user[0]["median_retweets"]}</List>

    </Card>
    <br/>

</div>
);
      }

export default MyContributions;