import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
    flex-direction: row-reverse;
  }
`;
