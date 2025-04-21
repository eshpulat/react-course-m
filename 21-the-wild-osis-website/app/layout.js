import Logo from "./component/Logo";
import Navigation from "./component/Navigation";

export const metadata = {
    title: "the wild Oasis"
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <header>
                    <Logo />
                    <Navigation />
                </header>
                <main>{children}</main>
                <footer>Copyright by The Wild oasis</footer>
            </body>
        </html>
    );
}
