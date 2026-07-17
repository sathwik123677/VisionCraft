
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 py-6 px-6">

        {/* Logo */}
        <img
          src={assets.logo}
          alt="VisionCraft Logo"
          className="w-36"
        />

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} <span className="font-semibold">Sathwik</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/pathivada-sathwik/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-8 h-8 object-contain"
            />
          </a>

          <a
            href="https://github.com/sathwik123677/VISIONCRAFT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={assets.github_icon}
              alt="GitHub"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;