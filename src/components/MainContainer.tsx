import { FatherCounter } from "./FatherCounter";
import styled from "styled-components";
import { createContext, useState } from "react";

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

export const MyContext = createContext<number | undefined>(undefined);

export const MainContainer = () => {
    const [totalClicks, settotalClicks] = useState<number>(0);
    const [clicksA, setClicksA] = useState<number>(0);
    const [clicksB, setClicksB] = useState<number>(0);
    const [clicksC, setClicksC] = useState<number>(0);

    const clickA = () => {
        setClicksA(clicksA + 1);
        settotalClicks(totalClicks + 1);
    };
    const clickB = () => {
        setClicksB(clicksB + 1);
        settotalClicks(totalClicks + 1);
    };
    const clickC = () => {
        setClicksC(clicksC + 1);
        settotalClicks(totalClicks + 1);
    };

    return (
        <MyContext.Provider value={totalClicks}>
            <Wrapper>
                <p>Clicks: {totalClicks}</p>
                <button onClick={() => settotalClicks(totalClicks + 1)}>Click to increase total clicks</button>
                <Container>
                    <FatherCounter clickFunction={clickA} numberOfClicks={clicksA} name={"Counter 1"} />
                    <FatherCounter clickFunction={clickB} numberOfClicks={clicksB} name={"Counter 2"} />
                    <FatherCounter clickFunction={clickC} numberOfClicks={clicksC} name={"Counter 3"} />
                </Container>
            </Wrapper>
        </MyContext.Provider>
    );
};
