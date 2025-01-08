import { useState } from "react";
import { NavItems } from "@/lib/Constants";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Menu state
  const [isAnimating, setIsAnimating] = useState(false); // Animation state

  const navigate = useNavigate();

  // Toggle body scroll
  const toggleScroll = (disableScroll) => {
    document.body.style.overflow = disableScroll ? "hidden" : "auto";
  };

  const handleMenuToggle = () => {
    if (isOpen) {
      // Trigger reverse animation before closing
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
        toggleScroll(false);
      }, 300); // Match animation duration
    } else {
      setIsOpen(true);
      toggleScroll(true);
    }
  };

  const handleOutsideClick = () => {
    if (isOpen) {
      handleMenuToggle(); // Close menu
    }
  };

  return (
    <div className="w-[100%] lg:max-w-[1200px] m-auto px-4 md:px-12 lg:px-4">
      <div className="flex items-center justify-between p-4 mx-auto border-b-2 border-gray-500">
        <div className="font-bold font-montserrat text-2xl text-gray-800">NewsApp</div>
        <div className="hidden md:flex md:space-x-4">
          {NavItems.map((item) => (
            <Link to={item.link} key={item.id} className="px-2 ease-in-out hover:border-b border-primaryBlack">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Button onClick={() => navigate("/signup")} className="bg-primaryOrange hover:bg-primaryHoverOrange text-md rounded-sm border-2 border-primaryBlack text-primaryBlack">
            Sign up Free
          </Button>
        </div>
        <button
          type="button"
          className="text-gray-800 focus:outline-none md:hidden"
          aria-label="Toggle navigation"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {(isOpen || isAnimating) && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30"
            onClick={handleOutsideClick}
          ></div>
          <div
            className={`absolute top-0 left-0 z-50 w-full bg-[#FAF9F4] shadow-md ${
              isOpen && !isAnimating ? "animate-slideDown" : "animate-slideUp"
            }`}
          >
            <div className="flex flex-col items-center p-4 space-y-4">
              {NavItems.map((item) => (
                <Link to={item.link} key={item.id} className="px-2 ease-in-out hover:border-b border-gray-500">
                {item.name}
              </Link>
              ))}
              <Button onClick={() => navigate("/signup")} className="w-full bg-primaryOrange hover:bg-primaryHoverOrange text-md rounded-sm border-2 border-primaryBlack text-primaryBlack">
                Sign up Free
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
