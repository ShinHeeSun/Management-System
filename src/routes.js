import HomePages from './Components/pages/HomePages';
import CreatePages from './Components/pages/CreatePages';
import EditPages from './Components/pages/EidtPages';
import ListPages from './Components/pages/ListPages';

const routes=[
    {
      path:'/',
      component:HomePages
    },
    {
      path:'/blogs',
      component:ListPages
    },
    {
      path:'/blogs/Create',
      component:CreatePages
    },
    {
      path:'/blogs/edit',
      component:EditPages
    }
  ];

export default routes;