import React from 'react'

import style from './style.module.scss';

const QuestionForm = () => {
  return (
    <div className={style.questionContainer}>
        <div className={style.title}>
            Ask Something
        </div>
        <div className={style.inputForm}>
            <input type="text" placeholder='What is in your mind'/>
            <button>Next</button>
        </div>
    </div>
  )
}

export default QuestionForm