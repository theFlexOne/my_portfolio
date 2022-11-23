import "./contact.css";
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
    <div className="contact-page">
      <div className="form-container">
        <h2>Send me an email!</h2>
        <form ref={form} onSubmit={sendEmail} onChange={handleFormChange}>
          <div className="input-group">
            <label htmlFor="nameInput">
              <p>Name</p>
              <input id="nameInput" type="text" name="name" />
            </label>
            <label htmlFor="emailInput">
              <p>Email</p>
              <input id="emailInput" type="email" name="email" />
              {emailError && <p className="error">{emailError}</p>}
            </label>
          </div>
          <label htmlFor="subjectInput">
            <p>Subject</p>
            <input id="subjectInput" type="text" name="subject" />
          </label>
          <label htmlFor="messageInput">
            <p>Message</p>
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
