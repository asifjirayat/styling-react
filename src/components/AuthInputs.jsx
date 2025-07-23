import { useState } from "react";

export default function AuthInputs() {
  const [enteredInput, setEnteredInput] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    setEnteredInput((prevValue) => {
      return {
        ...prevValue,
        [identifier]: value,
      };
    });
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const { email, password } = enteredInput;
  const validEmail = email.includes("@");
  const validPassword = password.trim().length >= 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            className={submitted && !validEmail ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredInput.email}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={submitted && !validPassword ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredInput.password}
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
}
