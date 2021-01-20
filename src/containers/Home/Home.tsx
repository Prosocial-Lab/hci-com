import React, { useMemo } from 'react';
import { FeatureList } from './components';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeatureInfoConfig, FeatureInfo } from '../../config/features.config';
import axios from 'axios'


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
        console.log(u);
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
        console.log(com);
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
        console.log(snaps);
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
            <p className='title'>Lorem Ipsum</p>
            <div className='content'>
              Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis
              in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu.
              Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne
              delectus expetendis philosophia nam. Mel lorem recusabo ex, vim
              congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei.
              Qui ne urbanitas conceptam deseruisse, commune philosophia eos no.
              Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec
              facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait
              atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et
              nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum
              viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant
              regione argumentum vis id, adipisci accusata postulant at vix.
              Adipisci vituperata ea duo, eu summo detracto mei, et per option
              periculis. Eos laudem vivendo ex.
            </div>
          </div>
          <div className = 'column'>
            <img src = 'https://miro.medium.com/max/2978/1*rmq7bd3GFjcwfXtkrBQaPQ.png'></img>
          </div>
        </div>
        <hr/>

        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>Community Followers</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/ZWMG58P.png'></img>
              </p>
              
            </div>
          </div>
          <div className='column'>
            <p className='subtitle'>Average Followers</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/W7ABxos.png'></img>
              </p>
            </div>
          </div>
          <div className='column'>
            <p className='subtitle'>Average Downstream Audience</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/VWjwhus.png'></img>
              </p>
            </div>
          </div>
        </div>

        <hr />
        
        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>Follower Breakdowns</p>
              <div className='content'>
                <div className='columns'>
                  <div className = 'column'>
                    My Followers
                    <img src ='https://i.imgur.com/UuBv2ob.png'></img>
                  </div>
                  
                  <div className = 'column'>
                    My Downstream Audience
                    <img src = 'https://i.imgur.com/QJ04ATd.png'></img>
                  </div>
                </div>
              </div>
          </div>
          <div className='column'>
            <p className='subtitle'>Tweet Engagement</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/tzr4R8C.png'></img>
              </p>
            </div>
          </div>
        
        </div>
        <hr />

        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>My Tweets</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
              </p>
              
            </div>
          </div>
        </div>

        <hr/>

        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>My Followers</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
              </p>
              
            </div>
          </div>
        </div>
        <hr />

      <div className='columns'>
        <div className='column'>
          <p className='subtitle'>Test</p>
          <div className='content' id='test'>
            Blah {CSVToArray("one, two, three", ",").length} Blah {x}
            Some users (this doesn't update yet):
            {u}
          </div>
        </div>
      </div>

      </section>
    </div>
  );
};

export default Home;
