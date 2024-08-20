import { useRef } from "react";

function App() {
  const formRef = useRef();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 flex flex-col items-center justify-center text-gray-700 px-3">
      <h1 className="text-3xl font-semibold">Contact Me</h1>

      <form
        ref={formRef}
        className="text-inherit w-full max-w-[400px] mt-10 space-y-4"
      >
        <div className="flex flex-col gap-1">
          <label className="font-medium cursor-pointer" htmlFor="name">
            Name
          </label>
          <input
            className=" bg-transparent px-2 py-2 rounded-md border border-gray-100 outline-gray-100 placeholder:text-gray-400"
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
            className=" bg-transparent px-2 py-2 rounded-md border border-gray-100 outline-gray-100 placeholder:text-gray-400"
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
            className=" bg-transparent px-2 py-2 rounded-md border border-gray-100 outline-gray-100 placeholder:text-gray-400"
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
