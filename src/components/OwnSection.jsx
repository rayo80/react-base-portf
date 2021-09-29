import React from 'react';
import OwnImg from '../assets/images/hero.png';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';

const OwnStyle= styled.div`
    text-align:center;
    .own{
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .own__heading{
        font-size:2rem;
        margin-bottom: -4rem;
        position: relative;
        span{
            display: inline-block;
            width: 100%;
        }
        .own__name{
            font-family: "Montserrat SemiBold";
            color: var(--light);
            font-size:7rem;
        }
    }
    .own-img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1)
    }
    .own-info{
        margin-top:-18rem;
    }

    @media only screen and (max-width: 768px){
        .own {
            min-height: 750px;
        }
        .own__heading {
            font-size: 1.4rem;
            margin-bottom: -3rem;
            .own__name {
                font-size: 4.5rem;
            }
        }
        .own-img {
            height: 300px;
        }
        .own-info {
            margin-top: 3rem;
        }
    }
`;



const OwnSection = () => {
    return ( 
        <OwnStyle>
            <div className="own" >
                <div className="container" >
                    <h1 className="own__heading">
                        <span>Hola que tal</span>
                        <span className="own__name">Your Name</span>
                    </h1>
                    <div className="own-img">
                        <img src={OwnImg} alt="" />
                    </div>
                    <div className="own-info">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Iusto soluta optio repudiandae earum beatae laborum.

                        </PText>
                        <Button btnLink="/projects" btnText="trabajos" outline={false}/>
                    </div>
                </div>
            </div>      
        </OwnStyle>
     );
}
 
export default OwnSection;