import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import QuestionDetail from '@pages/QuestionDetail';
import QuestionTag from '@pages/QuestionTag';
import AskQuestion from '@pages/AskQuestion';


const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/question',
    name: 'Question',
    protected: false,
    component: QuestionDetail,
    layout: MainLayout,
  },
  {
    path: '/question/tagged',
    name: 'QuestionTag',
    protected: false,
    component: QuestionTag,
    layout: MainLayout,
  },
  {
    path: '/question/ask',
    name: 'AskQuestion',
    protected: false,
    component: AskQuestion,
    layout: MainLayout,
  },

  
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
