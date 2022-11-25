// import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const EMAIL_VALIDATION_REGEX = /.+@.+\..+/;

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSent) return;

    if (
      form.current.elements.email.value.match(EMAIL_VALIDATION_REGEX) === null
    )
      return setEmailError(`Please enter a valid email`);

    setIsSending(true);
    emailjs
      .sendForm(
        "service_3dtgiwq",
        "template_wplgkpe",
        form.current,
        "KT1puzfg99h2ITp2U"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  const handleFormChange = () => {
    if (isSent) setIsSent(false);
  };

  const buttonText = (() => {
    if (isSent) return "Thank you!";
    if (isSending) return "Sending";
    return "Send";
  })();

  const buttonClass = (() => {
    if (isSent) return "sent";
    if (isSending) return "sending";
    return "send";
  })();

  return (
    <main className="flex-1 flex flex-col items-center items-center h-full gap-8">
      <h1 className="text-5xl px-6 border-b-2 border-gray-200 border-opacity-30 pb-2 tracking-wide">
        Contact
      </h1>
      <div className="p-5 border border-black/50 rounded-md bg-gray-500 bg-opacity-70">
        <h2 className="text-center text-3xl">Send me an email!</h2>
        <form
          className="flex flex-col gap-2"
          ref={form}
          onSubmit={sendEmail}
          onChange={handleFormChange}
        >
          <div className="flex gap-12">
            <label className="flex flex-col flex- gap-2" htmlFor="nameInput">
              <p>Name</p>
              <input
                className="text-black"
                id="nameInput"
                type="text"
                name="name"
              />
            </label>
            <label className="flex flex-col gap-2" htmlFor="emailInput">
              <p>Email</p>
              <input
                className="text-black"
                id="emailInput"
                type="email"
                name="email"
              />
              {emailError && <p className="error">{emailError}</p>}
            </label>
          </div>
          <label className="flex flex-col gap-2" htmlFor="subjectInput">
            <p>Subject</p>
            <input
              className="text-black"
              id="subjectInput"
              type="text"
              name="subject"
            />
          </label>
          <label
            className="flex flex-col gap-2 max-h-60"
            htmlFor="messageInput"
          >
            <p>Message</p>
            <textarea
              className="resize-none text-black"
              id="messageInput"
              cols="20"
              rows="10"
              name="message"
            ></textarea>
          </label>
          <button
            type="submit"
            className="border-2 border-primary-500 max-w-max px-14 py-1 self-end mt-4 uppercase font-bold hover:bg-primary-300 hover:text-gray-800"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
