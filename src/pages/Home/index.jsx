import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';
import QuestionCard from '@components/QuestionCard';
import SearhcBar from './components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      <br />
      <SearhcBar/>
      <br />
      <QuestionCard/>
    </div>
  );
};

export default Home;
