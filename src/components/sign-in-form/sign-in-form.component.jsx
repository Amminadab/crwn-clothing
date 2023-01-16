import { async } from "@firebase/util";
import { useState } from "react";
import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  // console.log(formField);

  const signInWithGoogle = async () => {
    const { user } = await SignInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

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
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("incorect email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
