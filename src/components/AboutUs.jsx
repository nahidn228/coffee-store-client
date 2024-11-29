import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200">
      <div className="hero bg-base-100 py-12">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-brown-900 mb-4">
              About Us
            </h1>
            <p className="text-xl text-brown-800 mb-6">
              Welcome to Hot Hot Cold Coffee! We are a passionate team of coffee
              lovers who aim to bring you the finest coffee experiences. Whether
              you prefer your coffee hot or cold, we have something for
              everyone. Our mission is to offer high-quality, fresh coffee
              combined with exceptional customer service.
            </p>
            <p className="text-lg text-brown-700 mb-4">
              Our journey started with the simple idea of sharing our love for
              coffee. We source our beans from the best farms and create
              beverages that will brighten your day. We believe coffee should be
              enjoyed in good company, with a warm atmosphere and a delicious
              cup in hand.
            </p>
            <p className="text-lg text-brown-700 mb-6">
              Whether you're stopping by for a quick pick-me-up or settling in
              to enjoy a cozy moment, we're here to make your experience
              special. Thank you for choosing us to be a part of your coffee
              journey!
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-brown-900 mb-3">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-lg text-brown-700">
                <li>Quality: We believe in serving only the finest coffee.</li>
                <li>Community: We aim to create a welcoming space for all.</li>
                <li>
                  Innovation: We strive to bring new and exciting flavors.
                </li>
                <li>
                  Sustainability: We support ethical sourcing and
                  environmentally friendly practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-brown-900 mb-4">Our Team</h3>
          <p className="text-xl text-brown-800 mb-6">
            Meet the passionate people behind Hot Hot Cold Coffee!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Team Members */}
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  src="https://placeimg.com/300/300/people"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h4 className="card-title font-semibold text-brown-900">
                  John Doe
                </h4>
                <p className="text-brown-700">Founder & CEO</p>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  src="https://placeimg.com/300/300/people"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h4 className="card-title font-semibold text-brown-900">
                  Jane Smith
                </h4>
                <p className="text-brown-700">Head Barista</p>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  src="https://placeimg.com/300/300/people"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h4 className="card-title font-semibold text-brown-900">
                  Mark Johnson
                </h4>
                <p className="text-brown-700">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
