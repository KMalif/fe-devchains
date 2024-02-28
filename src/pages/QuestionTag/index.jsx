
import QuestionCard from '@components/QuestionCard';
import style from './style.module.scss';

import React from 'react'


const QuestionTag = ({question}) => {
  return (
    <div className={style.pageContainer}>
        <div className={style.headerTitle}>
            <div className={style.titleContainer}>
              <div className={style.title}>Questions Tagged [Javascript]</div>
              <button className={style.btnAsk}>Ask Something</button>
            </div>
            <div className={style.questionInfo}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio expedita obcaecati dolore tempore nobis labore architecto. Unde, accusamus dolores asperiores nihil ea dolore deleniti similique libero dicta? Eveniet, enim rerum.</p>
            </div>
        </div>
        <div className={style.questionContainer}>
          <div className={style.question}>
            <div className={style.content}>
              <div className={style.title}>10 Questions tagged [Javascript]</div> 
            </div>
            {/* asign the question card props */}
            <QuestionCard/>
          </div>

          <div className={style.relatedQuestion}>
            <div className={style.title}>Popular Tags</div> 

            {/* map the popular tags here */}
            <div className={style.content}>
              <div className={style.tags}>
                  #Javascript
              </div>
              <div className={style.tagCount}>
                  20 Question by this tag
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default QuestionTag

