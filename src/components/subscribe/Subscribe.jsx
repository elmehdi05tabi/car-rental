import React, { useState, useRef } from 'react';
import './Subscribe.scss';

function Subscribe() {
  const [error, setError] = useState('');
  const emailRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const email = emailRef.current.value.trim();

    if (email === '') {
      setError('Email is required');
    } else if (!regex.test(email)) {
      setError('Enter a valid email');
    } else {
      setError('');
      alert('Subscription successful ✅');
      emailRef.current.value = ''; // vider le champ après validation
    }
  };

  return (
    <div className="subscribeContainer">
      <h1>SUBSCRIBE OUR NEWS</h1>
      <p>We can help you provide the latest news whenever and wherever you are via email</p>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder={error ? error : 'example@gmail.com'}
          ref={emailRef}
          style={{
            border: error ? '1px solid red' : '',
          }}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscribe;
