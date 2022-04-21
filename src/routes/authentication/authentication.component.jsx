import SignUpForm from '../../components/Signup/sign-up.component';
import SignInForm from '../../components/SignIn/sign-in.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;