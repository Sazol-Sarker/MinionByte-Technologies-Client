
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="flex flex-col">
            {/* Main layout */}
            <NavBar></NavBar>
            <main className="flex-1">
            <Outlet />

            </main>
            <footer className="fixed bottom-0 w-full ">

            <Footer></Footer>
            </footer>
        </div>
    );
};

export default Main;