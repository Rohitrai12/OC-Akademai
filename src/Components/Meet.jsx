import React from "react";
import MeetTabs from "./MeetTabs";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Meet = () => {
  return (
    <div>
      <div className="container lg:w-[35%] w-[95%] m-auto lg:mt-5 mt-10 lg:py-16 text-center">
        <ScrollAnimation
          animateIn="animate__backInLeft"
          animateOnce={true}
          duration={1.5} // Adjust duration for smoother transition
        >
          <h4 className="text-[#143D50] text-[12px] ">Meet</h4>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__backInRight"
          animateOnce={true}
          duration={1.5} // Adjust duration for smoother transition
        >
          <h2 className="lg:text-[40px] text-[24px] py-2 lg:py-0  lmd:text-[35px] text-[#091D4F] font-semibold">
            The Instructure Learning <br />
            Platform
          </h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__backInLeft"
          animateOnce={true}
          duration={1.5} // Adjust duration for smoother transition
        >
          <p className="text-[16px] text-[#143D50]">
            Every lesson has the power to change lives. Even more so with our
            teaching and learning solutions in your corner.
          </p>
        </ScrollAnimation>
      </div>
      <MeetTabs />
    </div>
  );
};

export default Meet;
