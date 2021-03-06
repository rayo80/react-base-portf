import React from 'react';
import styled from 'styled-components';

const SecTitleStyle= styled.div`
    text-align: center;
    p{
        font-size:'RobotoMono Regular';
        font-size: 2rem;
    }
    h2{
        font-family: 'Montserrat Bold';
        font-size: 6rem;
        margin-top:0.5;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        p{
            font-size:1.2rem;
        }
        h2{
            font-size:3.6rem;
        }
    }

`
const SectionTitle = (props) => {
    return ( 
        <SecTitleStyle>
            <p>{props.subheading}</p>
            <h2>{props.heading}</h2>
        </SecTitleStyle>
    );
}
 
export default SectionTitle;