import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/image.png";

const MainPage: NextPage = () => {
    return (
        <Container>
            <div className="image-wrap">
            <Image src={logo} alt="main logo"  />
            </div>
        </Container>
    )
}

export default MainPage;

const Container = styled.div`
    background: #222;
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    .image-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1000px;
    }
    h1 {
        color: white;
        text-align: center;
        font-size: 64px;
    }
    
`