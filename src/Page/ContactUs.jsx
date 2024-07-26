import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    jobTitle: "",
    organization: "",
    orgType: "",
    needs: "",
    help: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      jobTitle: formData.jobTitle,
      organization: formData.organization,
      orgType: formData.orgType,
      needs: formData.needs,
      help: formData.help,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-12 py-6 md:py-12 mt-[175px] pl-[80px] bg-gradient-to-r from-[#f2f8fa] to-[#e6f3f7]">
      {/* Contact Information Section */}
      <div className="flex-1 md:mr-8 mb-6 md:mb-0 px-4 md:px-0 mt-[-322px] ml-[83px]">
        <h2 className="text-[14px] font-extrabold text-[#003e50] mb-2">
          CONTACT US
        </h2>
        <h1 className="font-bold text-[#003e50] mb-6 leading-[73px] w-[537px] text-[4rem]">
          We are here and <span className="text-red-600">ready to help</span>
        </h1>
        <p className="text-[#004d60] mb-4 text-sm md:text-base">
          Drop us a line, give us a call, or get in touch with one of our
          regional offices.
        </p>
        <p className="text-[#004d60] text-sm md:text-base">
          For general inquiries, please email{" "}
          <a
            href="mailto:info@instructure.com"
            className="text-red-600 hover:underline"
          >
            info@instructure.com
          </a>
          .
        </p>

        {/* Call Us Now Section */}
        <div className="mt-8">
          <h1 className="text-2xl md:text-3xl text-[#006581] font-bold mb-4">
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
      <div className="flex-1 bg-white rounded-lg p-6 md:p-8 max-w-xl w-full shadow-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#003e50] mb-4">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
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
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                aria-required="true"
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
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                aria-required="true"
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
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="example@domain.com"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
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
                value={formData.phone}
                onChange={handleChange}
                aria-required="true"
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
                aria-required="true"
                value={formData.country}
                onChange={handleChange}
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
                value={formData.jobTitle}
                onChange={handleChange}
                aria-required="true"
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
                placeholder="School or Organization"
                value={formData.organization}
                onChange={handleChange}
                aria-required="true"
              />
            </div>

            {/* Fifth Row */}
            <div className="sm:col-span-2">
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="orgType"
              >
                *Organization Type
              </label>
              <select
                id="orgType"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={formData.orgType}
                onChange={handleChange}
                aria-required="true"
              >
                <option value="">Select organization type</option>
                <option value="Corporate Education">Corporate Education</option>
                <option value="Further Education">Further Education</option>
                <option value="Government">Government</option>
                <option value="Higher Ed">Higher Ed</option>
                <option value="K12">K12</option>
                <option value="RTO/Training">RTO/Training</option>
                <option value="EdTech">EdTech</option>
              </select>
            </div>

            {/* Sixth Row */}
            <div className="sm:col-span-2">
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="needs"
              >
                *Which best describes your needs?
              </label>
              <select
                id="needs"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={formData.needs}
                onChange={handleChange}
                aria-required="true"
              >
                <option value="">Select your need</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="connect with sales">
                  I want to connect with sales.
                </option>
                <option value="parent/teacher needing support">
                  I'm a student/parent/teacher needing support.
                </option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            {/* Seventh Row */}
            <div className="sm:col-span-2">
              <label
                className="block text-gray-700 text-sm font-medium"
                htmlFor="help"
              >
                *How Can We Help?
              </label>
              <textarea
                id="help"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                rows="4"
                placeholder="Describe your needs"
                value={formData.help}
                onChange={handleChange}
                aria-required="true"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-[#091d4f] text-white py-3 active:scale-90 transition duration-300 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
