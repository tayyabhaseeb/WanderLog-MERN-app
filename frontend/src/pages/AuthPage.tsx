import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

function AuthPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [passwordInputError, setPasswordInputError] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [nameInputError, setNameInputError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailInput(event.target.value);
    const value = event.target.value;
    if (!isValidEmail(value)) {
      setEmailInputError("Please enter a valid email address");
    } else {
      setEmailInputError("");
    }
  }
  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPasswordInput(event.target.value);
    const value = event.target.value;

    if (!isValidPassword(value)) {
      setPasswordInputError(
        "Password must contain at least one special character, one uppercase letter, and one number."
      );
    } else {
      setPasswordInputError("");
    }
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(event.target.value);
    const value = event.target.value;

    if (value === "") {
      setNameInputError("Please enter a name");
    } else {
      setNameInputError("");
    }
  }

  function isValidEmail(email: string) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password: string) {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[@#$%^&+=])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(nameInput, emailInput, passwordInput);
  }

  useEffect(() => {
    if (isLogin) {
      if (
        emailInput !== "" &&
        passwordInput !== "" &&
        !emailInputError &&
        !passwordInputError
      ) {
        setDisableBtn(true);
      } else {
        setDisableBtn(false);
      }
    } else {
      if (
        nameInput !== "" &&
        emailInput !== "" &&
        passwordInput !== "" &&
        !nameInputError &&
        !emailInputError &&
        !passwordInputError
      ) {
        setDisableBtn(true);
      } else {
        setDisableBtn(false);
      }
    }
  }, [
    nameInput,
    emailInput,
    passwordInput,
    nameInputError,
    emailInputError,
    passwordInputError,
    isLogin,
  ]);

  return (
    <Card className="bg-white block w-1/2 mx-auto mt-8 p-8 rounded-2xl">
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label htmlFor="name" className="text-xl font-bold">
              Name
            </label>

            <Input
              type="text"
              id="name"
              value={nameInput}
              onChange={handleName}
              className={`block w-full my-4 
          `}
            />

            {nameInputError && (
              <p className="my-4 text-red-500">{nameInputError}</p>
            )}
          </div>
        )}
        <div>
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>

          <Input
            type="text"
            id="email"
            value={emailInput}
            onChange={handleEmail}
            className={`block w-full my-4 
          `}
          />

          {emailInputError && (
            <p className="my-4 text-red-500">{emailInputError}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="text-xl font-bold">
            Password
          </label>

          <Input
            type="password"
            id="password"
            value={passwordInput}
            onChange={handlePassword}
            className={`block w-full my-4 
          `}
          />

          {passwordInputError && (
            <p className="my-4 text-red-500">{passwordInputError}</p>
          )}
        </div>
        <button
          className="mt-4  bg-pink-500 text-white text-xl px-4 py-2  disabled:bg-gray-300 disabled:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
          type="submit"
          disabled={!disableBtn}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <button
        className="mt-4  bg-pink-500 text-white text-xl px-4 py-2 block mx-auto"
        onClick={() => setIsLogin((prev) => !prev)}
      >
        {`Switched to ${isLogin ? "Signup" : "Login"} mode`}
      </button>
    </Card>
  );
}

export default AuthPage;
