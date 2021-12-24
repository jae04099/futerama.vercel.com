import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import {Episodes} from '../../types/episodes';
import {Error, Loading} from "../../components/index";

const EpisodesPage: NextPage = () => {
    const {data, error} = useApi(TYPES[2]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((epiData: Episodes) => {
                return (
                    <div key={epiData.id}>
                        <ul>
                        <li>title: {epiData.title}</li>
                        <li>writers: {epiData.writers}</li>
                        <li>original air date: {epiData.originalAirDate}</li>
                        <li>description: {epiData.desc}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default EpisodesPage;