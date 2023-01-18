import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
import Button from "../button/button.component";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confermPassword: "",
  };
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confermPassword } = formField;

  console.log(formField);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    //  console.log(name);
    // console.log(event);
    setFormField({ ...formField, [name]: value });
  };
  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confermPassword) {
      alert("password doesn't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can not create usser, email already in use");
      } else {
        console.log("user creation encountered error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Conferm Password"
          type="password"
          onChange={changeHandler}
          name="confermPassword"
          value={confermPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
