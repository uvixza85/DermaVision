import React, { useState } from 'react';
import './UserForm.css';
import { useNavigate } from 'react-router-dom';

function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'female',
    phone: '',
    email: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/upload', { state: { userData: formData } });
  };

  return (
    <div className="form-container">
      <h2>Patient Information</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Birth Date
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </label>

        <label>
          Gender
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Phone
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <button type="submit">Proceed to Upload</button>
      </form>
    </div>
  );
}

export default UserForm;
