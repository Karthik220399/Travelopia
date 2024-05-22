import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Herosection from "./components/Herosection"


export  const Routes = ()=>{
     

    return (
        <>
        <Router>
            <Switch>
                <Route path="/"><Herosection/></Route>
            </Switch>
        </Router>
        </>
    )
}