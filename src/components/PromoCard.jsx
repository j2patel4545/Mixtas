import React from 'react';

function PromoCard() {
  return (
    <div className="relative z-0 bg-gray-100 flex items-center justify-center h-96 text-center p-8 rounded-lg shadow-md">
      {/* Background Image */}
      <img
        src="https://example.com/your-image.jpg" // Replace with the actual image URL
        alt="Promo Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
      />
      <div className="relative z-10 flex flex-col items-center">
        {/* Tagline */}
        <span className="uppercase text-sm tracking-widest text-gray-600">
          Urban Strides
        </span>
        {/* Main Title */}
        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Chic Footwear for City Living
        </h2>
        {/* Button */}
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default PromoCard;
