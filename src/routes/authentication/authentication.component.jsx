// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
const Authentication = () => {
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
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
