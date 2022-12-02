import SignUpForm from "../../components/sign-up/signup.component";
import SignIn from "../../components/sign-in/sign-in.component";

import "./auth.styles.scss";

const Authentication = () => {
  return (
    <div className="form-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
