import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#a8dadc] shadow-inner shadow-black">
      {/* Logo Section */}
      <div className="py-4">
        <h1 className="text-[#1d3557] font-extrabold text-[25px] text-center sm:text-left sm:pl-8 lg:pl-16">
          Trendverse
        </h1>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row lg:justify-around items-center lg:items-start max-w-screen-full py-8 gap-8 px-6">
        {/* About Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue-950 font-bold text-[22px] mb-4">About Trendverse</h2>
          <p className="text-[15px] font-medium leading-6">
            Trendverse is an emerging technology startup founded to revolutionize 
            web development and design through cutting-edge solutions and creativity.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue-950 font-bold text-[22px] mb-4">Quick Links</h2>
          <ul className="text-[17px] font-medium space-y-2">
            <li className="hover:underline"><Link href="/">Home</Link></li>
            <li className="hover:underline"><Link href="/about">About</Link></li>
            <li className="hover:underline"><Link href="/blog">Blogs</Link></li>
            <li className="hover:underline"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Privacy Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue-950 font-bold text-[22px] mb-4">Privacy</h2>
          <ul className="text-[17px] font-medium space-y-2">
            <li>Terms</li>
            <li>Services</li>
            <li>Management</li>
            <li>Transfers</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue-950 font-bold text-[22px] mb-4">Contact Us</h2>
          <ul className="text-[15px] font-medium space-y-2">
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">GitHub</Link></li>
            <li><Link href="#">Email</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-[#457b9d]">
        <p className="text-[14px] text-[#1d3557]">
          © {new Date().getFullYear()} All Rights Reserved | Trendverse From Abdullah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
