import React from "react";

function ButterflySection() {
  return (
    <section className="p-4 md:p-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center flex flex-col md:flex-row items-center">
          <span className="mb-2 md:mb-0">It's a Big World Out There</span>
          <span className="text-orange-600 ml-2 md:ml-4">Go Explore</span>
        </h2>
        <p className="text-lg text-center mt-2 md:mt-4">
          She travels not just to see the world, but to discover the depths of
          her own strength, courage, and resilience. A ladies traveler embraces
          the unknown, finds solace in the unfamiliar, and creates her own
          extraordinary story. With each journey, she redefines boundaries,
          connects with diverse cultures, and leaves a trail of inspiration in
          her wake.
        </p>
      </div>
    </section>
  );
}

export default ButterflySection;
