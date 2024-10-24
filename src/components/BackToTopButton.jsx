import { useState, useEffect } from "react";
import styled from "styled-components";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Memeriksa posisi scroll untuk menampilkan atau menyembunyikan tombol
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <StyledWrapper>
        <button className="button" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </StyledWrapper>
    )
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #6b7280; /* Neutral gray */
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(107, 114, 128, 0.25); /* Soft shadow */
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white; /* Icon color */
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #4b5563; /* Darker neutral gray on hover */
    align-items: center;
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white; /* Text color */
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }
`;

export default BackToTopButton;
