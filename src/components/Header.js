import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
const Header = () => {

    const [show, setShow] = useState(0)
    return (
        <header className="header" id="header">
            <div className="nav">
                <div className="nav_common grid">
                    <div className="nav_left">
                        <div className="info">
                            <i className="fa-solid fa-square-phone icons"></i>
                            <div className="contact">
                                <a className="tel" href="tel:0398111398">
                                    039.811.1398
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <i className="fa-solid fa-location-dot icons"></i>
                            <div className="contact">
                                105 2/4 Nha Trang city
                            </div>
                        </div>
                    </div>
                    <div className="nav_left nav_right">
                        <div className="info">
                            <i className="fa-solid fa-envelope icons"></i>
                            <div className="contact">
                                <a className="tel" href="email:seannguyenit@gmail.com">
                                    seannguyenit@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <a href="">
                                <i className="fa-solid fa-globe icons"></i>
                                <i className="fa-brands fa-facebook icons"></i>
                                <i className="fa-brands fa-twitter icons"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container grid">
                <div className="logo">

                    {/* <a href="" className="logo_link"> */}
                    <Link to="/" className="logo_link">
                        <img src="./assets/hinhanh/logo.png" alt="" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} />
                    </Link>
                </div>
                <div className="bar_menu" id="bar-menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <ul className="ul_list-item" id="mobile-menu">
                    <li className="li_list-item">
                        <a className="list_item-link"
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                        >Home</a>
                    </li>
                    <li className="li_list-item">
                        {/* <a className="list_item-link">About</a> */}
                        <Link className="li_list-item" to="/about">
                            Gi???i thi???u
                        </Link>
                    </li>

                    <li className="li_list-item">
                        <a className="list_item-link">D???ch v???</a>
                        <ul>
                            <li>
                                <a href="http://127.0.0.1:5500/dv_page/index.html" className="menu_link">
                                    D???ch V??? Thi???t k??? Web Chuy??n nghi???p
                                </a>
                            </li>
                            <li><a href="http://127.0.0.1:5500/dv_page/index.html" className="menu_link">
                                X??y d???ng ph???n m???m
                            </a></li>
                            <li><a href="http://127.0.0.1:5500/dv_page/index.html" className="menu_link">
                                X??y d???ng app ??i???n tho???i
                            </a></li>
                            <li><a href="http://127.0.0.1:5500/dv_page/index.html" className="menu_link">
                                Qu???n tr??? d??? li???u
                            </a></li>
                            <li><a href="http://127.0.0.1:5500/dv_page/index.html" className="menu_link">
                                T?? v???n IT , chuy???n ?????i s???
                            </a></li>
                            <li><a href="http://127.0.0.1:5500/dv_page/index.html" className="menu_link">
                                H??? th???ng IOT
                            </a></li>
                        </ul>
                    </li>
                    <li className="li_list-item">
                        <a className="list_item-link"
                        />T??i li???u
                    </li>

                    {/* <Link className="li_list-item" to="/tailieu">T??i li???u</Link> */}
                    <li className="li_list-item">
                        {/* <a className="list_item-link">Li??n h???</a> */}
                        <Link className="li_list-item" to="/lienhe">Li??n H???</Link>
                    </li>
                </ul>
                <Link className="li_list-item baogia" id="baogia" to="/baogia" >B??o gi??</Link>
                {/* <div className="li_list-item" id="baogia"> */}
                {/* <a className="btn_baogia">B??o gi??</a> */}

                {/* </div> */}
            </div>
        </header>
    )
}

export default Header