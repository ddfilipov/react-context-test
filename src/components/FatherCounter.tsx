import styled from "styled-components";

const Container = styled.div`
    border: 1px solid blue;
    min-height: 300px;
    min-width: 600px;
`;
export const FatherCounter = () => {
    return <Container>Father Component</Container>;
};
