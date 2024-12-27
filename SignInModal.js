import React, { useState } from "react";
import "./SignInModel.css"; 

const SignInModal = ({ closeModel }) => {  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign In: userName - ${username}, Password - ${password}`);
    closeModel();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModel}>&times;</button>
        <h2 className="modal-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
