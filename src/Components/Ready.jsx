import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Ready = () => {
  return (
    <div className='bg-[#091D4F] p-10 lg:p-20 '>
      <div className='container m-auto'>
        <ScrollAnimation
          animateIn="animate__backInDown"
          animateOnce={true}
          duration={1.2}
        >
          <p className='font-semibold text-center text-white lg:text-[40px] text-[24px] md:text-[30px]'>Ready to explore our learning ecosystem?</p>
          <button
            className="mt-8 block m-auto px-6 w-fit rounded-full p-3 bg-[white] text-[#091D4F] font-semibold"
            style={{ boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)" }}
          >
            Let’s Get Started {" "}
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-2"
            >
              <g clip-path="url(#clip0_3_2563)">
                <path
                  d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                  fill="#091D4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_2563">
                  <rect
                    width="14"
                    height="20.3"
                    fill="white"
                    transform="matrix(1 0 0 -1 0.310059 20.48)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>{" "}
        </ScrollAnimation>


      </div>
    </div>
  )
}

export default Ready
