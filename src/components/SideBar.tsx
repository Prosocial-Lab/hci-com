import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as ReactSeoLogoSvg } from '../assets/img/ReactSeoLogo.svg';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CustomLegend from '../containers/Home/components/CustomLegend'

const Sticky = styled.div`
&&& {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 10%;
  right: 10%;
  height: 400px;
  width: 250px;
}`

const SideBar: React.FC = (props) => (
  <Sticky>
    <Card style ={{padding:"1em"}}>
    <div id="toc_container">
      <p>Page contents</p>
      <ul>
      <li><a href="#What is my audience?">What is my reach?</a></li>
      <li><a href="#Who are my followers?">Who are my audience?</a>
      </li>
      <li><a href="#Who are my tweets reaching?">Who are my tweets reaching?</a></li>
      <li><a href="#What is my audience talking about?">What is my audience talking about</a></li>
     </ul>
     <CustomLegend />
    </div>
    </Card>
</Sticky>
);

export default SideBar;
