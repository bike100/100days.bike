import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/ajayns/gatsby-absurd',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/ajay_ns',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/ajayns08',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_bike100logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "bike-100-days" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_bike100logo.childImageSharp.fluid}
            style={{ width: 740, maxWidth: '100%'}}
          />
        </Art>
        {/*<Art>*/}
        {/*  <Img*/}
        {/*    fluid={data.art_pot.childImageSharp.fluid}*/}
        {/*    style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}*/}
        {/*  />*/}
        {/*</Art>*/}
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>100 Days of Biking</h2>
              <span>
                June 2 thru Sept 10, 2020, in and around Milwaukee, WI
              </span>
              <br/>
              <span>
                Illustrations by
                {` `}
                <ExternalLink href="https://www.ahspinnaker.com/" style={{color: "green"}}>
                  Julia Ardis
                </ExternalLink>
              </span>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.white.dark};
  // background-color: ${props => props.theme.color.white.regular};
  // background-color: ${props => props.theme.color.primary};
  border-top: 6px dashed ${props => props.theme.color.secondary};
  margin-top: 2rem;
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
