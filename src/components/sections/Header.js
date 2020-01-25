import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import TextLoop from 'react-text-loop/es';

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
  'fun in the sun',
  'friends',
  'adventure',
  'pie',
  'memories',
  'enjoyable commutes',
  'healthy choices',
  'sustainability',
  'shameless sweat',
  'practicality',
  'a memorable summer',
  'childlike awe',
  'new routes',
  'spontaneous stops',
  'smiling miles',
  'exercise',
  'classic elegance',
  'efficiency in motion',
  'safe riding',
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
  'pedal power!',
  'aprés ride',
  'helmet hair',
];
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
            <Text>
              <h1>
                100 Days of
                <br />
                <TextLoop interval={5000} children={words}>
                </TextLoop>
              </h1>
              {/*<br />*/}
              {/*<p>*/}
              {/*  <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">*/}
              {/*    Check out source &nbsp;&#x2794;*/}
              {/*  </StyledExternalLink>*/}
              {/*</p>*/}
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
    padding-top: 128px;
  }
`;


const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin: 6rem 0 -4.5% 0;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
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
    }
  }
`;

const Text = styled.div`
  justify-self: center;

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
