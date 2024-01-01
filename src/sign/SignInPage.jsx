
import SignIn from './SignIn';
import "./sign.css"
// import SignUp from './SignUp'; // You should have your SignUp component

const SignInPage = () => {
  return (
    <div className='sign'>
      <div className='signIn'>
      <SignIn />
      <p>
        Do not have an account? <span>
    <a  style={{color:"blue"}} href="/SignUp">Sign Up</a>
  </span>
      </p>
      </div>
    </div>
  );
};

// const SignUpLink = () => (
  
// );

export default SignInPage;
