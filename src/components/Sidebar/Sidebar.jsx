import { NavTile } from "../../components";

import { useLogin } from "../../context";
import {
  Home,
  //  Cycle,
  Leaderboard,
  Logout,
} from "../../svg";
import { User } from "../../images";
import { useHistory } from "react-router-dom";
export const Sidebar = () => {
  const { userDispatch } = useLogin();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("hint");
    userDispatch({ type: "LOGOUT" });
  };
  return (
    <div
      className="flex flex-col 
    // shadow
    "
    >
      <nav className="pl-4 pb-4 md:pb-0 ">
        <NavTile
          icon={
            <div className="text-white text-gray-700	">
              <Home height="40px" width="40px" color="inherit" />
            </div>
          }
          label="Home"
          onClick={() => history.push("/")}
        />
        {/* <NavTile
          icon={
            <div className="text-white text-gray-700	">
              <Cycle height="40px" width="40px" color="inherit" />
            </div>
          }
          label="Practice"
          onClick={() => {
            history.pushState("/");
          }}
        /> */}

        <NavTile
          icon={
            <div className="text-white text-gray-700	">
              <Leaderboard height="40px" width="40px" color="inherit" />
            </div>
          }
          label="Leaderboard"
          onClick={() => history.push("/score")}
        />
      </nav>

      <nav className="px-4 md:pb-0 ">
        {/*  <NavTile
          icon={
            <div className="relative w-12 h-12">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src={User}
                //"https://randomuser.me/api/portraits/women/81.jpg"

                alt="user_image"
              />
            </div>
          }
          label="Leaderboard"
        /> */}

        <NavTile
          icon={
            <div className="text-white text-gray-500">
              {/* Logout */}
              <Logout height="30px" width="30px" color="inherit" />
            </div>
          }
          label="Leaderboard"
          onClick={() => handleLogout()}
        />
      </nav>
    </div>
  );
};
