import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardsContainer from "./components/CardsContainer";
import VideoContainer from "./components/VideoContainer";

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<CardsContainer/>
    },
    {
      path:'/watch',
      element:<VideoContainer/>
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
