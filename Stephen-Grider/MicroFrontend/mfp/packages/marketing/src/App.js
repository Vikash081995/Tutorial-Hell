import React from "react";
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import {StyleProvider} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';


const App = () => { 
    return (
        <div>
            <StyleProvider>
                <BrowserRouter> 
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/pricing" component={Pricing} />
                    </Switch>
                </BrowserRouter>
            </StyleProvider>
        </div>
    )
}

export default App
