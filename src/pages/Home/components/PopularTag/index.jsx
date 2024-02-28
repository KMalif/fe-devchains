import React from 'react'

import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const PopularTag = () => {

    const navigate = useNavigate();

  return (
    <div className={style.popularTagContainer}>
        <div className={style.title}>Popular Tags</div>
        <div className={style.content}>
            <div className={style.tags} onClick={()=> navigate('/question/tagged')}>
                #Javascript
            </div>
            <div className={style.tagCount}>
                20 Question by this tag
            </div>
        </div>
        <div className={style.content}>
            <div className={style.tags} onClick={()=> navigate('/question/tagged')}>
                #Typescript
            </div>
            <div className={style.tagCount}>
                10 Question by this tag
            </div>
        </div>
        <div className={style.content}>
            <div className={style.tags} onClick={()=> navigate('/question/tagged')}>
                #Java
            </div>
            <div className={style.tagCount}>
                5 Question by this tag
            </div>
        </div>
    </div>
  )
}

export default PopularTag