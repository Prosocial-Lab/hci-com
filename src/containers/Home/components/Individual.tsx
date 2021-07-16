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


class Individual extends React.Component{
    render(){
        return (
            
            <div style={divStyle}>
                <Left><IndividualStats /></Left>
                {/*<Right><MyContributions /></Right>*/}
            </div>
        );
    }
}

export default Individual;