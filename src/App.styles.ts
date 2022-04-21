import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 800px){
        flex-direction: column;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding-left: 1rem;

    @media (max-width: 800px){
       margin-bottom: 50px;
       align-items: center;
    }
`

export const LogoLink = styled.a`
    display: block;
`

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 800px){
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`

export const GridArea = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 4rem;
    padding-right: 2rem;

    @media (max-width: 800px){
        justify-content: center;
        margin: 0 20px;
        padding-right: 0rem;
    }
`
export const Grid = styled.div`
    width: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 800px){
        grid-template-columns: repeat(3, 1fr);
    }
`
