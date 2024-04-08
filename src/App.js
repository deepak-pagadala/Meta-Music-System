import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./Forms/LoginForm";
import NewUserForm from "./Forms/NewUserForm";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();

  const handleNewUser = () => {
    setIsNewUser(true);
  };

  const handleExistingUser = () => {
    setIsNewUser(false);
  };

  const handleLogin = () => {
    // Replace this with your actual login logic
    navigate("/Dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          {isNewUser ? (
            <>
              <NewUserForm />
              <div className="form-control mt-6">
                <button className="btn btn-link" onClick={handleExistingUser}>
                  Existing User
                </button>
              </div>
            </>
          ) : (
            <>
              <LoginForm handleLogin={handleLogin} />
              <div className="form-control mt-6">
                <button className="btn btn-link" onClick={handleNewUser}>
                  New User
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
