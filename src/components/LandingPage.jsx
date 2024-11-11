import React from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div
      className="flex flex-col md:flex-row h-screen w-screen pt-24 bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900"
      style={{
        backgroundImage: 'url(./bg3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Section */}
      <motion.div
        id="left"
        className="flex flex-col h-1/2 md:h-full w-full md:w-2/4 justify-center text-white text-5xl md:text-7xl font-semibold p-6 md:pl-12"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, duration: 1 }}
      >
        <h1 className="leading-tight">
          Jacket for the <br /> Modern Men
        </h1>
        <motion.button
          className="text-sm text-black rounded-md bg-white w-36 mt-10 p-4 shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: "#f8f8f8" }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Now
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        id="right"
        className="flex h-1/2 md:h-full w-full md:w-2/4 items-center justify-center md:justify-end p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* <motion.img
          // src="./jacket.png" // Replace with actual image source
          // alt="Jacket for Modern Men"
          className="w-3/4 md:w-full max-w-md md:max-w-none"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 30, damping: 10 }}
        /> */}
      </motion.div>
    </div>
  );
}

export default LandingPage;
