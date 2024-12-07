import React from "react";

function SecondWebsite() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-green-600 text-white">
        <div className="container mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Second Website</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Portfolio
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow bg-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="bg-gray-800 p-12 text-center">
          <h2 className="text-4xl font-bold text-green-400">Welcome to the Second Website!</h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover a new layout with fresh content and an engaging design.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Learn More
          </button>
        </section>

        {/* Features Section */}
        <section className="p-8 container mx-auto">
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Our Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-400">Feature One</h4>
              <p className="mt-2 text-gray-300">
                Innovative and user-friendly designs for all platforms.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-400">Feature Two</h4>
              <p className="mt-2 text-gray-300">
                Robust functionality to enhance user experience.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-400">Feature Three</h4>
              <p className="mt-2 text-gray-300">
                Scalable solutions to grow your business.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-green-600 text-white">
        <div className="container mx-auto p-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Second Website. All rights reserved.
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

export default SecondWebsite;
