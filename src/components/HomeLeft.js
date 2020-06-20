import React from "react";
import { Card } from "react-bootstrap";


export default function HomeLeft(props) {
    const renderChildren = (children,parent) => {
        let childArr = [];
        children.forEach((item,idx) => {
            childArr.push(
            <li key={item.name}>
                <input type="checkbox" name={parent} value={item.name} checked={item.checked} onChange={e => props.handleChange(e,idx)}/>              
                 {item.name} 
            </li>
            );
        });
        return childArr;
    }
    const renderCountries = () => {
        const {countries} = props;
        let dataArr = [];
        Object.keys(countries).forEach((item) => {
            dataArr.push(
                <ul key={item}>
                    {item}
                    {renderChildren(countries[item],item)}
                </ul>
            );
        });
        return dataArr;
    }
    return (
        <div className="body-left col-md-6">
            <Card>
                <Card.Body>
                    {renderCountries()}
                </Card.Body>
            </Card>
        </div>
    );
}