import React, { useRef, useLayoutEffect } from 'react';
import logo from './logo.svg';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from 'styled-components';
import qtip from './q.jpg'
import rsq from './images/r_square.jpg'
import psq from './images/p_square.jpg'
import osq from './images/o_square.jpg'
import esq from './images/empty_square.jpg'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function renderTooltip(text){
  return(
  <Tooltip id="button-tooltip">
    {text}
  </Tooltip>
  )
}

function toolTrigger(text){
  return(<OverlayTrigger
    placement="right"
    delay={{ show: 100, hide: 100 }}
    overlay={renderTooltip(text)}
  >
    <img width = "20px" src = {qtip} />
  </OverlayTrigger>
  )
}

const Legend = styled.table `{
  border-spacing: 50px;
  border-collapse: collapse;
  width: 200px;
  margin-right:auto;
}`

const Ltr = styled.tr `{
  padding: 8px;
}`

const pract_explanation = "'Practitioners' currently includes software engineers and designers. Future updates may include additional practitioners groups relevant to HCI, such as teachers, healthcare providers, etc."


function CustomLegend() {
  return(
    <div>
      <p>Legend</p>
    <Legend>
      <tbody>
      <Ltr>
        <td><img width = "25px" src = {rsq}/></td>
        <td>Researchers</td>
      </Ltr>
      <Ltr>
        <td><img width = "25px" src = {psq}/></td>
        <td>Practitioners</td>
      </Ltr>
      <Ltr>
        <td><img width = "25px" src = {osq}/></td>
        <td>Other Publics</td>
      </Ltr>
      </tbody>
      <br></br>
    </Legend>
    <Legend>
    <tbody>
        <Ltr>
        <td><img width = "25px" src = {esq}/></td>
        <td> ≈ 25 users</td>
        </Ltr>
      </tbody>
    </Legend>
    </div>
  )
}

export default CustomLegend;