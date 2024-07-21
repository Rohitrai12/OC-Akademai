import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Help1 from "../assets/Images/help-1.png";
import Help2 from "../assets/Images/help-2.png";
import Help3 from "../assets/Images/help-3.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const WhoeWeHelp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("animate");
        }
      });
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Initial check when component mounts
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container m-auto mt-10 lg:mt-0">
      <div className="lg:w-[35%] w-[95%] m-auto mt-5 lg:py-16 text-center animate-on-scroll">
        <h4 className="text-[#143D50] text-[12px] font-medium ">WHO WE HELP</h4>
        <h2 className="lg:text-[40px] md:text-[35px] text-[24px]  text-[#091D4F] font-semibold">
          Instructure Love for Every <br />
          Level of Learning
        </h2>
      </div>

      <div className="lg:flex justify-evenly">
        <div className="text-center lg:w-[25%] w-[80%] m-auto lg:m-0 animate-on-scroll">
          <img src={Help1} alt="" className="m-auto w-[55%]" />
          <h3 className="text-[#091D4F] text-[20px] lg:text-[30px] font-semibold">
            K-12
          </h3>
          <p className="lg:text-[16px] text-[14px] text-[#143D50]">
            A lot changes between that K and that 12. Our platform supports
            every student, at every stage, in any environment.
          </p>
          <Link to="#" className="text-[#091D4F] tex-[16px]">
            Learn More{" "}
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-2"
            >
              {/* SVG code */}
            </svg>
          </Link>
        </div>
        <div className="text-center lg:w-[25%] w-[80%] m-auto lg:m-0 animate-on-scroll">
          <img src={Help2} alt="" className="m-auto w-[55%]" />
          <h3 className="text-[#091D4F] text-[20px] lg:text-[30px] font-semibold">
            Higher Ed
          </h3>
          <p className="lg:text-[16px] text-[14px] text-[#143D50]">
            Our solutions make educators more effective and students more
            successful, both in school and beyond.
          </p>
          <Link to="#" className="text-[#091D4F] tex-[16px]">
            Learn More{" "}
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-2"
            >
              {/* SVG code */}
            </svg>
          </Link>
        </div>
        <div className="text-center lg:w-[25%] w-[80%] m-auto lg:m-0 animate-on-scroll">
          <img src={Help3} alt="" className="m-auto w-[55%]" />
          <h3 className="text-[#091D4F]text-[20px] lg:text-[30px] font-semibold">
            Professional Ed
          </h3>
          <p className="lg:text-[16px] text-[14px] text-[#143D50]">
            To work is to learn. But when work takes extra learning, our tools
            make it extra intuitive, engaging, and effective.
          </p>
          <Link to="#" className="text-[#091D4F] tex-[16px]">
            Learn More{" "}
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-2"
            >
              {/* SVG code */}
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoeWeHelp;
