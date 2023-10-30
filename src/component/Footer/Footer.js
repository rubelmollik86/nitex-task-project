import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Need Help Column */}
        <div className="col-span-1 md:col-span-1">
          <h3>Need Help</h3>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="col-span-1 md:col-span-1">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
          
        </div>

        {/* Contact Us Column */}
        <div className="col-span-1 md:col-span-1">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="/contact">Contact Information</a>
            </li>
            <li>
              <a href="/support">Customer Support</a>
            </li>
          </ul>
        </div>

        {/* Discover Column */}
        <div className="col-span-1 md:col-span-1">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
            <li>
              <a href="/packages">Packages</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;
