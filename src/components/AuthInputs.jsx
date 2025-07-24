import Button from "./Button.jsx";
import Input from "./Input.jsx";
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
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-t from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <Input
          type="email"
          label="Email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredInput.email}
          valid={!submitted || validEmail}
        />
        <Input
          type="password"
          label="Password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredInput.password}
          valid={!submitted || validPassword}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign in</Button>
      </div>
    </div>
  );
}
