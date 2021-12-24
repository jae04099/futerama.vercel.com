import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import  {Inventory} from "../../types/inventory";
import {Error, Loading} from "../../components/index"; 

const InvenPage: NextPage = () => {
    const {data, error} = useApi(TYPES[4]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((invenData: Inventory) => {
                return (
                    <div key={invenData.id}>
                                <p>title: {invenData.title}</p>
                                <p>category:{invenData.category}</p>
                                <p>description:{invenData.description}</p>
                                <p>slogan:{invenData.slogan}</p>
                                <p>price:{invenData.price}</p>
                                <p>stock:{invenData.stock}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default InvenPage;