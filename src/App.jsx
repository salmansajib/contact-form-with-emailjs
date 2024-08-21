import { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i5dspqn", "template_4kht7uf", formRef.current, {
        publicKey: "4saBg4D-6Ec-jCnD9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-cyan-400 flex flex-col items-center justify-center text-gray-700 px-3">
      <h1 className="text-3xl font-semibold">Contact Me</h1>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="text-inherit w-full max-w-[400px] mt-10 space-y-2"
      >
        <div className="flex flex-col gap-1">
          <label className="font-medium cursor-pointer" htmlFor="name">
            Name
          </label>
          <input
            className=" bg-gray-100 px-2 py-2 rounded-md border border-none outline-gray-500 placeholder:text-gray-400"
            type="text"
            id="name"
            name="name"
            placeholder="enter your name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium cursor-pointer" htmlFor="email">
            Email
          </label>
          <input
            className=" bg-gray-100 px-2 py-2 rounded-md border border-none outline-gray-500 placeholder:text-gray-400"
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium cursor-pointer" htmlFor="message">
            Your Message
          </label>
          <textarea
            style={{
              resize: "none",
            }}
            className=" bg-gray-100 px-2 py-2 rounded-md border border-none outline-gray-500 placeholder:text-gray-400"
            name="message"
            id="message"
            placeholder="type your message here"
            rows={8}
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
