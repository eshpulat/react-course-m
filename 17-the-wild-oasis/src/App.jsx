import styled from "styled-components";
import GlobalStayles from "./styles/globalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: yellow;
`;

const StyledApp = styled.div`
    background-color: orangered;
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStayles />
            <StyledApp>
                <H1>the Wild oasis</H1>
                <Button onClick={() => alert("check in")}>chek in</Button>
                <Button onClick={() => alert("check out")}>chek out</Button>
                <Input type="numbet" placeholder="Number the guest"></Input>
                <Input type="numbet" placeholder="Number the guest"></Input>
            </StyledApp>
        </>
    );
}

export default App;
