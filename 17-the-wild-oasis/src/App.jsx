import styled from "styled-components";
import GlobalStayles from "./styles/globalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
    /* background-color: orangered; */
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStayles />
            <StyledApp>
                <Row type="vertical">
                    <Row type="horizontal">
                        <Heading as="h1">the Wild oasis</Heading>
                        <div>
                            <Heading as="h2">check in and out</Heading>
                            <Button onClick={() => alert("check in")}>
                                chek in
                            </Button>
                            <Button
                                variation="secondary"
                                size="small"
                                onClick={() => alert("check out")}
                            >
                                chek out
                            </Button>
                        </div>
                    </Row>
                    <Row type="vertical">
                        <Heading as="h3">Form</Heading>
                        <form>
                            <Input
                                type="number"
                                placeholder="Number the guest"
                            ></Input>
                            <Input
                                type="number"
                                placeholder="Number the guest"
                            ></Input>
                        </form>
                    </Row>
                </Row>
            </StyledApp>
        </>
    );
}

export default App;
