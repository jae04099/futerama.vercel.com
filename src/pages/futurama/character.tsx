import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import { Characters } from "../../types/characters";
import { Error, Loading } from "../../components/index";

const CharacterPage: NextPage = () => {
    const { data, error } = useApi(TYPES[1]);
    if (error) return <Error />;
    if (!data) return <Loading />;
    return (
        <Container>
            <h1>CHARACTERS</h1>
            <main>
            {data.map((characterData: Characters) => {
                return (
                    <ul key={characterData.id}>
                        <li className="char-name">
                            {characterData.name.first}{" "}
                            {characterData.name.middle}{" "}
                            {characterData.name.last}
                        </li>
                        <Image
                            src={characterData.images.main}
                            alt="character"
                            width={100}
                            height={100}
                        />
                        <li>gender: {characterData.gender}</li>
                        <li>species: {characterData.species}</li>
                        <li>homePlanet: {characterData.homePlanet}</li>
                        <li>occupation: {characterData.occupation}</li>
                        <li>age: {characterData.age}</li>
                        <li className="sayings">
                            sayings:{" "}
                            {characterData.sayings.map((e) => {
                                return <li key={e}>- {e}</li>;
                            })}
                        </li>
                    </ul>
                );
            })}
            </main>
        </Container>
    );
};

export default CharacterPage;

const Container = styled.div`
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width:100%;
    height: 100%;
    h1 {
        font-size: 64px;
    }
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    ul {
        padding: 20px;
        margin: 20px;
        border: 1px solid #fff;
    }
    li {
        list-style: none;
        margin-top: 15px;
    }
    .char-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 24px;
    }
    .sayings {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; 
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
`;
