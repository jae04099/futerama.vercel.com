import type { NextPage } from "next";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import { Info } from "../../types/Info";
import {Error, Loading} from "../../components/index"


const InfoPage: NextPage = () => {
    const {data, error} = useApi(TYPES[3]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <Container>
            <h1>INFORMATION</h1>
            {data.map((infoData: Info) => {
                return (
                    <div key={infoData.id}>
                                <p className="aired">Aired - {infoData.yearsAired}</p>
                                <p className="synopsis">{infoData.synopsis}</p>
                                <h2>CREATORS</h2>
                                {infoData.creators.map((e) => {
                                   return <span key={e.name}> {e.name}</span>
                                })}
                  
                    </div>
                )
            })}
        </Container>
    )
}

export default InfoPage;

const Container = styled.div`
    color: white;
    background: #222;
    width: 100%;
    height: 100vh;
    .aired {
        font-size: 32px;
        font-weight: bold;
    }
    h1 {
        font-size: 64px;
    }
    h2 {
        font-size: 32px;
    }
    .synopsis {
        font-size: 24px;
        line-height: 36px;
    }
`