import React from 'react'

import style from './style.module.scss';

const AnswerForm = () => {
  return (
    <div>
        <div className={style.title}>Your Respond</div>
        <div className={style.formContainer}>
            <input type="text" />
            <button>Post response</button>
        </div>
        
    </div>
  )
}

export default AnswerForm