import React, { useMemo } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Button from 'react-bootstrap/Button'
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeatureInfoConfig, FeatureInfo } from '../../config/features.config';
import axios from 'axios'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Tweet} from 'react-twitter-widgets'
import Card from 'react-bootstrap/Card';
import SideBar from '../../components/SideBar';

const Grid = styled.div`
&&& {
  display: grid;
  grid-column-gap: 0px;
  grid-template-columns: auto 1px;
}`

const Space = styled.p`
    &&& {
    padding: 0em;
    margin-bottom: 1.4em;
}`

const Sticky = styled.div`
&&& {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 50%;
  left: 75%;
  max-height: 300px;
  max-width: 250px;
}`

const Test = styled.div`
&&& {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 2%;
  left: 95%;
  max-height: 300px;
  max-width: 250px;
  background-color: lightblue;
}`

const Title = styled.p`
    &&& {
    font-size: 30px;
    font-weight:bold;
}`

const Subtitle = styled.p`
    &&& {
    padding: .05em;
    font-size: 24px;
}`

const Tweets: React.FC = () => {
  const featureList = useMemo<FeatureInfo[]>(() => {
    return Object.keys(FeatureInfoConfig).map((key) => FeatureInfoConfig[key]);
  }, []);

  return (
    <div className='view-wrapper'>
      <MetaInfo {...RoutesConfig.Tweets.metaInfo} />
      
      <section className='container dashboard-content'>
        <h1>Test</h1>
      </section>
    </div>
  );
};

export default Tweets;
