import styled from 'styled-components';


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;

`;
export const Container = styled.div`
    margin-top: 4rem;
   `;

export const TitleH1 = styled.h1`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

export const SearchInput = styled.input`
    border-radius: 9px;
    border: 1.5px solid white;
    background-color: transparent;
    font-size: 23px;
    color: aliceblue;

    &:focus{
        border: none;
    }
`;

export const Button = styled.button`
    background-color: rgba(6,7,85,1);
    color: white;
    border-radius: 10px;
    font-size: 23px;
    cursor: pointer;
    border: none;
    padding: 0.3rem 0.7rem;

    &:hover{
        background-color: white;
        color: rgba(6,7,85,1);
        transition: 0.5s;
        border: none;
    }
`;
