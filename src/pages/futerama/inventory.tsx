import type { NextPage } from "next";
import styled from 'styled-components';
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import  {Inventory} from "../../types/inventory";
import {Error, Loading} from "../../components/index"; 

const InvenPage: NextPage = () => {
    const {data, error} = useApi(TYPES[4]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <Container>
            <h1>INVENTORY</h1>
            {data.map((invenData: Inventory) => {
                return (
                    <div className="inven-wrap" key={invenData.id}>
                                <p className="title">{invenData.title}</p>
                                <p>category: {invenData.category}</p>
                                <p>{invenData.description}</p>
                                <p>slogan: {invenData.slogan}</p>
                                <p>price: {invenData.price}</p>
                                <p>stock: {invenData.stock}</p>
                                <br/>
                    </div>
                )
            })}
        </Container>
    )
}

export default InvenPage;

const Container = styled.div`
width: 100%;
height: 100%;
padding: 15px;
    background: #222;
    color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    justify-content: space-between;
    h1 {
        font-size: 64px;
    }
    .inven-wrap {
        width: 300px;
        padding: 15px;
        border-bottom: 1px solid #fff;
    }
    .title {
        font-size: 24px;
        font-weight: bold;
    }
`