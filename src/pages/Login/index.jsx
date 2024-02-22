import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import style from './style.module.scss';
import { FormattedMessage } from 'react-intl';
import { useForm, Controller } from 'react-hook-form';


const Login = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }

    const onSubmit = (data) => {
        dispatch(loginRequest(data));
    };
    return (
        <div className={style.loginContainer}>
          <div className={style.card}>
            <div className={style.title}>
              <FormattedMessage id="app_login_title" />
            </div>
            <div className={style.form}>
              <form >
                {/* {loginError && <span className={style.errorLogin}>{loginError}</span>} */}
                <div className={style.email}>
                  <label htmlFor="email">
                    <FormattedMessage id="app_login_email" />
                  </label>
                  {/* <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" placeholder="johndoe@gmail.com" />}
                  /> */}
                  {/* {errors.email && <span className={style.error}>{errors.email.message}</span>} */}
                </div>
                <div className={style.password}>
                  <label htmlFor="password">
                    <FormattedMessage id="app_login_password" />
                  </label>
                  {/* <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="password" placeholder="***********" />}
                  /> */}
                  {/* {errors.password && <span className={style.error}>{errors.password.message}</span>} */}
                </div>
                <div className={style.forgotPassword}>
                  <a href="/forgot-password">
                    <FormattedMessage id="app_login_forgot_password" />
                  </a>
                </div>
                <div className={style.buttonContainer}>
                  <button type="submit">
                    <FormattedMessage id="app_login_title" />
                  </button>
                </div>
                <div className={style.buttonContainer}>
                  <a href="/register">
                      <FormattedMessage id="app_login_to_register" />
                  </a>
                </div>
              </form>
                <div className={style.buttonGoogleContainer}>
                  <button onClick={signInWithGoogle}>
                    <FormattedMessage id="app_login_google" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      );
    };


export default Login