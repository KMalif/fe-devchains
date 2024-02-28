import React from 'react'
import { FormattedMessage } from 'react-intl';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

const Signup = () => {
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
              <FormattedMessage id="app_register_title" />
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
                <div className={style.buttonContainer}>
                  <button type="submit">
                    <FormattedMessage id="app_register_title" />
                  </button>
                </div>
                <div className={style.buttonContainer}>
                  <Link to={'/login'}>
                    <FormattedMessage id="app_register_to_login" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };


export default Signup