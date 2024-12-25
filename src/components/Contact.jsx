import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage(`Thank you for subscribing, ${email}!`);
      setEmail(""); // Clear the email field
    } else {
      setSubscribeMessage("Please enter a valid email address.");
    }
  };

  return (
    <>
      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 px-6 bg-blue-100" style={{ backgroundColor: "#f5f5dc"}}>
        <h3 className="text-3xl font-semibold text-center mb-6">Subscribe to Our Newsletter</h3>
        <form
          onSubmit={handleSubscribe}
          className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
        >
          <p className="text-sm mb-4 text-center">
            Stay updated with the latest poems and news from PoemExtra. Enter your email to subscribe!
          </p>
          <div className="flex items-center mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow border border-gray-300 p-2 rounded-md"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>
          {subscribeMessage && (
            <p className="text-center text-sm text-green-600">{subscribeMessage}</p>
          )}
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
