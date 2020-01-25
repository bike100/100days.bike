import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Section } from '../global';

import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';
// import FacebookIcon from '@static/icons/F_icon.svg';
import FacebookIcon from '@static/icons/facebook.svg';

const SOCIAL = [
  {
    icon: FacebookIcon,
    link: 'https://facebook.com/bike100days/'
  },
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/bike100days',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/hashtag/bike100',
  },
];

class Social extends Component {

  render() {
    return (
      <Section id="social" style={{}}>
        <Container>
          <SocialIcons>
          <Centerer>
            {SOCIAL.map(({ icon, link }) => (
              <ExternalLink key={link} href={link}>
                <img src={icon} alt="link"/>
              </ExternalLink>
            ))}
          </Centerer>
          </SocialIcons>
        </Container>
      </Section>
    );
  }
}

const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 64px;
`;
const Centerer = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  img {
    margin: 0 8px;
    width: 96px;
    height: 96px;
    
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    // margin-top: 40px;
  }
`;


export default Social;
