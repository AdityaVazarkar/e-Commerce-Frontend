import HeroSection from "../component/HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faTruckFast,
  faHeadset,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../context/ProductContext";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "About Us",
  };

  const features = [
    {
      title: "Secure Payments",
      description:
        "We ensure a safe and secure payment gateway with encrypted transactions, providing a seamless shopping experience.",
      icon: faLock,
    },
    {
      title: "Fast & Free Delivery",
      description:
        "Enjoy quick and hassle-free delivery to your doorstep with our fast shipping services available in multiple locations.",
      icon: faTruckFast,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available 24/7 to assist you with any queries, making your shopping experience smooth.",
      icon: faHeadset,
    },
    {
      title: "Easy Returns & Refunds",
      description:
        "Shop with confidence! We offer easy return policies and quick refunds for a hassle-free shopping experience.",
      icon: faExchangeAlt,
    },
  ];

  return (
    <>
      <div>
        {myName}
        <HeroSection myData={data} />
      </div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
              Why Shop With Us?
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Your Ultimate Shopping Destination
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:mx-auto">
              We bring you the best shopping experience with secure payments,
              fast delivery, 24/7 support, and easy returns.
            </p>
          </div>

          <div className="mt-10">
            <dl className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
                >
                  <dt>
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mx-auto">
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="h-10 w-10"
                      />
                    </div>
                    <p className="mt-4 text-center text-lg font-bold text-gray-700">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 text-center text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
