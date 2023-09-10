import { API } from 'config/secrets';
import { useUserMutation } from 'hooks/user';
import { useLocation, useNavigate } from 'react-router';
import styles from './loginPageS.module.scss';
import Lottie from 'react-lottie';
import authAnimationData from 'assets/lottie/userVerificationV2.json';
import uvAnimationData from 'assets/lottie/userVerification.json';
import { IoEyeSharp } from 'react-icons/io5';
import InputField from 'components/inputField';
import { useRef, useState } from 'react';

import Button from 'components/button';

import PasswordField from 'components/passwordField/passwordField';
import { useToasts } from 'react-toast-notifications';

type LocationState = {
  from: string;
};

type loginCredentials = {
  email: string;
  password: string;
};

const LoginPageS = () => {
  const { emailLogin } = useUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [emailEntered, setEmailEntered] = useState('')
  const [passwordEntered, setPasswordEntered] = useState('')
  const { addToast } = useToasts();

  //const [loginCred, setLoginCred] = useState<loginCredentials>({ email: '', password: '' });

  const defaultOptions = [{
    loop: true,
    autoplay: true,
    animationData: authAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
  {
    loop: true,
    autoplay: true,
    animationData: uvAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }];
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  console.log('width: ', windowWidth.current);
  console.log('height: ', windowWidth.current);
  // <p>Width: {windowWidth.current}</p>
  // <p>Height: {windowHeight.current}</p>
  return (
    <div
      className={styles.container}
    >
      <div className={styles.topContainer}>
        <div>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.lottieContainer}>
            <Lottie options={defaultOptions[0]} height={350} width={350} />
          </div>
          <div className={styles.lDesignDiv}> </div>
          

        </div>
        <div className={styles.loginBox}>
          <div className={styles.text}>
            <h1 className={styles.mainText}>Login</h1>
            <h3 className={styles.subText}>Welcome, Enter your details to get sign in</h3>
          </div>
          <div className={styles.inputField}>
            <InputField
              type="text"

              name="loginEmail"
              placeholder=" Enter Email"
              value={emailEntered}
              onChange={(e: any) => { setEmailEntered((prevState) => e.target.value) }}
            />
            <PasswordField
              type="password"
              icon={IoEyeSharp}
              name="loginEmail"
              placeholder=" Enter Password"
              value={passwordEntered}
              onChange={(e: any) => { setPasswordEntered((prevState) => e.target.value) }}
            />
            <a className={styles.anchor}>Forgot username / password?</a>
          </div>
          <div className={styles.button}>
            <Button
              color="red"
              onClick={() => {
                console.log(API);
                navigate('/');
              }}
              text="Login"
              disable={false}
            />
          </div>
          

        </div>
        <div className={styles.rightContainer}>
          <div className={styles.lottieContainer}>
          </div>
          <div className={styles.rDesignDiv}> </div>
          <div className={styles.leftBottom}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageS;
