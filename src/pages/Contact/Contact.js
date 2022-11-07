import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="form-container">
        <form>
          <div className="input-group">
            <label htmlFor="nameInput">
              Name
              <input id="nameInput" type="text" />
            </label>
            <label htmlFor="emailInput">
              Email
              <input id="emailInput" type="email" />
            </label>
          </div>
          <label htmlFor="subjectInput">
            Subject
            <input id="subjectInput" type="text" />
          </label>
          <label htmlFor="messageInput">
            Message
            <textarea id="messageInput" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contact;
