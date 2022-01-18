import React from "react";
import TrQuastion from "../../../component/trQuastion/trQuastion";
import classes from './QuastionsForPersonal.module.css'

const QuastionForPersonal = (props) =>{
    console.log(props);
    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th scope="col">Quastion</th>
                    <th scope="col">Assessment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={3}>Quastions</td>
                </tr>
                {
                
                props.quiz.quastion ? 
                props.quiz.quastion.map((item,index)=>{
                    const property = {
                        name:'quastions',
                        id_element:item.id_quastion,
                    }
                    return(
                        <TrQuastion key={`quastion${index}`} quastion= {item.quastion}   property = {property} onChange={props.onChange}/>
                    )
                }): null}
                <tr>
                    <td colSpan={3}>Competence</td>
                </tr>
                {
                props.quiz.compatence ? 
                props.quiz.compatence.map((item,index)=>{
                    const property = {
                        name:'competences',
                        id_element:item.id_competence
                    }
                    return(
                        <TrQuastion key={`competence${index}`} quastion= {item.competence} property = {property} onChange={props.onChange}/>
                    )
                }): null}
            </tbody>
        </table>
    )
}

export default QuastionForPersonal