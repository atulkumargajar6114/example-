import React from "react";

function FirstWebsite() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold">First Website</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gray-200 p-12 text-center">
          <h2 className="text-4xl font-bold text-blue-500">Welcome to the First Website!</h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore our services and get to know us better. We're here to make a difference.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </section>

        {/* Services Section */}
        <section className="p-8 container mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-500">Service One</h4>
              <p className="mt-2 text-gray-600">
                High-quality service tailored to meet your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-500">Service Two</h4>
              <p className="mt-2 text-gray-600">
                Innovative solutions for everyday challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-500">Service Three</h4>
              <p className="mt-2 text-gray-600">
                Professional support to help you succeed.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white">
        <div className="container mx-auto p-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} First Website. All rights reserved.
          </p>
          <nav className="mt-4 space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default FirstWebsite;
