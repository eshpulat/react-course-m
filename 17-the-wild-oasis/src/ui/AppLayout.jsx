import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidbar from "./Sidbar";
import styled from "styled-components";

const StyledApplayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
    return (
        <StyledApplayout>
            <Header />
            <Sidbar />
            <Main>
                <Outlet />
            </Main>
        </StyledApplayout>
    );
}

export default AppLayout;
