import axios from "axios";
import React from "react";
import Spinner from "../../component/spinner/spinner";
import QuastionForPersonal from './QuastionsForPersonal/QuastionsForPersonal'
import classes from './TestPersonal.module.css'


class TestPersonal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quiz:{},
            loader:true,
            answers:{
                quastions:{},
                competences:{},
            }
        }
        this.getQuastions();
    }
    getQuastions = () =>{
        console.log(this.props.id_test);
        axios.post('http://localhost:8080/page/anceta',{type_anceta:this.props.id_test}).then(response=>{
            this.setState({loader:false,
                quiz:response.data.answer
            })
        }).catch(e=>{
            console.log(e);
        })
    }
    onGetAnswer = (event) =>{
        const {value} = event.target;
        const property_name = event.target.getAttribute('property_name');
        const id_element = event.target.getAttribute('id_elemet');
        console.log(value,property_name,id_element);
        if(property_name==='quastions'){
            let obj = this.state.answers.quastions;
            obj[id_element] = value;
            this.setState({
                quastions:obj
            });
        }
        else if(property_name === 'competences'){
            let obj = this.state.answers.competences;
            obj[id_element] = value;
            this.setState({
                competence:obj
            });
        }
        else{
            console.log('not property');
        }
    }
    SendAnswers = () =>{
        console.log(this.state.answers);
    }
    render(){
        console.log(this.state.quiz);
        const element  = this.state.loader ? <Spinner/> : <QuastionForPersonal quiz={this.state.quiz} onChange={this.onGetAnswer}/>
        return(
            <React.Fragment>
                <div className={classes.TestPersonal}>
                    {element}
                </div>
                <button onClick={this.SendAnswers}>Click</button>
            </React.Fragment>
        )
    }
}
export default TestPersonal;