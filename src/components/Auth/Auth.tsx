import { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const toggleSelectedBtn = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="auth_body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="auth_form_options">
          <button
            className={`${isRegister ? "selected_auth_btn" : ""}`}
            onClick={toggleSelectedBtn}
            type="button"
          >
            REGISTER
          </button>
          <button
            className={`${!isRegister ? "selected_auth_btn" : ""}`}
            onClick={toggleSelectedBtn}
            type="button"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
