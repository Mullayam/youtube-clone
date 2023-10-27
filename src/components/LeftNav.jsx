import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { SideBarItems } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(Context);
      
    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
            className={`md:block w-[250px] overflow-y-auto h-full py-4    bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileMenu ? "translate-x-0" : ""
            }`}
        >
            <div className="flex px-5 flex-col">
                {SideBarItems["Top"].map((item) => {
                        return (
                            <React.Fragment key={item.name}>
                                <LeftNavMenuItem
                                    text={item.type === "home" ? "Home" : item.name}
                                    icon={item.icon}
                                    action={() => {
                                        clickHandler(item.name, item.type);
                                        navigate("/");
                                    }}
                                    className={`${
                                        selectedCategory === item.name
                                            ? "bg-white/[0.15]"
                                            : ""
                                    }`}
                                />
                                
                            </React.Fragment>
                        );
                    })}
            </div>
            <hr className="my-2 border-white/[0.2]" />
            <div className="flex px-5 flex-col">
            <h2 className="pt-1 px-3 text-white">You</h2>
                {SideBarItems["Middle"].map((item) => {
                        return (
                            <React.Fragment key={item.name}>
                                <LeftNavMenuItem
                                    text={item.type === "home" ? "Home" : item.name}
                                    icon={item.icon}
                                    action={() => {
                                        clickHandler(item.name, item.type);
                                        navigate("/");
                                    }}
                                    className={`${
                                        selectedCategory === item.name
                                            ? "bg-white/[0.15]"
                                            : ""
                                    }`}
                                />
                                
                            </React.Fragment>
                        );
                    })}
            </div>
            <hr className="my-2 border-white/[0.2]" />
            <div className="flex px-5 flex-col">
            <h2 className="pt-1 px-3 text-white">Explore</h2>
                {SideBarItems["Explore"].map((item) => {
                        return (
                            <React.Fragment key={item.name}>
                                <LeftNavMenuItem
                                    text={item.type === "home" ? "Home" : item.name}
                                    icon={item.icon}
                                    action={() => {
                                        clickHandler(item.name, item.type);
                                        navigate("/");
                                    }}
                                    className={`${
                                        selectedCategory === item.name
                                            ? "bg-white/[0.15]"
                                            : ""
                                    }`}
                                />
                                
                            </React.Fragment>
                        );
                    })}
            </div>
            <hr className="my-2 border-white/[0.2]" />
            <div className="flex px-5 flex-col">
           
                {SideBarItems["Manage"].map((item) => {
                        return (
                            <React.Fragment key={item.name}>
                                <LeftNavMenuItem
                                    text={item.type === "home" ? "Home" : item.name}
                                    icon={item.icon}
                                    action={() => {
                                        clickHandler(item.name, item.type);
                                        navigate("/");
                                    }}
                                    className={`${
                                        selectedCategory === item.name
                                            ? "bg-white/[0.15]"
                                            : ""
                                    }`}
                                />
                                
                            </React.Fragment>
                        );
                    })}
            </div>
            <hr className="my-2 border-white/[0.2]" />
        </div>
    );
};

export default LeftNav;
