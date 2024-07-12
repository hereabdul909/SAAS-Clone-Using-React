import React, { useRef } from "react";
import { Fixed, Head } from "./StyledNavbar";
import { FaUserPlus, FaWindowClose } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiAlignRight } from "react-icons/fi";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
function Navbar() {
  const Menu = useRef(null);
  const toggleMenu = () => {
    Menu.current.style.right = "0";
  };
  const closeMenu = () => {
    Menu.current.style.right = "-100%";
  };
  return (
    <Fixed>
      <Head className="container-xxl">
        <div className="logo">
          <img
            src="https://cdn.wewantsaas.com/landing-page/images/SVG/wws_logo.svg"
            alt="Logo"
            width="30px"
          />
        </div>
        <div className="menu" ref={Menu}>
          <ul>
            <li className="close">
              <FaWindowClose onClick={closeMenu} />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="staff">
              <a href="#">
                Staff Augmentation
                <IoMdArrowDropdown />
              </a>
              <div className="dropdown">
                <div className="d-xxl-flex">
                  <div>
                    <RiAlarmWarningFill className="icon" />
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                    <a className="link" href="#">
                      Find Out More
                    </a>
                  </div>
                  <div>
                    <AiOutlineStock className="icon" />
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                    <a className="link" href="#">
                      Find Out More
                    </a>
                  </div>
                  <div>
                    <TfiWrite className="icon" />
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                    <a className="link" href="#">
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="cate">
              <a href="#">
                Categories
                <IoMdArrowDropdown />
              </a>
              <div className="dropdown-2">
                <div className="d-xxl-flex">
                  <div>
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                  </div>
                  <div>
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                  </div>
                  <div>
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                  </div>
                  <div>
                    <h4>Saas Digital Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque consequuntur dolore cum.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">List Your Porducts</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li className="blog">
              <a href="#">
                Blogs
                <IoMdArrowDropdown />
              </a>
              <div className="dropdown-3">
                <p>Saas</p>
              </div>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="button">
            <a href="#">
              <FaUserPlus /> Log In
            </a>
          </div>
        </div>
        <div className="btn">
          <FiAlignRight onClick={toggleMenu} />
        </div>
      </Head>
    </Fixed>
  );
}

export default Navbar;
