import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

export default function Services() {
  const [state, handleSubmit] = useForm("mpwybpen"); // form id
  const [copied, setCopied] = useState(false); // copy state

  const handleCopy = () => {
    navigator.clipboard.writeText("serviroo@rooindustries.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="text-white px-4 py-28 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-300 text-lg">
          Ready to optimize your PC? Let's discuss how I can help improve your
          system's performance.
        </p>
      </div>

      {/* Email block */}
      <div className="p-4 rounded-lg flex items-center justify-between w-full max-w-xl mb-8 border border-cyan-400/20 bg-[#152238]/70 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.8l-10 6.25L2 5.8V4zm0 4.2V20a2 2 0 002 2h16a2 2 0 002-2V8.2l-10 6.25L2 8.2z" />
          </svg>
          <span className="text-lg font-medium">
            serviroo@rooindustries.com
          </span>
        </div>
        <button
          className="text-cyan-400 hover:text-cyan-300 transition duration-200"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Contact Form */}
      {state.succeeded ? (
        <div className="w-full max-w-xl p-6 rounded-lg border border-cyan-400/20 bg-[#152238]/70 backdrop-blur-sm text-center text-green-400 font-semibold">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg w-full max-w-xl space-y-5 border border-cyan-400/20 bg-[#152238]/70 backdrop-blur-sm"
        >
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 bg-transparent rounded text-white border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full p-3 bg-transparent rounded text-white border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your PC and what you'd like to optimize..."
              rows="5"
              required
              className="w-full p-3 bg-transparent rounded text-white border border-gray-700 focus:border-cyan-400 focus:outline-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded transition duration-200"
          >
            Send Message
          </button>

          <p className="text-sm text-gray-400 text-center pt-2">
            Your message will be sent{" "}
            <span className="text-white font-medium">directly</span> to
            serviroo@rooindustries.com
          </p>
        </form>
      )}

      <div className="h-3" />

      {/* Designed by Nerky */}
      <p className="mt-4 text-xs text-slate-400">
        Designed by{" "}
        <a
          href="https://discord.com/users/286457824081346570"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
        >
          Nerky
        </a>
      </p>
    </section>
  );
}
