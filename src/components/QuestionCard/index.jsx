import React from 'react'

import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const QuestionCard = ({question, tags, user}) => {

  const navigate = useNavigate();

  return (
    <div className={style.questionContainer}>
        <div className={style.imageContainer}>
            <img src="/brand_logos.svg" alt="thumbnail" />
        </div>

        <div className={style.questionData}>
            <div className={style.questionTitle}
              onClick={() => navigate('/question')}
            >
              Lorem ipsum dolor sit amet, sadasldkasdlk 
            </div>
            <div className={style.tagContainer}>
                <div className={style.tag} onClick={() => navigate('/question/tagged')}>Java</div>
                <div className={style.tag} onClick={() => navigate('/question/tagged')}>Kotlin</div>
                <div className={style.tag} onClick={() => navigate('/question/tagged')}>Javascript</div>
            </div>
            <div className={style.creatorContainer}>
              <div className={style.profile}>
                <img src="/brand_logos.svg" alt="thumbnail" />
              </div>
              <div className={style.username}>Kmalif</div>
            </div>
              
            <div className={style.responseContainer}>
              <p>3 days ago</p>
              <p> 10 responds</p>
            </div>           
        </div>
    </div>
  )
}

export default QuestionCard