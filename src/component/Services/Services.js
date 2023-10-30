import React from "react";
import { motion } from "framer-motion";
import Navber from "../../component/Navbar/Navbar.js";
import Footer from "../../component/Footer/Footer";

function ServicesSection() {
  const services = [
    {
      title: "Travel Planning",
      description: "Plan your dream vacations with our expert travel guidance.",
      image: "service-img/image-1.jpg",
    },
    {
      title: "Adventure Tours",
      description:
        "Embark on thrilling adventure tours to exciting destinations.",
      image: "service-img/image-2.jpg",
    },
    {
      title: "Luxury Getaways",
      description: "Experience luxury at its finest in exotic locations.",
      image: "service-img/image-3.jpg",
    },
    {
      title: "Cruise Vacations",
      description: "Set sail on a memorable cruise vacation with us.",
      image: "service-img/image-4.jpg",
    },
  ];

  return (
      <div>
          <Navber/>
      <section className="p-4 md:p-8 mb-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="services-column border rounded-lg p-6 bg-white shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }} // Zoom effect on hover
                  className="service-image"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
                <div className="service-content mt-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    {service.title}
                  </h3>
                  <p className="mt-3">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-orange-500 text-white py-2 px-4 mt-4 rounded-full"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
          </section>
          <Footer/>
    </div>
  );
}

export default ServicesSection;
