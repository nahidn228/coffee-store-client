const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-300 text-brown-800 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">Hot Hot Cold Coffee </h2>
            <p className="mt-2">
              Your favorite coffee blends at the perfect temperature. Sip,
              enjoy, and relax!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/dashboard" className="link link-hover">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/inventory" className="link link-hover">
                  Inventory
                </a>
              </li>
              <li>
                <a href="/about" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="link link-hover">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <p className="mt-2">Stay connected with us on social media:</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-2xl text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-2xl text-blue-400 hover:text-blue-600"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-2xl text-pink-500 hover:text-pink-700"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-2xl text-blue-700 hover:text-blue-900"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hot Hot Cold Coffee 2. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
