import React from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';

const Title = styled.p`{
    color: #6d6d6d;
    padding: 2em;
    font-weight:400;
    
}`

const CommunityStats = (props) => (
<div>
    <Card>
        <Title>Community Statistics</Title>
    </Card>
    <br/>
</div>
);


export default CommunityStats;