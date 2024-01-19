import { useState } from "react";
import "./Auth.css";
import AuthInputs from "../AuthInputs/AuthInputs";
import { defaultAuthInputValues } from "../../constants";
import { goTodoInstance } from "../../axios";
import { toast } from "react-toastify";
import { AuthTypes } from "./types";
import { useGlobalContext } from "../../context/globalContext/GlobalContext";

const Auth = ({ setIsAuthorized }: AuthTypes) => {
  const { setLoginResponse } = useGlobalContext();
  const [isRegister, setIsRegister] = useState(true);
  const [inputValues, setInputValues] = useState(defaultAuthInputValues);
  const toggleSelectedBtn = () => {
    setIsRegister(!isRegister);
    setInputValues(defaultAuthInputValues);
  };

  const updateValue = (property: string, input: string) => {
    setInputValues({ ...inputValues, ...{ [property]: input } });
  };

  const submitToAccessTodos = async () => {
    if (isRegister) {
      const request = await goTodoInstance.post("/register", inputValues);
      const response = request.data;
      if (response.success) {
        toast.success(response.message);
        toggleSelectedBtn();
      }
    } else {
      const request = await goTodoInstance.post("/login", inputValues);
      const response = request.data;
      if (response.success) {
        toast.success("Logged in");
        setIsAuthorized(true);
        setLoginResponse(response);
      }
    }
  };

  return (
    <div className="auth_body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitToAccessTodos();
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

        <div className="auth_input_container">
          <AuthInputs
            inputValues={inputValues}
            isRegister={isRegister}
            updateValue={updateValue}
          />

          <button className="auth_submit_btn" type="submit">
            {isRegister ? "REGISTER" : "LOGIN"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
