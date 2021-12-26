import type { NextPage } from "next";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import { Episodes } from "../../types/episodes";
import { Error, Loading } from "../../components/index";

const EpisodesPage: NextPage = () => {
    const { data, error } = useApi(TYPES[2]);
    if (error) return <Error />;
    if (!data) return <Loading />;
    return (
        <Container>
            <h1>EPISODES</h1>
            {data.map((epiData: Episodes) => {
                return (
                    <div className="card-wrap" key={epiData.id}>
                        <ul>
                            <li className="title">{epiData.title}</li>
                            <li className="writers">Writers: {epiData.writers}</li>
                            <li className="year">
                                {epiData.originalAirDate}
                            </li>
                            <li className="desc">
                                description: {epiData.desc}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </Container>
    );
};

export default EpisodesPage;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    h1 {
        font-size: 64px;
    }
    .card-wrap {
        width: 300px;
        ul {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 15px;
            margin: 15px;
            border: 1px solid #fff;
            .title {
                margin-bottom: 24px;
                font-size: 24px;
            }
            .writers {
                font-size: 20px;
                padding-bottom: 15px
            }
            .year {
                margin-bottom: 15px;
            }
            .desc {
                display: -webkit-box;
                max-width: 200px;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            li {
                list-style: none;
            }
        }
    }
`;
