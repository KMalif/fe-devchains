
import React from 'react'

import AnswerCard from './components/AnswerCard';
import AnswerForm from './components/AnswerForm';

import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const QuestionDetail = ({question}) => {

  const navigate = useNavigate();

  return (
    <div className={style.pageContainer}>
        <div className={style.headerTitle}>
            <div className={style.titleContainer}>
              <div className={style.title}>Question Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt nostrum cupiditate similique vel suscipit eligendi deserunt saepe soluta reprehenderit. Dolorum dolore esse libero aspernatur vel! Error, tempore? Distinctio, sint!</div>
              <button className={style.btnAsk} onClick={() => navigate('/question/ask')}>Ask Something</button>
            </div>
            <div className={style.questionInfo}>
              <p>Asked today</p>
              <p>Asked by Kmalif</p>
              <p>0 Respond</p>
            </div>
        </div>
        <div className={style.questionContainer}>
          <div className={style.question}>

            <div className={style.content}>
              <div className={style.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni iusto alias cum officiis sed tenetur explicabo quisquam in, adipisci neque beatae ex tempore perspiciatis ullam ipsam eum consequatur vitae!
              </div>
              <div className={style.tagContainer}>
                <div className={style.tag}>Java</div>
                <div className={style.tag}>Programming</div>
                <div className={style.tag}>Android</div>
              </div>
            </div>
            <AnswerCard/>
            <AnswerForm/>
          </div>

          <div className={style.relatedQuestion}>
            <div className={style.container}>
              <div className={style.title}>Related question</div> 
              
              <div className={style.questionList}>
                <div className={style.questions}>
                  <div className={style.count}>0</div>
                  <p>Lorem ipsum dolor sit</p>
                </div>    
              </div>
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default QuestionDetail
