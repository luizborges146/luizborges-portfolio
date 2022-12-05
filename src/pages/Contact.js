import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

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

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    if (!message) {
      setErrorMessage('Please add the message ');
      return;
    }
    alert(`Hello ${userName}`);

    setUserName('');
    setMessage('');
    setEmail('');

  };


  return (
    <div className="contact">
      <p>Hello {userName}</p>
      <form className="form">
        <h5>User Name:</h5>
        <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="user name"
          />
          <h5>Email:</h5>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <h5>Message:</h5>
          <textarea className="message-input"
            value={message}
            name="message"
            onChange={handleInputChange}
            // onChange={orThisWayForAll}
            type="text"
            placeholder="message"
          />
          <button type="button" className="btn" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
