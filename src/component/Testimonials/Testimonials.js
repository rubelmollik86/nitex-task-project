import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  // Define an array of testimonial objects
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "testimonials-img/avata-1.png", // Add the image filename
    },
    {
      name: "Jane Smith",
      position: "Founder, Company B",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "testimonials-img/avata-2.png", // Add the image filename
    },
    {
      name: "Jane Smith",
      position: "Founder, Company C",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "testimonials-img/avata-3.png", // Add the image filename
    },
    {
      name: "Jane Smith",
      position: "Founder, Company D",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "testimonials-img/avata-4.png", // Add the image filename
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="p-4 md:p-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          WHAT THEY SAY ABOUT US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="testimonials-column"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="testimonial"
              >
                <div className="image-container mt-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                    style={{ width: "150px", borderRadius: "50%" }}
                  />
                </div>
                <p className="quote mt-5">{testimonial.quote}</p>
                <div className="author">
                  <p className="name">{testimonial.name}</p>
                  <p className="position">{testimonial.position}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
