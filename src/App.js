
import Home from "./pages/Home/home";
import Search from "./pages/Search/search";
import Detail from "./pages/Details/detail";
import Create from "./pages/Create/create";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";



  const routes = createBrowserRouter([
    {path:'/',
     element: <MainLayout/>,
      children:[
      {path:'/',element:<Home/> },
      {path:'/tarifler',element:<Home/> },
      {path:'/create',element:<Create/> },
      {path:'/search',element:<Search/> },
      {path:'/tarifler/:id',element:<Detail/> }
      ]
    }
    
  ])

    
function App() {
  return (
    <RouterProvider router={routes}  />
  );
}

export default App;
