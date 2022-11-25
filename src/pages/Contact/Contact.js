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

  const TextField = ({
    id,
    label,
    className = "",
    children,
    type = "text",
    ...other
  }) => {
    return type === "textArea" ? (
      <textarea
        className={"resize-none text-black " + className}
        id={id}
        cols="20"
        rows="10"
        {...other}
      />
    ) : (
      <label className={"flex gap-2 " + className} htmlFor={id}>
        <p>{label}</p>
        <input
          className="text-black flex-1"
          id={id}
          type="text"
          name="name"
          {...other}
        />
      </label>
    );
  };

  return (
    <main className="flex-1 flex flex-col items-center h-full gap-8">
      <h1 className="text-5xl px-6 border-b-2 border-gray-200 border-opacity-30 pb-2 tracking-wide">
        Contact
      </h1>
      <div className="p-5 border border-black/50 rounded-md bg-gray-500 bg-opacity-70">
        <h2 className="text-center text-2xl mb-4">Send me an email!</h2>
        <form
          className="flex flex-col gap-4"
          ref={form}
          onSubmit={sendEmail}
          onChange={handleFormChange}
        >
          <div className="flex gap-8">
            <TextField id="nameInput" label="Name:" />
            <TextField id="emailInput" label="Email:">
              {emailError && <p className="error">{emailError}</p>}
            </TextField>
          </div>
          <TextField id="subjectInput" label="Subject:" />
          <TextField
            type="textArea"
            className="h-60"
            id="messageInput"
            label="Message:"
          />{" "}
          <button
            type="submit"
            className="border-2 border-primary-500 max-w-max px-14 py-1 self-end uppercase font-bold hover:bg-primary-300 hover:text-gray-800"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
