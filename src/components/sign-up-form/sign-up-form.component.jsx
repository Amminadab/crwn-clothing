import { useState } from "react";

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

  return (
    <div>
      <form onSubmit={() => {}}>
        <h1>sign up with your email and password</h1>
        <label>Display Name</label>
        <input
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <label>Conferm Password</label>
        <input
          type="password"
          onChange={changeHandler}
          name="confermPassword"
          value={confermPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
