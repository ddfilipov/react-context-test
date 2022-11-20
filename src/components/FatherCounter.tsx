import { FC, useContext } from "react";
import styled from "styled-components";
import { MyContext } from "./MainContainer";

const Container = styled.div`
    border: 1px solid blue;
    min-height: 300px;
    min-width: 300px;
`;

interface FatherCounterProps {
    numberOfClicks: number;
    clickFunction: () => void;
    name: string;
}

export const FatherCounter: FC<FatherCounterProps> = ({ clickFunction, numberOfClicks, name }) => {
    const totalClicksContext = useContext(MyContext);

    return (
        <Container>
            <h2>{name}</h2>
            <p>Total Clicks: {totalClicksContext}</p>
            <p>Component Clicks: {numberOfClicks}</p>
            <button onClick={clickFunction}>Click me</button>
        </Container>
    );
};
