import React from "react";
import ExistPerson from "./ExistPerson/ExistPerson";
import classes from './Information.module.css'
import PersonInfo from "./PersonInfo/PersonInfo";



class Information extends React.Component{

    state = {
        exist_person:true,
        findPerson:{},
        personalInfo:{}
    }
    auditPersonalinfo = (data) =>{
        let personal_info = this.state.findPerson;
        personal_info[data.property] = data.value;
        this.setState({
            findPerson:personal_info
        })
    }
    findPerson = () =>{
        let index = 0;
        for(let key in this.state.findPerson){
            index++;
        }
        if(index===3){
            console.log('all info');
            console.log(this.state.findPerson);

            //if find person in db and write personalInfo 
            this.setState({
                exist_person:true
            })
        }
        else{
            console.log('not all information');
            return
        }
    }
    goBack = ()=>{
        this.setState({
            exist_person:false
        })
    }
    render(){
        return(
        <div className={classes.Information}>
            {this.state.exist_person?<PersonInfo goBack={this.goBack} personalInfo={this.state.personalInfo}/>:<ExistPerson onClick = {this.findPerson} auditPersonalinfo={this.auditPersonalinfo}/>}
        </div>
        )
    }
}




export default Information