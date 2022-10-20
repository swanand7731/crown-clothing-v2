// import { getRedirectResult } from 'firebase/auth';

import {
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  // auth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  // useEffect(() => {
  //   const fetchRedirectResult = async (auth) => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const { user } = response;
  //       await createUserDocumentFromAuth(user);
  //     }
  //   };
  //   fetchRedirectResult(auth);
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
