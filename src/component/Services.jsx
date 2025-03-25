import React from "react";

const Services = () => {
  const services = [
    {
      title: "Fast Delivery",
      icon: "🚀",
      description:
        "Get your products delivered quickly with our reliable and speedy service.",
    },
    {
      title: "Money Back Guarantee",
      icon: "💰",
      description:
        "If you're not satisfied, we offer a hassle-free money-back guarantee.",
    },
    {
      title: "Trusted Product",
      icon: "✅",
      description:
        "Our products are trusted and verified for quality and reliability.",
    },
  ];

  return (
    <section className="bg-[#d9d9d9] relative isolate overflow-hidden px-2 py-2 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-md lg:max-w-7xl">
        <div className="px-4 py-4 lg:px-5 lg:py-3">
          <div className="font-Poppins text-center text-2xl font-bold leading-5 tracking-widest lg:text-3xl">
            Our{" "}
            <span className="from-30% from-[#FF8E26] to-55% to-[#0163E0] inline-block bg-gradient-to-r bg-clip-text text-transparent">
              Service
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full px-4 py-4 md:max-w-screen-lg">
        <div className="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <div key={index} className="shadow-lg rounded-lg bg-white p-4">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-lg">
                  {service.icon}
                </div>
                <div className="px-3">
                  <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">
                    {service.title}
                  </p>
                </div>
              </div>
              <div className="mt-4 max-w-full md:max-w-md">
                <p className="text-xs font-Poppins font-medium leading-4 tracking-wider text-black">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
