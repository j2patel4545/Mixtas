import React from 'react';
import { FaTruck, FaShieldAlt, FaWallet, FaHeadset } from 'react-icons/fa';

function Benefits() {
  const benefits = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: 'Free Shipping',
      description: 'Free Shipping for orders over £130',
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Money Guarantee',
      description: 'Within 30 days for an exchange.',
    },
    {
      icon: <FaWallet className="text-2xl" />,
      title: 'Flexible Payment',
      description: 'Pay with Multiple Credit Cards',
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: 'Online Support',
      description: '24 hours a day, 7 days a week',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 mb-4">
              {benefit.icon}
            </div>
            <h3 className="font-semibold text-lg">{benefit.title}</h3>
            <p className="text-gray-500 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
