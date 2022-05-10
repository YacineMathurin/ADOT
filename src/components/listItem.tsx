import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IState as Props } from "./list";
import {useDataContext, useSetActiveContext} from "./list";

export const ListItem: React.FC = () => {
    const data = useDataContext();
    const setActive = useSetActiveContext();

    if (!data || !setActive) return <></>

    const renderList = () => {
            return data.map(({city, address, caption, people, hotels, salaries, area, active}, index: number) => (           
                <Col lg={4} sm={12} key={index} style={{marginBottom: "1em"}}>
                    <div>
                        <img className="list-item-image" src={caption} alt={city} width="100%" /> 
                        <div style={{backgroundColor: "white", padding:"1em"}}>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <h5 style={{marginBottom: "0"}}>{city}</h5>
                                <Form>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        checked={active}
                                        onChange={() => setActive(index)}
                                    />
                                </Form>
                            </div>
                            <p style={{paddingBottom: "1em", borderBottom:"1px solid #ccc", fontSize: "12px"}}>{address}</p>
                            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <p className="list-item-bottom-margin">{people}</p>
                                    <p className="list-item-metrics">Habitants</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <p className="list-item-bottom-margin">{hotels}</p>
                                    <p className="list-item-metrics">Hotels</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <p className="list-item-bottom-margin">{salaries}</p>
                                    <p className="list-item-metrics">Revenu Moy.</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <p className="list-item-bottom-margin">{area}</p>
                                    <p className="list-item-metrics">km²</p>
                                </div>
                                    
                                </div>
                        </div>   
                    </div>
                </Col> 
            ))
    }
    
    return (
        <div >
        <Row style={{display: "flex", justifyContent: "center"}}>
            {renderList()}
        </Row>  
    </div>
    )
}
export default ListItem;
