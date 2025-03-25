import React from "react";

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Contact
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            We'd love to hear from you! Reach out to us for any inquiries or
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-900 text-white">
                📍
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Our Address
                </h3>
                <p className="text-gray-600">Viman Nagar, Pune, Maharashtra</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-900 text-white">
                📞
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
                <p className="text-gray-600">Email: contact@yourdomain.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Send a Message
            </h2>
            <form id="contactForm">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-center text-2xl font-bold text-gray-900">
            Find Us Here
          </h3>
          <div className="w-full h-96 mt-6">
            <iframe
              title="Google Map Location"
              className="w-full h-full rounded-lg shadow-md border border-gray-300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.631750362649!2d73.90718621058595!3d18.566917011532794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c146e61484b5%3A0xb6482cf7a8b4b3b0!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1742798710061!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
