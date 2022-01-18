import React from "react";
import classes from './TestComander.module.css'
import Spinner from "../../component/spinner/spinner";

class TestComander extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loader:false,
            answers : [{}],
            quastions:[],
        }
    }
    getQuastion = async () =>{
        //getFetch from API and setState quastions 
    }
    render(){
        //create table for quastions if loader false else spinner 
        const element = this.state.loader ? <Spinner/> : <h1>ComanderTest</h1>;
        return(
            <div className={classes.ComanderTest}>
                {element}
            </div>
        )
    }
}

export default TestComander