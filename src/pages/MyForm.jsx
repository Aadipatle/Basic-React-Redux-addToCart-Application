// FormComponent.jsx
import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // const newData = [...existingData, formData];

    // localStorage.setItem('formData', JSON.stringify(newData));

    setFormData({
      firstName: '',
      lastName: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
