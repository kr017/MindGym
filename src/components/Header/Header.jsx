import { useEffect, useState } from "react";
import Switch from "react-switch";
import { Moon, Sun } from "../../svg";
import { Logo } from "../../images";
export const Header = () => {
  let userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.remove("light");

      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between text-secondary shadow-sm p-4">
        <div className="flex">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "50px", width: "50px" }}
          />{" "}
          <span className="text-3xl font-bold ml-4	">Mind Gym</span>
        </div>
        <Switch
          onColor="#BFE6F6"
          offColor="#484848"
          onHandleColor="#F5EC27"
          offHandleColor="#FFFDF1"
          // className="h-32"
          boxShadow={"0 0 2px 3px #DFE4C6"}
          activeBoxShadow={"0 0 2px 3px #3bf"}
          onChange={() => handleSwitchTheme()}
          checked={theme}
          checkedIcon={
            <div>
              <Moon height="28px" width="30px" />
            </div>
          }
          uncheckedIcon={
            <div>
              <Sun height="28px" width="30px" />
            </div>
          }
        />
        {/* <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer /> */}
      </div>
    </div>
  );
};

/***
 
    <button
        id="switchTheme"
        onClick={() => setTheme(!theme)}
        className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

    // <svg viewBox="0 0 10 10" height="100%" width="100%" fill="white">
          //   <circle r={3} cx={5} cy={5} />
          // </svg>



           <svg
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              ></path>
            </svg> 
 */
