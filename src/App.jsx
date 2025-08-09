import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/common/Body";
import VideoGrid from "./components/home/VideoGrid";
import WatchPage from "./components/Watch/WatchPage";


const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<VideoGrid/>
    },
    {
      path:'/watch',
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App
