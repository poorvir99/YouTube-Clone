import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import { AppContext } from './utils/contextApi';


const appRouter =createBrowserRouter(
  [{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
  ],
},
])

 const App=()=> {
  return (
    <AppContext>
    <Provider store={store}>
    <div>
    <Head />
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    </AppContext>
  );
}
 

export default App;
