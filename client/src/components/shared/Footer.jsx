import { NavItems } from "@/lib/Constants";
import { Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primaryOrange border-2 border-primaryBlack mt-16 rounded-sm w-[100%] lg:max-w-[1200px] m-auto mb-4 px-4 md:px-12 lg:px-4">
      <div className="mx-auto max-w-screen-xl space-y-8 px-8 py-4 sm:px-8 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="mt-4 max-w-xs text-primaryBlack text-4xl font-bold font-montserrat">
              NewsApp
            </p>
            <div className="flex space-x-2 mt-2">
              <Link to="https://www.instagram.com/mohitdora21" target="_blank">
                <Instagram size={32} />
              </Link>
              <Link to="https://github.com/mohitDora" target="_blank">
                <Github size={32} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 lg:mt-4">
            <div>
              <p className="font-medium text-primaryBlack">Services</p>

              <ul className="mt-4 space-y-2 text-sm">
                {NavItems.map((item, index) => (
                  <li key={index} className="px-2">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-primaryBlack">
          &copy; 2024. NewsApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
