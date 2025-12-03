import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BasicLayout({ children }) {

    return (
        <div className="flex flex-col min-h-screen justify-between w-full">
            <div className="absolute top-0 left-0 w-full z-50">
                <Header />
            </div>
            {children}
            <Footer />
        </div>
    );
}
