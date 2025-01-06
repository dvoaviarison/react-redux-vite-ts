import { Routes as ReactRoutes, Route } from "react-router";
import Counter from "../../Pages/Counter";
import Home from "../../Pages/Home";

const Routes = () => {  
    return <>
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </ReactRoutes>
    </>
}

export default Routes;