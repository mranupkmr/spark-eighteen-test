import React from "react";
import { Alert, Card } from "react-bootstrap";


export default function HomeRight(props) {
    const renderCountries = () => {
        const {countries} = props;
        let childArr = [];
        let result = [];
        Object.keys(countries).forEach((item) => {
            childArr = [];
            countries[item].forEach((childItem,idx) => {
                if(childItem.checked){
                    childArr.push(
                        <Alert key={`${childItem.name}_${idx}`} variant="dark" dismissible onClose={() => props.handleRemove({"name":item,"checked":false},idx)}>
                            {childItem.name}
                        </Alert>
                    )
                }
            });
            if(childArr.length>0){
                result.push(
                    <ul key={item}>
                        {item}
                        {childArr}
                    </ul>
                )
            }
        });
        return result;
    };
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