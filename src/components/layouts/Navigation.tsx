import Link from "next/link";
import styled from "styled-components";
import { ROUTES_ENDPOINT, TYPES, MAIN_ENDPOINT } from "../../constants";


export const Navigation = () => {
    return (
        <Header>
            <Link href={`${MAIN_ENDPOINT}`}>
            <a>Welcome to the Futurama World</a>
            </Link>
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