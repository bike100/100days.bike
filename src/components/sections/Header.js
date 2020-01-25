import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import TextLoop from 'react-text-loop/es';
import Countdown from '../common/Countdown';

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
var words = [
  'adventure',
  'fun in the sun',
  'friends',
  'pie',
  'memories',
  'enjoyable commutes',
  'healthy choices',
  'sustainability',
  'shameless sweat',
  'practicality',
  'summer',
  'childlike awe',
  'new routes',
  'spontaneous stops',
  'smiling miles',
  'exercise',
  'classic elegance',
  'efficiency in motion',
  'safety first!',
  'grocery getting',
  'breaking stereotypes',
  'paper maché!',
  'parades',
  'community',
  'balancing acts',
  'cameraderie',
  'deserving a donut',
  'seeing cyclists',
  'collaboration',
  'pedal power',
  'aprés ride',
  'helmet hair',
  'open road',
  'centrifugal force',
  'leaning in to it',
  'velo-city',
  'unity',
  'wind in your hair',
];
// words = [ `a memorable summer`, ];
words = shuffle(words);

const Header = () => (
  // this.date = new Date("June 02, 2020 00:00:00 GMT-05:00");


  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "bike-art-julia-1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text >
              <h1>
                100 Days of
                <br />
                <span>
                  <TextLoop interval={4000} children={words} noWrap={false}>
                  </TextLoop>
                </span>
              </h1>
              {/*<br />*/}
              {/*<p>*/}
              {/*  <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">*/}
              {/*    Check out source &nbsp;&#x2794;*/}
              {/*  </StyledExternalLink>*/}
              {/*</p>*/}
              <span class='countdown'>

                  <Countdown date={'June 02, 2020 00:00:00 GMT-05:00'}/>

                  </span>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 40% // 128px;
  }
  @media (min-width: ${props => props.theme.screen.md}) {
    padding-top: 10% // 192px;
  }
`;


const Art = styled.figure`
  width: 100%;
  margin: 0;
  margin: 5% 0 -4.5% 0;
  
  > div {
    width: 120%;
    @media (max-width: ${props => props.theme.screen.lg}) {
      margin: 35% 0 -4.5% 0;
      width: 100%;
    }
    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 15% 0 -4.5% 0;
      width: 100%;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      width: 80%;
      margin: -15% 0 -4.5% 0;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
      z-index: 100;
    }
  }
`;

const Text = styled.div`
  justify-self: center;
  
  h1 {
    min-height: 15rem;
    @media (max-width: ${props => props.theme.screen.xs}) {
      min-height: 8rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      font-size: 1.8rem;
      line-height: 2.4rem;
      min-height: 10rem;
    }
  }
  
  .Countdown {
  color: ${props => props.theme.color.secondary};
  }
  .Countdown .Countdown-col-element strong {
    @media (max-width: ${props => props.theme.screen.xs}) {
      // margin-top: 0rem;
      font-size: 2rem;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      margin-top: 0rem;
      font-size: 1.33rem;
    }
    @media (min-width: ${props => props.theme.screen.md}) {
      margin-top: 1rem;
    }
    
    color: ${props => props.theme.color.secondary};
  }
  
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
