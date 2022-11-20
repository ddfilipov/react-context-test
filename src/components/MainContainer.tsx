import { FatherCounter } from "./FatherCounter";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
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
    return (
        <Wrapper>
            <Container>
                <FatherCounter />
                <FatherCounter />
                <FatherCounter />
            </Container>
        </Wrapper>
    );
};
