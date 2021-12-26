import styled from "styled-components";
import React from "react";
import {Navigation} from "../layouts/Navigation";

export const Layout: React.FC = ({children}) => {
    return (
        <Wrap>
            <Navigation />
            <Container>
                {children}
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
    background: #222;
`

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`