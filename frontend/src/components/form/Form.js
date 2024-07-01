import React, { useState } from 'react';
import './form.css';

function Form() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mail: ''
  });

  const [formErrors, setFormErrors] = useState({
    fnameError: '',
    lnameError: '',
    mailError: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset errors
    setFormErrors({
      fnameError: '',
      lnameError: '',
      mailError: ''
    });

    // Validate fields
    let isValid = true;

    if (formData.fname.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        fnameError: 'First Name is required'
      }));
      isValid = false;
    }

    if (formData.lname.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        lnameError: 'Last Name is required'
      }));
      isValid = false;
    }

    if (formData.mail.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        mailError: 'Email is required'
      }));
      isValid = false;
    }

    // If form is valid, submit
    if (isValid) {
      // Perform form submission logic here (e.g., API call)
      console.log('Form submitted:', formData);
      // Optionally reset form fields after submission
      setFormData({
        fname: '',
        lname: '',
        mail: ''
      });
    }
  };

  return (
    <div className="formPage">
      <h1 className="Mailing">Join Our Mailing List</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First Name:</label><br/>
          <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="Enter Your First Name" />
          {formErrors.fnameError && <span className="error">{formErrors.fnameError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lname">Last Name:</label><br/>
          <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleInputChange} placeholder="Enter Your Last Name" />
          {formErrors.lnameError && <span className="error">{formErrors.lnameError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mail">Email ID:</label><br/>
          <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleInputChange} placeholder="Enter Your Email" />
          {formErrors.mailError && <span className="error">{formErrors.mailError}</span>}
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
