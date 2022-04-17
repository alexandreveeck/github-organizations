import styled from 'styled-components';

export const Container = styled.div`
    //height: 10rem;
    padding: 2rem 0rem 12rem 0rem;
    //width: 2rem;

    /* img {
      //margin: auto;
      //display: block;
      width: 45%;
      height: 20rem;
    } */
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 0rem 0rem 20rem 0rem;
  width: 20%;

  span {
    //  display: block;
    padding: 1rem 0rem 0rem 1rem;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
