import React from "react";

const TrQuastion = (props) =>{
    //console.log(props.property);
    return (
        <tr>
            <td>{props.quastion}</td>
            <td>
                <label>
                    <input type="radio" name={`${props.quastion}`}  value="5" property_name = {props.property.name} id_elemet={props.property.id_element} onChange={props.onChange} />
                    <span>5</span>
                </label>
                <label>
                    <input  type="radio"  name={`${props.quastion}`} value="4"  property_name = {props.property.name} id_elemet={props.property.id_element}  onChange={props.onChange} />
                    <span>4</span>
                </label>
                <label>
                    <input  type="radio" name={`${props.quastion}`} value="3"   property_name = {props.property.name} id_elemet={props.property.id_element}  onChange={props.onChange} />
                    <span>3</span>
                </label>
                <label>
                    <input type="radio"  name={`${props.quastion}`} value="2"  property_name = {props.property.name} id_elemet={props.property.id_element}  onChange={props.onChange} />
                    <span>2</span>
                </label>
            </td>
        </tr>
    )
}

export default TrQuastion;