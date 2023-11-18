import React, { useState } from 'react';
import './Contact.css';

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await fetch('https://reacthttp-1e5a7-default-rtdb.firebaseio.com/Dukaan.json',{
        method:'POST',
        body: JSON.stringify(formData),
    })

    if(response.ok){
        alert('our team will contact you soon');
    }

    setFormData({
    name: '',
    email: '',
    phone: '',
    })
  }

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <br/>
          <label>Name:</label>
          <br/>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br/>

        </div>

        <div className="form-group">
        <br/>

          <label>Email:</label>
          <br/>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br/>

        </div>
        <br/>

        <div className="form-group">
        <br/>

          <label>Phone Number:</label>
          <br/>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />

        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsForm;
