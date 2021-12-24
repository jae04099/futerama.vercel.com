import type { NextPage } from "next";
import styled from 'styled-components';
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import { Characters } from "../../types/characters";
import {Error, Loading} from "../../components/index"


const CharacterPage: NextPage = () => {
    const {data, error} = useApi(TYPES[1]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((characterData: Characters) => {
                return (
                    <div key={characterData.id}>
                                <p>{characterData.name.first} {characterData.name.middle} {characterData.name.last}</p>
                                <p>image:{characterData.images.main}</p>
                                <p>gender: {characterData.gender}</p>
                                <p>species: {characterData.species}</p>
                                <p>homePlanet: {characterData.homePlanet}</p>
                                <p>occupation: {characterData.occupation}</p>
                                <p>age: {characterData.age}</p>
                                <p>sayings: {characterData.sayings.map((e) => {
                                    return <li key={e}>{e}</li>})}
                                </p>

                    </div>
                )
            })}
        </div>
    )
}

export default CharacterPage;