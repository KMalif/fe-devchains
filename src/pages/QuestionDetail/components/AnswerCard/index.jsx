import React from 'react'

import style from './style.module.scss';

const AnswerCard = ({answers}) => {
  return (
    <div>
        <div className={style.title}>2 Responds</div>

        <div className={style.answer}>
            <div className={style.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam earum id alias neque ducimus suscipit, est odio perspiciatis vero temporibus consequuntur doloribus sit saepe accusamus voluptate rerum labore, mollitia maiores.
            </div>
            <div className={style.creatorContainer}>
                <div className={style.profile}>
                <img src="/brand_logos.svg" alt="thumbnail" />
                </div>
                <div className={style.profileInfo}>
                <div className={style.username}>
                    <p>Answer on 12 Jan 2024</p>
                    <p>Kmalif</p>
                </div>
                </div>    
            </div>
        </div>

        <div className={style.answer}>
            <div className={style.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam earum id alias neque ducimus suscipit, est odio perspiciatis vero temporibus consequuntur doloribus sit saepe accusamus voluptate rerum labore, mollitia maiores.
            </div>
            <div className={style.creatorContainer}>
                <div className={style.profile}>
                <img src="/brand_logos.svg" alt="thumbnail" />
                </div>
                <div className={style.profileInfo}>
                <div className={style.username}>
                    <p>Answer on 12 Jan 2024</p>
                    <p>Kmalif</p>
                </div>
                </div>    
            </div>
        </div>


    </div>
  )
}

export default AnswerCard