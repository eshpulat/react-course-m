import Link from "next/link";
import Navigation from "./component/Navigation";

export default function Page() {
    return (
        <div>
            <Navigation />
            <h1>The Wild Oasis</h1>
            <Link href="cabins">Cabins</Link>
        </div>
    );
}
