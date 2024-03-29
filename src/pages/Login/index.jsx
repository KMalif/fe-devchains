import React from 'react'
import { FormattedMessage } from 'react-intl';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import style from './style.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }

    const schema = yup.object().shape({
      email: yup.string().email('Invalid email format').required('Email is required'),
      password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    })

    const {control, handleSubmit, formState: {error}} = useForm({
      resolver : yupResolver(schema)
    })

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
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" placeholder="johndoe@gmail.com" />}
                  />
                  {/* {errors.email && <span className={style.error}>{errors.email.message}</span>} */}
                </div>
                <div className={style.password}>
                  <label htmlFor="password">
                    <FormattedMessage id="app_login_password" />
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="password" placeholder="***********" />}
                  />
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
                  <Link to={'/register'}>
                    <FormattedMessage id="app_login_to_register" />
                  </Link>
                </div>
              </form>
                <div className={style.buttonGoogleContainer}>
                  <button onClick={signInWithGoogle} className={style.iconButton}>
                    <img src="/google.svg" alt="google logo" />
                    <FormattedMessage id="app_login_google" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      );
    };


export default Login