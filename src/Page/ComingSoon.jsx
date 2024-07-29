import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function ComingSoon() {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const { logout } = useAuth0();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsCompleted(true);
          return 100;
        } else if (prevProgress >= 56) {
          return prevProgress + 0.01; // Very slow increment after 56%
        }
        return prevProgress + 1; // Normal increment up to 56%
      });
    }, 300); // Slower interval for gradual animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#091d4f] text-white text-center p-6">
      {/* Logo */}
      <img src="path-to-your-logo.png" alt="Logo" className="w-24 h-24 mb-6" />

      {/* Title */}
      <h1 className="text-6xl font-bold mb-4 text-[#E4060F]">Coming Soon</h1>

      {/* Description */}
      {!isCompleted ? (
        <p className="text-xl max-w-lg mb-6">
          Our developers and engineers are diligently working on an exciting update. 
          Stay tuned as we bring you something amazing soon!
        </p>
      ) : (
        <p className="text-xl max-w-lg mb-6">
          We are working hard to bring you an amazing experience. Stay tuned for something awesome!
        </p>
      )}

      {/* Placeholder Image */}
      <img src="path-to-your-image.jpg" alt="Placeholder" className="w-full max-w-md rounded-md shadow-lg mb-6" />

      {/* Progress Bar */}
      {!isCompleted && (
        <div className="w-full max-w-lg mt-4">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-4 bg-[#E4060F] rounded-full transition-all duration-300"
              style={{ width: `${Math.floor(progress)}%` }} // Remove decimal points
            ></div>
          </div>
          <p className="text-lg mt-2">{Math.floor(progress)}% Complete</p> {/* Remove decimal points */}
          
          {/* Logout Button */}
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="mt-4 px-6 py-3 bg-[#E4060F] text-white font-semibold rounded-lg shadow-lg hover:bg-[#c3050d] focus:outline-none focus:ring-2 focus:ring-[#E4060F] focus:ring-opacity-50 transition-colors duration-300"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default ComingSoon;
