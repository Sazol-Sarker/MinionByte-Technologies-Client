
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Main = () => {
    return (
        <div className="flex flex-col">
            {/* Main layout */}
            <NavBar></NavBar>
            <main className="flex-1">
            <Outlet />

            </main>
        </div>
    );
};

export default Main;