import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUserForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null); // State for avatar image
  const [alert, setAlert] = useState({ visible: false, message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append('username', username);
    formData.append('name', name);
    formData.append('password', password);
    formData.append('email', email);
    if (avatar) {
      formData.append('avatar', avatar); // Append avatar file
    }

    // Post the new user to the backend
    try {
      const response = await axios.post('http://localhost:8080/user/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });

      // Show success alert
      setAlert({ visible: true, message: 'User added successfully!', type: 'success' });
      // Clear form fields
      setUsername('');
      setName('');
      setPassword('');
      setEmail('');
      setAvatar(null); // Clear avatar

      // Hide alert after 3 seconds
      setTimeout(() => {
        setAlert({ visible: false, message: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error('There was an error adding the user!', error);
      // Show error alert
      setAlert({ visible: true, message: 'There was an error adding the user!', type: 'danger' });
      // Hide alert after 3 seconds
      setTimeout(() => {
        setAlert({ visible: false, message: '', type: '' });
      }, 3000);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Add New User</h2>
      {alert.visible && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlert({ ...alert, visible: false })}
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="card p-3 shadow-sm" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 d-flex flex-column">
            <label htmlFor="username" className="form-label text-start">Username</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter username"
              style={{ width: '40%' }}
            />
          </div>
          <div className="mb-4 d-flex flex-column">
            <label htmlFor="name" className="form-label text-start">Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter name"
              style={{ width: '40%' }}
            />
          </div>
          <div className="mb-4 d-flex flex-column">
            <label htmlFor="password" className="form-label text-start">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              style={{ width: '40%' }}
            />
          </div>
          <div className="mb-4 d-flex flex-column">
            <label htmlFor="email" className="form-label text-start">Email</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@example.com"
              style={{ width: '40%' }}
            />
          </div>
          <div className="mb-4 d-flex flex-column">
            <label htmlFor="avatar" className="form-label text-start">Profile Picture</label>
            <input
              type="file"
              className="form-control form-control-sm"
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              style={{ width: '40%' }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-60 mb-0" style={{ marginLeft: '420px' }}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
