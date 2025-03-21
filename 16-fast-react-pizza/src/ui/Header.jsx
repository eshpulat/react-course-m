import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return (
        <header>
            <Link to="/">Fast react pizza Co.</Link>

            <SearchOrder />

            <p>Muhammad</p>
        </header>
    );
}

export default Header;
