import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const emailValidationRegex = /.+@.+\..+/;

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("form.current", form.current);
    if (isSent) return;

    if (form.current.elements.email.value.match(emailValidationRegex) === null)
      return setEmailError(`Please enter a valid email`);

    setIsSending(true);
    setTimeout(() => {
      setIsSent(true);
      setIsSending(false);
    }, 2000);
    // emailjs
    //   .sendForm(
    //     "service_3dtgiwq",
    //     "template_wplgkpe",
    //     form.current,
    //     "KT1puzfg99h2ITp2U"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setIsSent(true);
    //       setIsSending(false);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       setIsSending(false);
    //     }
    //   );
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
    <div className="contact">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} onChange={handleFormChange}>
          <div className="input-group">
            <label htmlFor="nameInput">
              Name
              <input id="nameInput" type="text" name="name" />
            </label>
            <label htmlFor="emailInput">
              Email
              <input id="emailInput" type="email" name="email" />
              {emailError && <p className="error">{emailError}</p>}
            </label>
          </div>
          <label htmlFor="subjectInput">
            Subject
            <input id="subjectInput" type="text" name="subject" />
          </label>
          <label htmlFor="messageInput">
            Message
            <textarea
              id="messageInput"
              cols="30"
              rows="10"
              name="message"
            ></textarea>
          </label>
          <button type="submit" className={buttonClass}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
