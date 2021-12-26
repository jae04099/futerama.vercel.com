import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import { Cast } from "../../types/cast";
import Image from "next/image";
import {Error, Loading} from "../../components/index"
import styled from "styled-components";

const CastPage: NextPage = () => {
    const {data, error} = useApi(TYPES[0]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <Container>
            <h1>CAST</h1>
            {data.map((castData: Cast) => {
                return (
                    <ul key={castData.id}>
                                <li className="name">{castData.name}</li>
                                <li>born:{castData.born}</li>
                    </ul>
                )
            })}
        </Container>
    )
}

export default CastPage;

const Container = styled.div`
    background: #222;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    h1 {
        font-size: 64px;
    }
    ul {
        width: 300px;
        height: 100%;
        border: 1px solid #fff;
        padding: 15px;
        margin: 15px;
    }
    li {
        list-style: none;
    }
    .name {
        font-size: 24px;
        font-weight: bold;
    }
`