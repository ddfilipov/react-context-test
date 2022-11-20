import { FatherCounter } from "./FatherCounter";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
    min-height: 300px;
    min-width: 600px;
`;

export const MainContainer = () => {
    return (
        <>
            <FatherCounter />
            <FatherCounter />
            <FatherCounter />
        </>
    );
};
