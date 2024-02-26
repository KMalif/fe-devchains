import React from 'react'

import style from './style.module.scss';

const QuestionCard = ({question, tags, user}) => {
  return (
    <div className={style.questionContainer}>
        <div className={style.imageContainer}>
            <img src="http://res.cloudinary.com/kmalifdev/image/upload/v1708593182/image/h8nr3zzcedntn0xbsh54.jpg" alt="thumbnail" />
        </div>

        <div className={style.questionData}>
            <div className={style.questionTitle}>Lorem ipsum dolor sit amet, sadasldkasdlk </div>
            <div className={style.tagContainer}>
                <div className={style.tag}>Java</div>
                <div className={style.tag}>Java</div>
                <div className={style.tag}>Java</div>
            </div>
            {/* <div className={style.creatorContainer}>
              <div className={style.profile}>
                <img src="http://res.cloudinary.com/kmalifdev/image/upload/v1708593182/image/h8nr3zzcedntn0xbsh54.jpg" alt="thumbnail" />
              </div>
              <div className={style.username}>Kmalif</div>
            </div> */}

            <div className={style.responseContainer}>
              <p>3 days ago</p>
              <p> 10 responds</p>
            </div>
            
        </div>
    </div>
  )
}

export default QuestionCard