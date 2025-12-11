import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BasicLayout({ children }) {

    return (
        <div className="flex flex-col min-h-screen gap-50 justify-between w-full">
            <div className="absolute top-0 left-0 w-full z-[9999]">
                <Header />
            </div>
            {children}
            <Footer />
        </div>
    );
}
