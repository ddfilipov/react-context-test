import { FatherCounter } from "./FatherCounter";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    height: 500px;
    width: 1200px;
    border: 1px solid black;
`;

export const MainContainer = () => {
    const [totalClicks, settotalClicks] = useState<number>(0);

    const clicky = () => {
        settotalClicks(totalClicks + 1);
    };

    return (
        <Wrapper>
            <p>Clicks: {totalClicks}</p>
            <button onClick={clicky}>Click to increase total clicks</button>
            <Container>
                <FatherCounter />
                <FatherCounter />
                <FatherCounter />
            </Container>
        </Wrapper>
    );
};
