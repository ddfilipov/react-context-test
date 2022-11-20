import { FC } from "react";
import styled from "styled-components";

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
    return (
        <Container>
            <h2>{name}</h2>
            <p>Clicks: {numberOfClicks}</p>
            <button onClick={clickFunction}>Click me</button>
        </Container>
    );
};
