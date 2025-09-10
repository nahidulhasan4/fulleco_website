import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Rootlayout from "./component/layout/Rootlayout";
// import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />} >
        <Route index element={<Home />} />
      </Route>
      
      
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
