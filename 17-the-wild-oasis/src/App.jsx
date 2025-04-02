import styled from "styled-components";
import GlobalStayles from "./styles/globalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStayles />
            <StyledApp>
                <Heading as="h1">the Wild oasis</Heading>
                <Heading as="h2">check in and out</Heading>
                <Button onClick={() => alert("check in")}>chek in</Button>
                <Button onClick={() => alert("check out")}>chek out</Button>
                <Heading as="h3">Form</Heading>
                <Input type="numbet" placeholder="Number the guest"></Input>
                <Input type="numbet" placeholder="Number the guest"></Input>
            </StyledApp>
        </>
    );
}

export default App;
