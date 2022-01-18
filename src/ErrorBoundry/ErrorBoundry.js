import React from "react";
import classes from './ErrorBoundry.module.css'

class ErrorBoundry extends React.Component{
    state ={
        hasError:false
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
        this.setState({
            hasError:true
        })
    }
    render(){
        if(this.state.hasError){
            return(
                <div className={classes.ErrorBoundry}>
                     <h1>Something went wrong</h1>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundry