import React, { Component } from 'react';
import Countdown from '../common/Countdown';
import styled from 'styled-components';
import { Container, Section } from '@components/global';
import theme from '@styles/theme';

class Schedule extends Component {
  render() {
    const sectionStyle = {
      color: theme.color.secondary,
      paddingBottom: '10px',
    };
    const calDatesColor = {
      color: theme.color.white.regular,
      backgroundColor: theme.color.secondary,
      padding: '2rem',
    }
    return (
      <Section id='calendar' style={sectionStyle}>
        <Container>
        <Banner>
          <Text>
            <h2 style={calDatesColor}>
              <strong>June 2</strong>&nbsp;through <strong>Sept 10</strong>&nbsp;
              in <strong>Milwaukee, WI</strong>
            </h2>
          </Text>
        </Banner>

      {/*<Banner>*/}
      {/*  <Text>*/}
      {/*    <h5>*/}
      {/*      <Countdown date={'June 02, 2020 00:00:00 GMT-05:00'}/>*/}
      {/*    </h5>*/}
      {/*  </Text>*/}
      {/*</Banner>*/}
        </Container>
      </Section>
    );
  }
}

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 64px;
`;

export default Schedule;
