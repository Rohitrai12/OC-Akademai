import React from 'react'
import MeetTabs from './MeetTabs'

const Meet = () => {
  return (
    <div>
 <div className='container lg:w-[35%] w-[95%] m-auto mt-5 lg:py-16 text-center'>
 <h4 className="text-[#143D50] text-[12px] ">
          Meet
        </h4>
        <h2 className="lg:text-[40px] text-[35px] text-[#091D4F] font-semibold">
        The Instructure Learning <br />
        Platform
        </h2>
        <p className="text-[16px] text-[#143D50]">
        Every lesson has the power to change lives. Even more so with
        our teaching and learning solutions in your corner.
        </p>
 </div>
<MeetTabs />


    </div>
  )
}

export default Meet
