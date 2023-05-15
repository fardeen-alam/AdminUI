import {
    ChatBubbleOutlineOutlined,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LanguageOutlined,
    LightModeOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input"
                    />
                    <SearchOutlined className="search-btn" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    <div className="item">
                        {darkMode ? (
                            <LightModeOutlined
                                className="icon"
                                onClick={() => dispatch({ type: "TOGGLE" })}
                            />
                        ) : (
                            <DarkModeOutlined
                                className="icon"
                                onClick={() => dispatch({ type: "TOGGLE" })}
                            />
                        )}
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncetrbBeHtpaWXI08qpo8CBo3KZVf2S55cg&usqp=CAU"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
