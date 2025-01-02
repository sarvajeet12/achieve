import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Style from "./dark-light.module.css"

const DarkLightTheme = ({ theme, setTheme }) => {



    return (
        <div className={Style.darkLight} onClick={() => setTheme(!theme)} title={theme ? "light" : "dark"}>
            {
                theme ? <CiLight style={{ color: "#fff", fontWeight: "bold" }} /> : <MdDarkMode />
            }
        </div>
    )
}

export default DarkLightTheme