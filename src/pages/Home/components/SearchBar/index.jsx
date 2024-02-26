import style from './style.module.scss';


const SearhcBar = () => {
    return (
        <div className={style.searchContainer}>
            <div className={style.searchInput}>
                <input type="text" name="" id="" placeholder='discover the question'/>
            </div>
            <div className={style.searchButton}>
                Search
            </div>
        </div>
    )
}

export default SearhcBar;