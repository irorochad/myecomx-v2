import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  emailAndPasswordSignIn,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-in.styles.scss";

const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setformFields] = useState(defaultValues);
  const { email, password } = formFields;

  // When the user account get created, clear the form fields.
  const clearFormFields = () => {
    setformFields(defaultValues);
  };

  // This function handles the email and password signup form when the button is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailAndPasswordSignIn(email, password);
      clearFormFields();
    } catch (error) {
      // Found an error? alert it using switch.
      switch (error.code) {
        case "auth/user-not-found":
          alert(email + " does not exsist");
          break;

        case "auth/wrong-password":
          alert("Password does not match our record");
          break;
        default:
          console.log(error);
      }
    }
  };
  // this func check to see if any of the inputs has been changed.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };

  // When the google sign in button is clicked
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an Account?</h2>
      <span>Sign In</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email:"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password:"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Login</Button>

          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
