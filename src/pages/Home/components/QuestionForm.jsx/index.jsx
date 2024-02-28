import React from 'react'

import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const QuestionForm = () => {

  const navigate = useNavigate();

  return (
    <div className={style.questionContainer}>
        <div className={style.title}>
            Ask Something
        </div>
        <div className={style.inputForm}>
            <input type="text" placeholder='What is in your mind'/>
            <button onClick={() => navigate('/question/ask')}>Next</button>
        </div>
    </div>
  )
}

export default QuestionForm