import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../style/Contact.css'

export default function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      setErrorMessage('Please enter your Name');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    if (!message) {
      setErrorMessage('Please enter a message in order to submit your request');
      return;
    }
    alert(`Hello ${userName}`);

    setUserName('');
    setMessage('');
    setEmail('');

  };


  return (
    <div className="contact">
      <p>Thank you <span>{userName}</span>, for sending a request!</p>
      <form className="form">
        <h5>Name:</h5>
        <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <h5>Email:</h5>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <h5>Message:</h5>
          <textarea className="message-input"
            value={message}
            name="message"
            onChange={handleInputChange}
            // onChange={orThisWayForAll}
            type="text"
            placeholder="Message"
          />

          {errorMessage && (
          <div> <p className="error-text">{errorMessage}</p> </div>
          )}
          <button type="button" className="btn" onClick={handleFormSubmit}>Submit</button>
      </form>
      
    </div>
  );
}
