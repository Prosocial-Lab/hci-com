import React from 'react';
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import MyContributions from './MyContributions';
import IndividualStats from './IndividualStats';

const Left = styled.div`
    &&&{width: 72%;
    }
`

const Right = styled.div`
    &&&{width:28%;
    }
`

const divStyle ={
    display:'flex',
}

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


class Categories extends React.Component{
    render(){
        return (
            <div style={divStyle}>
                <Card>
                    <Subtitle>Researchers</Subtitle>
                </Card>
            </div>
        );
    }
}

export default Categories;