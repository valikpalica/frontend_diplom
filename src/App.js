import React from "react";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";
import Layout from "./Layout/Layout";
import {BrowserRouter} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';




const App = (props) =>{
    return(
     <React.Fragment>
        <CookiesProvider>
            <BrowserRouter>
                <ErrorBoundry>
                    <Layout/>   
                </ErrorBoundry>
            </BrowserRouter>
        </CookiesProvider>
     </React.Fragment>
    )
}
export default App
