import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to right,#329aad,#49d1ca);    
    width: 100%;
    height: 4rem;

    padding: 0.5rem 2rem 4rem;
    justify-content: space-between;

    span {
        padding-left: 0.4rem;
    }
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    float: left;
    justify-content: space-between;
    padding-left: 2rem;
    font-size: 1.5rem;
`

export const Logo = styled.div`
        &:hover {
        filter: brightness(0.9);
    }
`