import React from "react";
import PersonalTest from '../TestPersonal/TestPersonal'
import ComanderTest from '../TestComander/TestComander'
import { useParams } from "react-router-dom";


const MainTestPage =  () =>{
    const params = useParams();
    let element = null;
    if(params.id <=5){
        element = params.id === '5' ? <ComanderTest/> : <PersonalTest id_test = {params.id}/>
    }
    else{
        element = <h1>Not correct type anceta</h1>
    }
    return(
        <div>
            {element}
        </div>
    )
}


export default MainTestPage