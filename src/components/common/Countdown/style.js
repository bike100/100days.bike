import styled from 'styled-components';

export const Wrapper = styled.div`
Countdown{
  margin: 10px auto;
  padding-bottom: 20px;
}

.Countdown-col{
  display: inline-block;
}

.Countdown-col-element{
  display: inline-block;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
}

.Countdown-col-element strong{
  font-size: 50px;
   @media (max-width: ${props => props.theme.screen.sm}) {
      font-size: 2.4rem;
   }
}
`;
