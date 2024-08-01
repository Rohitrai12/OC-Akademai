import React from 'react';

const SupportPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f1f9ff]">
            <div className="w-full max-w-5xl mx-auto p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-left text-sm font-bold text-[#4f4f4f]">SELF-SERVICE CANVAS SUPPORT</h2>
                        <h1 className="text-left text-5xl font-bold text-[#064264] mt-4">
                            Canvas Support <span className="text-red-600">FAQs</span>
                        </h1>
                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
                        <p className="text-left text-lg text-[#4f4f4f] mb-8">
                            Below you'll find answers to commonly asked support questions and other inquiries you might have.
                            We also invite you to visit our troubleshooting guide with answers to the top support questions or to
                            visit our Community with step-by-step guidance and resources based on role.
                        </p>
                        <div className="flex justify-start space-x-4">
                            <button className="bg-red-600 text-white py-2 px-6 rounded-full shadow-lg transform transition hover:scale-105 w-[455px]">
                                TROUBLESHOOTING GUIDE
                            </button>
                            <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded-full shadow-lg transform transition hover:scale-105">
                                ASK OUR COMMUNITY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportPage;
