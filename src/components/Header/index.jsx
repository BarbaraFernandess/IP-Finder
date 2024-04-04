import React from 'react';
import { Container, TitleH1, SearchInput, Button, SearchContainer} from "./index.styled";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = (props) => {
    return (
        <Container>
            <TitleH1>IP FINDER</TitleH1>
            <SearchContainer>
            <SearchInput 
                value={props.inputUser}
                onChange={(e) => props.setInputUser(e.target.value)}
                name='searchInput'
            />
            <Button
                onClick={props.handleClick}
            >Search <FaMagnifyingGlass size={15} /></Button>
            </SearchContainer>
        </Container>
    );
};

export default Header;