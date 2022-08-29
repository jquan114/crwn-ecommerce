import { signInWithGooglePopup, 
  creatUserDocumentFromAuth} 
  from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocfRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}> Sign In With Google</button>
    </div>
  );
};

export default SignIn;
