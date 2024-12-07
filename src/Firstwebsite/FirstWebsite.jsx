import React from "react";

function FirstWebsite() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Parcel Service</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a href="#track" className="hover:underline">
              Track Parcel
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white p-16 text-center">
          <h2 className="text-4xl font-bold">Fast and Reliable Parcel Delivery</h2>
          <p className="mt-4 text-lg">
            Get your parcels delivered safely and on time. Track your parcel with ease.
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500 transition">
            Track Your Parcel
          </button>
        </section>

        {/* Services Section */}
        <section id="services" className="p-8 container mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">Parcel Pickup</h4>
              <p className="mt-2 text-gray-600">
                Schedule a pickup from your location at a convenient time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">Parcel Tracking</h4>
              <p className="mt-2 text-gray-600">
                Track your parcel in real-time with our easy-to-use tracking system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">International Shipping</h4>
              <p className="mt-2 text-gray-600">
                Ship your parcels internationally with reliable service.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-200 p-8 container mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Pricing Plans</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">Standard</h4>
              <p className="mt-2 text-gray-600">Affordable delivery with standard shipping times.</p>
              <p className="text-lg font-bold mt-4">$5.99</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">Express</h4>
              <p className="mt-2 text-gray-600">Faster delivery with priority handling.</p>
              <p className="text-lg font-bold mt-4">$9.99</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">Premium</h4>
              <p className="mt-2 text-gray-600">Top-tier service with guaranteed next-day delivery.</p>
              <p className="text-lg font-bold mt-4">$19.99</p>
            </div>
          </div>
        </section>

        {/* Track Parcel Section */}
        <section id="track" className="bg-blue-200 p-8 container mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Track Your Parcel</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <input
              type="text"
              className="p-2 w-full border rounded-lg mb-4"
              placeholder="Enter Tracking Number"
            />
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Track Parcel
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white">
        <div className="container mx-auto p-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Parcel Service. All rights reserved.
          </p>
          <nav className="mt-4 space-x-4">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default FirstWebsite;
