import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import WaffleChart from './WaffleChart';
import axios from 'axios'
import { Tweet} from 'react-twitter-widgets'

var id = "634739719"

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



function MyTweets(props) {
    const [isLoading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);
    const big = "1251242797379645440";

    useEffect(() => {
        axios
        .get(`http://localhost:4001/twitter/retweetsWhereUserID/${id}`)
        .then(response => {
          setTweets(response.data);
          setLoading(false);
        })
        .catch(error => console.error(`There was an error retrieving the retweets list: ${error}`));
      }, []);

      if (isLoading) {
        return <div>
        <Card>
            <Title>My Tweets</Title>
            <p>Loading...</p>
        </Card>;
        </div>
      }
    

    return (
<div>
    <Card style ={{padding:"3em"}}>
        <Title>My Tweets</Title>
            <div className='columns'>
                <div className='column'>
                    <Title>Tweets</Title>
                    <Tweet tweetId={tweets[tweets.length - 1]['tweet_id_text']} options={{ width: "50%", cards: "hidden" }}/>

                    
                </div>
                <div className='column'>
                    <Title>Downstream Audience</Title>
                    <WaffleChart title = {tweets[tweets.length - 1]['retweets']} divid="td1" r = {tweets[tweets.length - 1]['downstream_r']} n = {tweets[tweets.length - 1]['downstream_n']}/>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Tweet tweetId={tweets[tweets.length - 2]['tweet_id_text']} options={{ width: "50%", cards: "hidden" }}/>
                </div>
                <div className='column'>
                    <WaffleChart title = {tweets[tweets.length - 2]['retweets']} divid="td2" r = {tweets[tweets.length - 2]['downstream_r']} n = {tweets[tweets.length - 2]['downstream_n']}/>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Tweet tweetId={tweets[tweets.length - 3]['tweet_id_text']} options={{ width: "50%", cards: "hidden" }}/>
                </div>
                <div className='column'>
                    <WaffleChart title = {tweets[tweets.length - 3]['retweets']} divid="td3" r = {tweets[tweets.length - 3]['downstream_r']} n = {tweets[tweets.length - 3]['downstream_n']}/>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Tweet tweetId={tweets[tweets.length - 4]['tweet_id_text']} options={{ width: "50%", cards: "hidden" }}/>
                </div>
                <div className='column'>
                    <WaffleChart title = {tweets[tweets.length - 4]['retweets']} divid="td4" r = {tweets[tweets.length - 4]['downstream_r']} n = {tweets[tweets.length - 4]['downstream_n']}/>
                </div>
            </div>

            <br/>
            <div className='columns'>
                <div className='column'>
                    <Tweet tweetId={tweets[tweets.length - 5]['tweet_id_text']} options={{ width: "50%", cards: "hidden" }}/>
                </div>
                <div className='column'>
                    <WaffleChart title = {tweets[tweets.length - 5]['retweets']} divid="td5" r = {tweets[tweets.length - 5]['downstream_r']} n = {tweets[tweets.length - 5]['downstream_n']}/>
                </div>
            </div>

    </Card>

</div>
);
}


export default MyTweets;