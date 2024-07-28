import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center min-h-screen px-4 md:px-12 py-6 md:py-12 bg-gradient-to-r from-[#f2f8fa] to-[#e6f3f7] lg:mt-[175px]">
      {/* Contact Information Section */}
      <div className="flex-1 lg:text-left text-center lg:mr-8 mb-6 lg:mb-0 px-4 lg:px-0 lg:mt-0 lg:ml-20 mt-[24px]">
        <h2 className="text-sm font-extrabold text-[#003e50] mb-2">
          CONTACT US
        </h2>
        <h1 className="font-bold text-[#003e50] mb-6 leading-tight text-4xl lg:text-6xl w-[59%]">
          We are here and <span className="text-red-600">ready to help</span>
        </h1>
        <p className="text-[#004d60] mb-4 text-sm lg:text-base">
          Drop us a line, give us a call, or get in touch with one of our
          regional offices.
        </p>
        <p className="text-[#004d60] text-sm lg:text-base">
          For general inquiries, please email{" "}
          <a
            href="mailto:info@jovannotti.com"
            className="text-red-600 hover:underline"
          >
            info@jovannotti.com
          </a>
          .
        </p>

        {/* Call Us Now Section */}
        <div className="mt-8">
          <h1 className="text-2xl lg:text-3xl text-[#006581] font-bold mb-4">
            Call Us
          </h1>
          <p className="text-[#004d60] mb-6">
            Give us a ring on our main corporate line.
          </p>
          <button
            onClick={() => (window.location.href = "tel:1-800-203-6755")}
            className="rounded-full text-red-600 bg-white transition duration-300 px-6 py-3 text-center font-semibold shadow-2xl active:scale-90"
          >
            1-800-203-6755
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 bg-white rounded-xl p-6 md:p-8 max-w-xl w-full shadow-2xl lg:m-0 m-auto">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#003e50] mb-4">
          Contact Us
        </h1>
        <form action="https://formspree.io/f/manwepej" method="POST">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* First Row */}
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="firstName"
              >
                *First Name
              </label>
              <input
                id="firstName"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Jovan"
                type="text"
                name="user_firstName"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="lastName"
              >
                *Last Name
              </label>
              <input
                id="lastName"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Kalyango"
                type="text"
                name="user_lastName"
              />
            </div>

            {/* Second Row */}
            <div className="sm:col-span-2">
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="email"
              >
                *Work Email Address
              </label>
              <input
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="example@domain.com"
                type="email"
                name="user_email"
              />
            </div>

            {/* Third Row */}
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="phone"
              >
                *Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="+1 (123) 456-7890"
                name="user_phone"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="country"
              >
                *Country
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                name="user_country"
              >
                <option value="">Select your country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="it">Italy</option>
                <option value="es">Spain</option>
                <option value="jp">Japan</option>
                <option value="cn">China</option>
                <option value="in">India</option>
                <option value="br">Brazil</option>
                <option value="za">South Africa</option>
                <option value="mx">Mexico</option>
                <option value="kr">South Korea</option>
                <option value="nl">Netherlands</option>
                <option value="se">Sweden</option>
                <option value="no">Norway</option>
                <option value="dk">Denmark</option>
                <option value="fi">Finland</option>
                <option value="ru">Russia</option>
                <option value="ch">Switzerland</option>
                <option value="ar">Argentina</option>
                <option value="cl">Chile</option>
                <option value="co">Colombia</option>
                <option value="pl">Poland</option>
                <option value="be">Belgium</option>
                <option value="pt">Portugal</option>
                <option value="ie">Ireland</option>
                <option value="gr">Greece</option>
                <option value="tr">Turkey</option>
                <option value="sa">Saudi Arabia</option>
                <option value="ae">United Arab Emirates</option>
                <option value="sg">Singapore</option>
                <option value="my">Malaysia</option>
                <option value="th">Thailand</option>
                <option value="vn">Vietnam</option>
                <option value="ph">Philippines</option>
                <option value="nz">New Zealand</option>
              </select>
            </div>

            {/* Fourth Row */}
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="jobTitle"
              >
                *Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Your job title"
                name="user_jobTitle"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="organization"
              >
                *School / Organization
              </label>
              <input
                id="organization"
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Your school or organization"
                name="user_organization"
              />
            </div>

            {/* Fifth Row */}
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="orgType"
              >
                *Organization Type
              </label>
              <select
                id="orgType"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                name="user_orgType"
              >
                <option value="">Select organization type</option>
                <option value="school">School</option>
                <option value="university">University</option>
                <option value="business">Business</option>
                <option value="non-profit">Non-Profit</option>
                <option value="government">Government</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="needs"
              >
                *Which best describes your needs?
              </label>
              <select
                id="needs"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                name="user_needs"
              >
                <option value="">Select your needs</option>
                <option value="training">Training</option>
                <option value="consultation">Consultation</option>
                <option value="partnership">Partnership</option>
                <option value="information">Information</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Sixth Row */}
            <div className="sm:col-span-2">
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="message"
              >
                *Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Write your message here"
                rows="4"
                name="user_message"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#003e50] text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-red-600 active:scale-95 shadow-2xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
