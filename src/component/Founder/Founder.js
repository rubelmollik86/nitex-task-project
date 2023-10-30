import React from "react";

function FounderSection() {
  return (
    <section className="p-4 md:p-8 mt-8">
      <div className="container mx-auto bg-gray-300 flex flex-wrap items-center">
        <div className="w-full md:w-8/12 ps-5">
          <h2 className="text-3xl font-bold">
            Voice of the <span className="text-orange-500">Visionary</span>
          </h2>
          <p className="text-lg mt-3">
            Mens is a life-changing platform for millions of women. As the
            founder of Fly Far Mens, I've personally witnessed the barriers
            women face when it comes to travel. I've seen their deep desire to
            explore beyond their homes. Fly Far Mens stands as a powerful brand,
            a beacon of empowerment. Everyone within this community relies on
            one another, offering unwavering support. Our operations at Fly Far
            Mens are proudly women-driven, from our team to our cherished
            clients. Who better to understand women's dreams than fellow women?
            Together, we'll continue making these dreams take flight. Thank you
            for being a part of this amazing journey towards empowerment and
            discovery
          </p>
        </div>
        <div className="w-full md:w-4/12 relative">
          <div className="relative overflow-hidden group">
            <img
              src="founder-img/founder.jpg"
              alt="Founder"
              className="w-full h-auto transition-transform transform scale-200 group-hover:scale-110 border border-orange-500"
            />
            <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-sm text-gray-800 font-semibold">
              <p className="text-2xl">William Brown</p>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
