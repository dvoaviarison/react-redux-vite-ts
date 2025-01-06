import { Routes as ReactRoutes, Route } from "react-router";
import Counter from "../../Pages/Counter";
import Home from "../../Pages/Home";
import StateSummary from "../../Pages/StateSummary";

const Routes = () => {  
    return <>
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/statesummary" element={<StateSummary />} />
    </ReactRoutes>
    </>
}

export default Routes;