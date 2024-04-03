import React from 'react';
import { Container, TitleH1, SearchInput, Button } from "./index.styled";

const Title = () => {
    return (
        <Container>
            <TitleH1>IP FINDER</TitleH1>
            <SearchInput name='searchInput'/>
            <Button>Search</Button>
        </Container>
    );
};

export default Title;