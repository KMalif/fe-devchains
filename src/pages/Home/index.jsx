import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';
import QuestionCard from '@components/QuestionCard';
import SearhcBar from './components/SearchBar';
import PopularTag from './components/PopularTag';

import style from './style.module.scss';
import QuestionForm from './components/QuestionForm.jsx';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <div className={style.startContainer}>
        <PopularTag/>
      </div>
      <div className={style.mainContainer}>
        <SearhcBar/>
        <div className={style.questionCards}>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
        </div>
        
      </div>
      <div className={style.endContainer}>
        <QuestionForm/>
      </div>
      
    </div>
  );
};

export default Home;

