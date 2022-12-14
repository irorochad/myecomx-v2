import SignUpForm from "../../components/sign-up/signup.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { FormContainer } from "./auth.styles.jsx";

const Authentication = () => {
  return (
    <FormContainer>
      <SignIn />
      <SignUpForm />
    </FormContainer>
  );
};

export default Authentication;
