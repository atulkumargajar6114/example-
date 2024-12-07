import React from "react";

function RideBookingWebsite() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">RideBooking</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="bg-indigo-500 p-12 text-center text-white">
          <h2 className="text-4xl font-bold">Book Your Ride with Ease</h2>
          <p className="mt-4 text-lg">Convenient, safe, and fast ride booking at your fingertips.</p>
          <button className="mt-6 px-6 py-2 bg-indigo-700 text-white rounded-lg shadow-md hover:bg-indigo-800 transition">
            Book Now
          </button>
        </section>

        {/* Booking Form Section */}
        <section className="p-8 bg-white shadow-md rounded-lg mx-auto max-w-4xl mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Ride</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-2">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Dropoff Location</label>
                <input
                  type="text"
                  placeholder="Enter dropoff location"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-600 mb-2">Vehicle Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Economy</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                Confirm Booking
              </button>
            </div>
          </form>
        </section>

        {/* Services Section */}
        <section id="services" className="p-8 container mx-auto mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600">Economy Rides</h4>
              <p className="mt-2 text-gray-600">
                Affordable rides to get you where you need to go.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600">Premium Rides</h4>
              <p className="mt-2 text-gray-600">
                Enjoy a comfortable ride with added luxury features.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600">Luxury Rides</h4>
              <p className="mt-2 text-gray-600">
                For the ultimate in style and comfort, choose luxury.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-200 p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What Our Customers Say</h3>
          <div className="flex justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <p className="text-gray-600">
                "A smooth ride and great service! Highly recommend for all your travel needs."
              </p>
              <p className="mt-4 text-indigo-600 font-bold">John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <p className="text-gray-600">
                "Booking was easy, and the ride was comfortable. Will definitely use again!"
              </p>
              <p className="mt-4 text-indigo-600 font-bold">Jane Smith</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-indigo-600 text-white">
        <div className="container mx-auto p-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} RideBooking. All rights reserved.</p>
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

export default RideBookingWebsite;
