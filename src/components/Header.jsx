import { useEffect } from "react";
import { useRef, useState } from "react";
import { BsFillSunFill, BsMoon } from "react-icons/bs";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsChecked(true)
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, []);

  const toogleDark = useRef(document.documentElement.className === "dark");

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDarkMode = () => {
    toogleDark.value = document.documentElement.classList.toggle("dark");
    toogleDark.value
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md dark:shadow-none dark:text-white">
      <div className="contenedor flex items-center  justify-between py-5 lg:py-8">
        <h1 className="font-bold lg:text-2xl">Where in the world?</h1>

        <div className="flex flex-row-reverse gap-2 items-center">
          <input
            className="hidden"
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={handleChange}
          />
          <label
            className="font-semibold"
            htmlFor="check"
            onClick={handleDarkMode}
          >{!isChecked ? 'Dark Mode' : 'Ligth Mode'}</label>

          {
            isChecked ? <BsFillSunFill/> : <BsMoon/>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
