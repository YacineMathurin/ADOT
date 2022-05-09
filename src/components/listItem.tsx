import React from 'react'
import Form from 'react-bootstrap/Form';

export default function ListItem() {
  return (
      <div className="list-item-container">
        <div>
            <img className="list-item-image" src="images/paris.jpg" alt="London's eye" width="100%" /> 
            <div style={{backgroundColor: "white", padding:"1em"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h5 style={{marginBottom: "0"}}>Paris</h5>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            // label="Check this switch"
                        />
                    </Form>
                </div>
                <p style={{paddingBottom: "1em", borderBottom:"1px solid #ccc", fontSize: "12px"}}>3 Rue soutrane, 06560 Valbonne</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">3.4M</p>
                        <p className="list-item-metrics">Habitants</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">5000</p>
                        <p className="list-item-metrics">Hotels</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">70 000</p>
                        <p className="list-item-metrics">Revenu Moy.</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">88.25</p>
                        <p className="list-item-metrics">km²</p>
                    </div>
                    
                </div>
            </div>   
        </div>
        
        <div>
            <img className="list-item-image" src="images/london.jpg" alt="London's eye" width="100%" /> 
            <div style={{backgroundColor: "white", padding:"1em"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h5 style={{marginBottom: "0"}}>London</h5>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            // label="Check this switch"
                        />
                    </Form>
                </div>
                <p style={{paddingBottom: "1em", borderBottom:"1px solid #ccc", fontSize: "12px"}}>3 Rue soutrane, 06560 Valbonne</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">3.4M</p>
                        <p className="list-item-metrics">Habitants</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">5000</p>
                        <p className="list-item-metrics">Hotels</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">70 000</p>
                        <p className="list-item-metrics">Revenu Moy.</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">88.25</p>
                        <p className="list-item-metrics">km²</p>
                    </div>
                    
                </div>
            </div>   
        </div>
        
        <div>
            <img className="list-item-image" src="images/amsterdam.jpg" alt="London's eye" width="100%" /> 
            <div style={{backgroundColor: "white", padding:"1em"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h5 style={{marginBottom: "0"}}>Amsterdam</h5>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            // label="Check this switch"
                        />
                    </Form>
                </div>
                <p style={{paddingBottom: "1em", borderBottom:"1px solid #ccc", fontSize: "12px"}}>3 Rue soutrane, 06560 Valbonne</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">3.4M</p>
                        <p className="list-item-metrics">Habitants</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">5000</p>
                        <p className="list-item-metrics">Hotels</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">70 000</p>
                        <p className="list-item-metrics">Revenu Moy.</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p className="list-item-bottom-margin">88.25</p>
                        <p className="list-item-metrics">km²</p>
                    </div>
                    
                </div>
            </div>   
        </div>
        
    </div>
  )
}
