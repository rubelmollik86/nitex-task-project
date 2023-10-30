import React from "react";

function PressCoverage() {
  return (
    <section className="p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-3xl font-bold ">Press Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
          <div className="col-span-1 md:col-span-1  p-2 rounded shadow-lg">
            <div className="press-item">
              <img src="press-img/prothom-alo.png" alt="Press 1" />
              <p className="mt-3">
                নতুন শিক্ষাক্রম নিয়ে ১৫ ‘ভুল তথ্য’–এর যে ব্যাখ্যা দিলেন
                শিক্ষামন্ত্রী....
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-2 rounded shadow-lg">
            <div className="press-item">
              <img src="press-img/Kaler-Kantho.png" alt="Press 2" />
              <p className="mt-3">
                বঙ্গবন্ধু টানেল উদ্বোধন আজ, শিল্পের নতুন দুয়ার খুলছে....
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-2 rounded shadow-lg">
            <div className="press-item">
              <img src="press-img/Bangladesh_Pratidin.png" alt="Press 3" />
              <p className="mt-3">
                দরিদ্র রোগীর চিকিৎসার টাকায় কর্মকর্তাদের সম্মানী...
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-2 rounded shadow-lg">
            <div className="press-item">
              <img src="press-img/amritabazar.png" alt="Press 4" />
              <p className="mt-3">
                ইংল্যান্ড ওয়ানডেতে ‘চক্রপূরণের’ শেষ ধাপে দাঁড়িয়ে, বললেন
                আথারটন...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressCoverage;
