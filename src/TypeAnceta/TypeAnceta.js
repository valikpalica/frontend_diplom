import React from "react";
import classes  from './TypeAnceta.module.css'
import Button from '../component/button/button'
import Select from "../component/select/select";
import Form from "../Form/Form";
import Spinner from "../component/spinner/spinner";
import axios from "axios";


class TypeAnceta extends React.Component{
    constructor(props){
        super(props)
        this.state={
            type_anceta:1,
            types_anceta:[],
            loader:true,
        }
        this.getTypeAnceta();
    }

    getTypeAnceta =  () =>{
        axios.get('http://localhost:8080/type_anceta/allAncetas',{
            headers:{'Authorization':`Bearer ${localStorage.getItem('access_token')}`}    
        }).then(response=>{
            console.log(response.data.response.message);
            let types_anceta = response.data.response.message
            this.setState({
                types_anceta:types_anceta,
                loader:false,
            })
        }).catch(e=>{
            console.log(e);
            axios.post('http://localhost:8080/auth/refresh',{
                refreshToken:localStorage.getItem('refresh_token')
            }).then(res=>{ 
                localStorage.setItem('access_token',res.data.access_token);
                localStorage.setItem('refresh_token',res.data.refresh_token);
            }).then(()=>{
                console.log('refresh');
                axios.get('http://localhost:8080/type_anceta/allAncetas',{
                    headers:{'Authorization':`Bearer ${localStorage.getItem('access_token')}`}    
                }).then(response=>{
                    console.log(response.data.response.message);
                    let types_anceta = response.data.response.message
                    this.setState({
                        types_anceta:types_anceta,
                        loader:false,
                    })
                }).catch(e=>{
                    console.log(e.response.data);
                })
            }).catch(e=>{
                console.log(e.response.data);
            });
        })
    }
    OnSub = (navigate) =>{
        //console.log(this.state.type_anceta)
        navigate(`/test/${this.state.type_anceta}`)
    }
    CheckValue = (data) =>{
        if(this.state.type_anceta!==data.target.value){
            this.setState({
                type_anceta:data.target.value
            })
        }
    }
    render(){
        const element = this.state.loader ? <Spinner/> : (
            <div className={classes.TypeAncetaDiv}>
                <h1>Виберіть акету</h1>
                <Form onSub ={this.OnSub}>
                    <Select CheckValue={this.CheckValue} array_option={this.state.types_anceta} defaultValue={this.state.type_anceta} />
                    <Button>Перейти до обраної анкети</Button>
                </Form>
            </div>
        )
        return(
            <div className={classes.TypeAnceta}>
                {element}
            </div>
        )
    }
}


export default TypeAnceta