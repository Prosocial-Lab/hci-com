import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import Button from 'react-bootstrap/Button'
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeatureInfoConfig, FeatureInfo } from '../../config/features.config';
import axios from 'axios'
import { CommunityStats, Individual, IndividualStats, MyContributions, MyTweets} from './components';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Tweet} from 'react-twitter-widgets'

const Home: React.FC = () => {
  const featureList = useMemo<FeatureInfo[]>(() => {
    return Object.keys(FeatureInfoConfig).map((key) => FeatureInfoConfig[key]);
  }, []);

  const sample = './data/sample.csv';

  var x = 2
  x = x + 5

  var user_id = 319005485 //This is Keri's twitter

  //The axios statements below collect summary data from the server (server.js)

  //user
  var u = 0
  //community data over time
  var com = 0
  //user data (snapshots) over time
  var snaps = 0
  axios
      .get(`http://localhost:4001/twitter/userWhereID/${user_id}`)
      .then(response => {
        // Update the books state
        u = response.data;
        //setBooks(response.data)

        // Update loading state
        //setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the user list: ${error}`))

  
  axios
      .get(`http://localhost:4001/twitter/communityAll`)
      .then(response => {
        // Update the books state
        com = response.data;
        //setBooks(response.data)

        // Update loading state
        //setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the user list: ${error}`))

  axios
      .get(`http://localhost:4001/twitter/snapshotsWhereID/${user_id}`)
      .then(response => {
        // Update the books state
        snaps = response.data;
        //setBooks(response.data)

        // Update loading state
        //setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the user list: ${error}`))

  function CSVToArray( strData, strDelimiter ){
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){

            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );

        }

        var strMatchedValue;

        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){

            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];

        }


        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );
}

  return (
    <div className='view-wrapper'>
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      
      <section className='container dashboard-content'>
        <div className='columns'>
          <div className='column'>
            <p className='title'>HCI COM</p>
            <p className='subtitle'>Twitter Science Communication Research</p>
            <div className='content'>
            talk about in a paragraph what the research was about <br/>

            how this research is paving way to this new “site” that aims to define and quantify the HCI community on twitter <br/>

            give some context information to how the data was pulled and coded  <br/>

            then describe the current pool of HCI researchers volunteers, i assume, have a CTA to join the HCI researcher twitter community pool <br/>

            {/* <Tweet tweetId="841418541026877441" options={{ width: "200" }}/> */}
            </div>
          </div>
          <div className = 'column'>
            <img src = "hci-com/graph.png"></img>
          </div>
        </div>

        <CommunityStats/>
        {/* <Researchers/>
        <IndividualStats/>
        <MyContributions/> */}
        <Individual/>
        <MyTweets/>

        <div className='columns'>
          <div className='column'>
            <p className='title'>HCI COM</p>
            <div className='content'>
            HAVE A NICE CALL TO ACTION HERE ABOUT JOINING THE HCI COM COMMUNITY POOL – WANT TO SEE MORE? STAY UP TO DATE? BE A PART OF THE COMMUNITY TO SEE YOUR STATS IN THE COMMUNITY INFORMATION, SHARE TO INFORM YOUR COMMUNITY
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
