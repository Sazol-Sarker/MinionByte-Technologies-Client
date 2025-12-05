
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* Main layout */}
            <Outlet />
        </div>
    );
};

export default Main;