import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const ButtonStyle =styled.div`
    margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;


const Button = (props) => {
    return ( 
        <ButtonStyle outline={props.outline}>
            <Link className="button" to={props.btnLink}>
                {props.btnText}
            </Link>
        </ButtonStyle>

     );
}
 
export default Button;