import { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleResize = () => {
            // Reset the popup checkbox when the screen is resized to larger than mobile
            if (window.innerWidth > 768) {
                const checkbox = document.querySelector('.popup input');
                if (checkbox) {
                    checkbox.checked = false;
                }
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <StyledWrapper>
            <nav className="mb-20 flex items-center justify-between py-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img className="mx-2 w-10" src={logo} alt="logo" />
                </div>

                {/* Navigation Buttons for Larger Screens */}
                <div className="hidden md:flex items-center gap-4 ml-auto">
                    <button onClick={() => handleScroll('hero')} className="px-3 py-2 transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-100">
                        Home
                    </button>
                    <button onClick={() => handleScroll('about')} className="px-3 py-2 transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-100">
                        About
                    </button>
                    <button onClick={() => handleScroll('technologies')} className="px-3 py-2 transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-100">
                        Technologies
                    </button>
                    <button onClick={() => handleScroll('certification')} className="px-3 py-2 transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-100">
                        Certification
                    </button>
                    <button onClick={() => handleScroll('projects')} className="px-3 py-2 transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-100">
                        Projects
                    </button>
                    <button onClick={() => handleScroll('contact')} className="px-3 py-2 transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-100">
                        Contact
                    </button>
                </div>

                {/* Dropdown for Smaller Screens */}
                <label className="popup md:hidden">
                    <input type="checkbox" />
                    <div className="burger" tabIndex={0}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <nav className="popup-window">
                        <ul>
                            <li><button onClick={() => handleScroll('hero')}>Home</button></li>
                            <li><button onClick={() => handleScroll('about')}>About</button></li>
                            <li><button onClick={() => handleScroll('technologies')}>Technologies</button></li>
                            <li><button onClick={() => handleScroll('certification')}>Certification</button></li>
                            <li><button onClick={() => handleScroll('projects')}>Projects</button></li>
                            <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
                        </ul>
                    </nav>
                </label>
            </nav>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .popup {
        display: inline-block;
        text-rendering: optimizeLegibility;
        position: relative;
    }

    .popup input {
        display: none;
    }

    .burger {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.15);
        width: 2.125em;
        height: 2.125em;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.1s ease-in-out;
    }

    .burger span {
        height: 0.125em;
        width: 1.125em;
        background: #fff; /* White burger icon */
        border-radius: 0.1875em;
        position: absolute;
        transition: 0.3s;
    }

    .burger span:nth-child(1) {
        top: 0.625em;
    }

    .burger span:nth-child(2) {
        bottom: 0.625em;
    }

    .burger span:nth-child(3) {
        top: 50%;
        transform: translateY(-50%);
    }

    .popup-window {
        transform: scale(0.8);
        visibility: hidden;
        opacity: 0;
        position: absolute;
        background: #eee;
        padding: 0.625em 0.25em;
        top: calc(2.125em + 0.125em);
        right: 0; /* Align dropdown to the right */
        border-radius: 0.375em;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        transition: all 0.1s ease-in-out;
        z-index: 1000; /* Ensure dropdown is above other elements */
    }

    .popup-window ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .popup-window ul li {
        margin-bottom: 0.5em;
    }

    .popup-window ul li button {
        display: block;
        width: 100%;
        background: none;
        border: none;
        padding: 0.375em 1rem;
        text-align: left;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s, color 0.3s;
        border-radius: 0.375em;
    }

    .popup-window ul li button:hover {
        background: rgba(128, 128, 128, 0.3); /* Transparent gray */
        color: #fff;
    }

    .popup input:checked + .burger span:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }

    .popup input:checked + .burger span:nth-child(2) {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
    }

    .popup input:checked + .burger span:nth-child(3) {
        transform: translateX(-100%);
    }

    .popup input:checked ~ .popup-window {
        transform: scale(1);
        visibility: visible;
        opacity: 1;
    }

    /* Media query to hide the burger icon on larger screens */
    @media (min-width: 768px) {
        .burger {
            display: none;
        }
    }
`;

export default Navbar;
