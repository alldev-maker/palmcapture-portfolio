import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-md bg-white px-4 pb-10 pt-28 md:p-10 lg:p-20">
      <h2 className="mb-6 text-center text-5xl font-bold uppercase text-brown-900 md:mb-8 md:text-6xl">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-black bg-white px-2.5 py-4 font-voyage text-lg shadow-sm placeholder:text-black focus:border-brown-500 focus:outline-none focus:ring-brown-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-black bg-white px-2.5 py-4 font-voyage text-lg shadow-sm placeholder:text-black focus:border-brown-500 focus:outline-none focus:ring-brown-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full border border-black  bg-white px-2.5 py-4 font-voyage text-lg caret-transparent shadow-sm placeholder:text-black focus:border-brown-500 focus:outline-none focus:ring-brown-500"
          />
        </div>
        <button
          type="submit"
          className="hover:bg-brown-600 w-full border border-transparent bg-brown-500 px-4 py-4 text-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
