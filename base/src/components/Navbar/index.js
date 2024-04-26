import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <p className="title" onClick={scrollToTop}>NTS</p>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Aplicando a classe condicional diretamente no JSX */}
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <Link 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="service"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Service
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
