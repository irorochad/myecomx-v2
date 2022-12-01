import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
      if (error.code == "auth/email-already-in-use") {
        alert("Email already in use.");
      }
      if (error.code == "auth/weak-password") {
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
    <div>
      <h1>Signup with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
