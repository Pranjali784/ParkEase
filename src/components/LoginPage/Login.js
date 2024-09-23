import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    ownerName: '',
    vehicleType: '',
    hoursAvailable: '',
    address: '' // Add address field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.ownerName) newErrors.ownerName = 'Name of owner is required';
    if (!formData.vehicleType) newErrors.vehicleType = 'Vehicle type is required';
    if (!formData.hoursAvailable) newErrors.hoursAvailable = 'Hours available is required';
    if (!formData.address) newErrors.address = 'Address is required'; // Add validation for address
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post('http://localhost:5500/submit', formData);
      alert(response.data.message);
      setFormData({ ownerName: '', vehicleType: '', hoursAvailable: '', address: '' });
      setErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        name="ownerName"
        type="text"
        placeholder="Name of Owner"
        value={formData.ownerName}
        onChange={handleChange}
      />
      {errors.ownerName && <p className="error">{errors.ownerName}</p>}
      <input
        className="input"
        name="vehicleType"
        type="text"
        placeholder="Vehicle Type"
        value={formData.vehicleType}
        onChange={handleChange}
      />
      {errors.vehicleType && <p className="error">{errors.vehicleType}</p>}
      <input
        className="input"
        name="hoursAvailable"
        type="text"
        placeholder="Hours Available"
        value={formData.hoursAvailable}
        onChange={handleChange}
      />
      {errors.hoursAvailable && <p className="error">{errors.hoursAvailable}</p>}
      <input
        className="input"
        name="address"
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && <p className="error">{errors.address}</p>}
      <center>
        <button className="button" type="submit">Submit</button>
      </center>
    </form>
  );
}

export default Login;