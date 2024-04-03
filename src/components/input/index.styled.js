import styled from 'styled-components';


export const Container = styled.div`

`;

export const TitleH1 = styled.h1`
    color: white;
`;

export const SearchInput = styled.input`
    border-radius: 9px;
    border: 0.5px solid white;
    background-color: transparent;
    font-size: 23px;
`;

export const Button = styled.button`
    background-color: rgba(6,7,85,1);
    color: white;
    border-radius: 10px;
    font-size: 23px;
    cursor: pointer;
    border: none;
    padding: 0.3rem;

    &:hover{
        background-color: white;
        color: rgba(6,7,85,1);
        transition: 0.5s;
        border: none;
    }
`;
