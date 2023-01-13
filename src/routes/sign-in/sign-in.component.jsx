import { Fragment } from "react";
import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn with GOOGLE</button>
    </Fragment>
  );
};
export default SignIn;
