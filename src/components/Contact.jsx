import emailjs from "@emailjs/browser";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import contact from "../assets/contact.png";
const Contact = () => {
  const [values, setValues] = useState({
    to_name : "Imran Younas",
    from_name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true);
    emailjs
      .sendForm("service_2pg0oyq", "template_b7e39ju", e.target, {
        publicKey: "-8QmA8RK-Pr6IUJi3",
      })
      .then(
        (result) => {
          toast.success("Message Sent, We will get back to you shortly");
          setLoading(false);
        },
        (error) => {
          toast.error("An error occurred, Please try again");
          setLoading(false);
        }
      );
  };
  
  const handleChange = (e) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl">Contact Me</h2>
      <ToastContainer />

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
        <img
          unoptimized={true}
          quality={100}
          alt="contact"
          src={contact}
          className="hidden md:block w-1/2 h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="flex-1">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-xl"
          >
            <input
              onChange={handleChange}
              required
              value={values.from_name}
              name="from_name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="Email *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <button
              disabled={loading}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Say Hello <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Say Hello 👋"
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
