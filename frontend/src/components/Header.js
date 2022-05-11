import '../styles/Header.css';
import logo from '../assets/images/icons8-tent-48.png';
import {useState} from "react";

function MainHeader() {
    return (
        <>
            <header>
                <div className={"header_top"}>
                    <div className={"container"}>
                        <div className={"inner-container"}>
                            <div className={"item1"}>
                                <img width={"32"} height={"34"} src={logo} alt={"logo"}/>

                            </div>
                            <div className={"item2"}>

                            </div>
                        </div>
                        <div className={"inner-container"}>
                            <div className={"item1"}>
                                로그인/회원가입
                            </div>
                            <div className={"item2"}>
                                프로필
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"header_bottom"}>
                    <div className={"container"}>
                        <div className={"item1"}>
                            빌리고 싶은 물건을 알려주세요.
                        </div>
                        <div className={"item2"}>
                            <input id={"searchKey"} type={"text"}/>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default MainHeader;