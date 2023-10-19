import React, { useState } from 'react';

export default function Form() {
  // set state variables for contact form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * handles input changes to the form text boxes
   * @param {event} e
   */
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // clearing the error message if one existed
    setErrorMessage('');

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  /**
   *
   * @param {event} e
   * @returns error message if validation fails
   */
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!email || !name || !message) {
      setErrorMessage('Email, name, or message is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container">
      <p className="row">Contact Us</p>
      <form className="form row">
        <div className="row">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            className="col-4"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            className="col-4"
          />
        </div>
        <div className="row">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="textarea"
            placeholder="message to the staff"
            className="col-8"
          />
        </div>
        <div className="row">
          <button className="col-2" type="button" onClick={handleFormSubmit}>
            Submit Form
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="text-danger error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
