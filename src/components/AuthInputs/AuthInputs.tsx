import "./AuthInputs.css";
import { AuthInputProps } from "./types";

const AuthInputs = ({
  inputValues,
  isRegister,
  updateValue,
}: AuthInputProps) => {
  return (
    <div className="auth_inputs_container">
      {isRegister && (
        <input
          type="text"
          placeholder="Name"
          value={inputValues.name}
          onChange={(e) => updateValue("name", e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={inputValues.email}
        onChange={(e) => updateValue("email", e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={inputValues.password}
        onChange={(e) => updateValue("password", e.target.value)}
        required
      />
    </div>
  );
};

export default AuthInputs;
