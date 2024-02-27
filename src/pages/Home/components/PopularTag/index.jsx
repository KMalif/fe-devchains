import React from 'react'

import style from './style.module.scss';

const PopularTag = () => {
  return (
    <div className={style.popularTagContainer}>
        <div className={style.title}>Popular Tags</div>
        <div className={style.content}>
            <div className={style.tags}>
                #Javascript
            </div>
            <div className={style.tagCount}>
                20 Question by this tag
            </div>
        </div>
        <div className={style.content}>
            <div className={style.tags}>
                #Typescript
            </div>
            <div className={style.tagCount}>
                10 Question by this tag
            </div>
        </div>
        <div className={style.content}>
            <div className={style.tags}>
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