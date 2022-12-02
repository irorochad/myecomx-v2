import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-up.styles.scss";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultValues);
  const { displayName, email, password, confirmPassword } = formFields;

  // When the user account get created, clear the form fields.

  const clearFormFields = () => {
    setformFields(defaultValues);
  };
  console.log(formFields);

  // This function handles the email and password signup form when the button is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();
    // If the password does not match, alert an error.
    if (password !== confirmPassword) {
      alert("Passwords doesn't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Create the document in the firestore
      await createUserDocumentFromAuth(user, { displayName });

      // Call the clear form field func to clear the form.
      clearFormFields();
    } catch (error) {
      // Found an error? Console it.
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      }
      if (error.code === "auth/weak-password") {
        alert("Weak Password, Password should be at least 6 letters");
      } else {
        console.log("We had an issue creating your account", error);
      }
    }
  };
  // this func check to see if any of the inputs has been changed.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name:"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password:"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
