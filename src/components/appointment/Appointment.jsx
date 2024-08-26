import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function SimpleForm() {
  // State to hold the form values
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log('Form submitted:', formData);
    // Here, you can send formData to a server or perform other actions
  };

  return (
   <Container>
 <form onSubmit={handleSubmit}>
 <div style={{  }}>
  <div>
   
   <h5>name</h5>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
  </div>
  <div>
   <h5>email</h5>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
  </div>
  <div>
   <h5>Adress</h5>
    <input
      type="text"
      name="email"
      value={formData.adress}
      onChange={handleChange}
    />
  </div>
</div>
      <button type="submit">Submit</button>
    </form>


   </Container>
  );
}

export default SimpleForm;
