import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaFlipboard, FaShoppingBag, FaPaypal, FaMoneyBillWave } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'; // replace with the correct Twitter icon if using a different library

function Footer() {
  return (
    <footer className="bg-black text-white p-8 md:p-16">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Left Section - Brand and Description */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">Mixtas</h2>
          <p className="mt-4 text-gray-400 max-w-sm">
            Whether you're a trendsetter, a minimalist, or an adventurer at heart, Mixtas has something for everyone. Our diverse range of styles caters to various personas.
          </p>
          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <RxTwitterLogo className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaPinterestP className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Middle Sections - Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {/* About Us */}
          <div>
            <h3 className="font-semibold">About Us</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Our Story</li>
              <li>Mission & Values</li>
              <li>Meet the Team</li>
              <li>Sustainability Efforts</li>
              <li>Brand Partnerships</li>
              <li>Influencer Collaborations</li>
            </ul>
          </div>

          {/* Accessibility */}
          <div>
            <h3 className="font-semibold">Accessibility</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Accessibility Statement</li>
              <li>Site Map</li>
              <li>Web Accessibility Options</li>
              <li>ADA Compliance</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Join Our Community */}
          <div>
            <h3 className="font-semibold">Join Our Community</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>VIP Membership</li>
              <li>Loyalty Program</li>
              <li>Customer Reviews</li>
              <li>Style Forums</li>
              <li>Job Openings</li>
              <li>Culture and Values</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="mt-8 md:mt-0">
          <h3 className="font-semibold">Let's get in touch</h3>
          <p className="text-gray-400 mt-4 max-w-xs">
            Sign up for our newsletter and receive 10% off your first order
          </p>
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 rounded-l-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="p-3 bg-white text-black rounded-r-md">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Footer Note and Payment Icons */}
      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between text-gray-500">
  <p>© 2024 Mixtas All rights reserved. Designed by <a href="https://portfolio-testing-five.vercel.app/">jetal patel</a></p>
  <div className="flex space-x-4 mt-4 md:mt-0">
    <FaFlipboard className="h-6 w-6" title="Flipkart" />
    <FaShoppingBag className="h-6 w-6" title="Myntra Express" />
    <FaPaypal className="h-6 w-6" title="PayPal" />
    <FaMoneyBillWave className="h-6 w-6" title="Cash on Delivery" />
  </div>
</div>
    </footer>
  );
}

export default Footer;
