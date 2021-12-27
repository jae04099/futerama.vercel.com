import Link from "next/link";
import styled from "styled-components";
import { ROUTES_ENDPOINT, TYPES } from "../../constants";


export const Navigation = () => {
    return (
        <Header>
            <h1>Welcome to the Futurama World</h1>
            <nav>
                <ul>
                    {
                        TYPES.map((routeObject: string) => {
                            return (
                                <li key={routeObject}>
                                    <Link href={`${ROUTES_ENDPOINT}${routeObject}`}>
                                        <a>{routeObject}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 34px;
    color: #fff;
    background: #222;
    border-bottom: 1px solid #fff;
    ul {
        display: flex;
    }
     li {
        list-style: none;
        font-size: 24px;
        margin-left: 15px;
    }
`