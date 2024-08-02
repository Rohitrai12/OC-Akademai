import React from 'react';

const SupportPage = () => {
    return (
        <>
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

            <div className="p-8">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-teal-800 text-3xl font-bold mb-4">How do I reset my password?</h2>
                    <p className="text-gray-700 mb-6">
                        If you set up your own Canvas account, go to "Login" and click on the "Forgot Password?" link. Enter the login information associated with your Canvas account and click the "Request Password" button. You'll be sent an email prompting you to reset your password. Once you’ve reset your password, return to the login screen to sign in. For more information, view login tips for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="text-red-600 mb-2"><a href="#" className="hover:underline">Instructors</a></li>
                        <li className="text-red-600 mb-2"><a href="#" className="hover:underline">Students</a></li>
                        <li className="text-red-600 mb-2"><a href="#" className="hover:underline">Parents (observers)</a></li>
                    </ul>
                </div>
            </div>

            <div className="p-8">
                <div className="max-w-3xl mx-auto">
                    <section className="mb-12">
                        <h2 className="text-teal-800 text-3xl font-bold mb-4">How do I find my school login?</h2>
                        <p className="text-gray-700 mb-4">
                            If you're using Canvas as part of an institution account, you'll log in either from your institution's web page or by using its direct Canvas url. <span className="text-red-600"><a href="#" className="hover:underline">Canvas Network accounts</a></span> also log in with a Canvas url. <span className="text-red-600"><a href="#" className="hover:underline">Find step-by-step guidance here.</a></span>
                        </p>
                        <p className="text-gray-700 mb-4">
                            Note: You must have an account to log in to Canvas. If you're associated with an institution using Canvas and don't know your username and password, please contact your site administrator. If you're given a join code or a secret url to join a course, learn how to <span className="text-red-600"><a href="#" className="hover:underline">create a Canvas account.</a></span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-teal-800 text-3xl font-bold mb-4">As a parent, how do I get an account and log in?</h2>
                        <p className="text-gray-700 mb-4">
                            Parents can sign up as an "observer" in Canvas. Observers can link their Canvas account to their student's account so they can see assignment due dates, announcements, and other course content.
                        </p>
                        <p className="text-gray-700 mb-4">
                            In order to create a Canvas account, you'll need the Canvas url associated with the institution where your student is enrolled. If you don't know your institution's Canvas url, contact the institution. If you already have an account from your student's institution, log in to Canvas using the credentials given to you. <span className="text-red-600"><a href="#" className="hover:underline">Find step-by-step guidance here.</a></span>
                        </p>
                    </section>
                </div>
            </div>

            <div className="p-8">
                <div className="max-w-3xl mx-auto">
                    <section className="mb-12">
                        <h2 className="text-teal-800 text-3xl font-bold mb-4">Where do I access parent resources?</h2>
                        <p className="text-gray-700 mb-4">
                            In the Community, there's an entire section devoted to <span className="text-red-600"><a href="#" className="hover:underline">parent resources</a></span> for Canvas, with helpful links, a forum to ask questions, and a blog.
                        </p>
                        <p className="text-gray-700 mb-4">
                            An educator and community coach has also pulled together <span className="text-red-600"><a href="#" className="hover:underline">this guide</a></span>, where you’ll find step-by-step guidance on pairing codes, best practices for adding and organizing additional students, how to see student courses and grades, notification alerts, and more.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-teal-800 text-3xl font-bold mb-4">How do I get a pairing code?</h2>
                        <p className="text-gray-700 mb-4">
                            To link yourself to a student, you'll need to enter a student-specific pairing code. Students can generate pairing codes from their User Settings. Depending on institution permissions, admins and instructors may also be able to generate pairing codes. For more info, visit our <span className="text-red-600"><a href="#" className="hover:underline">Pairing Code FAQ</a></span>.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Depending on your role, there are two places ways to generate pairing codes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li className="text-red-600 mb-2"><a href="#" className="hover:underline">How to generate a pairing code for an observer as a student</a></li>
                            <li className="text-red-600 mb-2"><a href="#" className="hover:underline">How to generate a pairing code for an observer as an instructor</a></li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="p-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-teal-800 text-3xl font-bold mb-4">My pairing code is invalid. What should I do?</h2>
                    <p className="text-gray-700 mb-4">A few options to consider with an invalid pairing code:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li className="mb-2">If the pairing code has been used by another observer (parent), you'll need a new code.</li>
                        <li className="mb-2">If the pairing code was generated more than seven days ago, you'll need a new code.</li>
                        <li className="mb-2">The pairing code needs to be entered exactly as it displays (they are case sensitive), without spaces.</li>
                        <li className="mb-2">The pairing code needs to be entered from the same institution (i.e., Canvas url) where your student is enrolled. If these troubleshooting tips don't apply, please use the "Report a Problem" option from the app or your browser so we can identify the issue. Please provide the student's email, not your personal email, as it's not accessible in our system.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-6">
                <section className="mb-8">
                    <h2 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">Free Canvas Account</h2>
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">What can I do with a Free Account?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        As an Instructor, you can create courses, add students, build or pull content to deliver curriculum, and more.
                    </p>
                    <p className="text-lg text-gray-700">
                        As a Student, you can access your coursework, communicate and collaborate with other students, and view grades on desktop or mobile. Parents can be added as an observer, too!
                    </p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">I need help with my Free Canvas Account. Where should I go?</h3>
                    <p className="text-lg text-gray-700">
                        For help with your Free for Teacher account, check out our <a href="#" className="text-red-600 underline">Free for Teacher Account FAQ</a> in the Canvas Community.
                    </p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">Can I use it even though I'm not a teacher?</h3>
                    <p className="text-lg text-gray-700">
                        Yes! Students, their parents, and anyone else who wants to use Canvas learning tools can sign up.
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">What are the limitations?</h3>
                    <p className="text-lg text-gray-700">
                        The Free Canvas Accounts don't contain all the features available to institutional users of Canvas. Check out this <a href="#" className="text-red-600 underline">Canvas Account Comparison</a> guide to see the difference.
                    </p>
                </section>
            </div>
            <div className="max-w-4xl mx-auto p-6">
                {/* First Set of Questions */}
                <section className="mb-8">
                    <h2 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">Free Canvas Account</h2>
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">What can I do with a Free Account?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        As an Instructor, you can create courses, add students, build or pull content to deliver curriculum, and more.
                    </p>
                    <p className="text-lg text-gray-700">
                        As a Student, you can access your coursework, communicate and collaborate with other students, and view grades on desktop or mobile. Parents can be added as an observer, too!
                    </p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">I need help with my Free Canvas Account. Where should I go?</h3>
                    <p className="text-lg text-gray-700">
                        For help with your Free for Teacher account, check out our <a href="#" className="text-red-600 underline">Free for Teacher Account FAQ</a> in the Canvas Community.
                    </p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">Can I use it even though I'm not a teacher?</h3>
                    <p className="text-lg text-gray-700">
                        Yes! Students, their parents, and anyone else who wants to use Canvas learning tools can sign up.
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">What are the limitations?</h3>
                    <p className="text-lg text-gray-700">
                        The Free Canvas Accounts don't contain all the features available to institutional users of Canvas. Check out this <a href="#" className="text-red-600 underline">Canvas Account Comparison</a> guide to see the difference.
                    </p>
                </section>

                {/* Second Set of Questions */}
                <section className="mt-12">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">How do I get a join code?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        If you're using Canvas through your institution, you will most likely already have an account and need to accept a course invitation. Your institution will email your login information. If you do not yet have an account, you can create an account when you accept the course invitation.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        If you're not using Canvas through your institution, you can create your own account. Your instructor will provide you with a join code to link you directly to the course. This code will be sent to you separately from the Canvas email that invites you to join the course. If you need to create an account in Canvas but haven't received your join code via email, please contact your instructor or institution for help with logging in. Follow this <a href="#" className="text-red-600 underline">step-by-step guidance</a>.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">Canvas Resources & Support</h2>
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">As a current customer, where should I go for help?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Visit your Canvas Dashboard and click on the "Help" button at the bottom of the Global Navigation. From there, you'll be able to access a range of helpful resources and The Training Services Portal. You can also reach out to your school's admin for support or visit the resource guides and forums in the Community.
                    </p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">Where do I find the Canvas Help Button?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Visit your Canvas Dashboard and click on the "Help" button at the bottom of the Global Navigation. From there, you'll be able to access a range of helpful resources and The Training Services Portal.
                    </p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">What do I do if I can't access my account?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        If you can't log in to Canvas, follow this <a href="#" className="text-red-600 underline">step-by-step guidance</a>.
                    </p>
                    <p className="text-lg text-gray-700">
                        If you're trying to log in to a Free for Teacher account, <a href="#" className="text-red-600 underline">visit this guide</a>.
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">Where can I find free Canvas courses?</h3>
                    <p className="text-lg text-gray-700">
                        The <a href="#" className="text-red-600 underline">Canvas Network</a> offers open, online courses from experts and institutions worldwide. If you need training on Canvas, free Canvas training courses can be found <a href="#" className="text-red-600 underline">here</a>.
                    </p>
                </section>
            </div>
        </>
    );
}
export default SupportPage;