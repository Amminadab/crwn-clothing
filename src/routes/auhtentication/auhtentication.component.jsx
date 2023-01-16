import { Fragment } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./auhtentication.style.scss";

const Auhtentication = () => {
  return (
    <div className="authenticaton-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Auhtentication;
