import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IState as Props} from "./list";
import Input from "./input";
import Modal from 'react-bootstrap/Modal'

export interface IProps {
    currentData: Props["currentDataType"],
    setCurrentData: React.Dispatch<React.SetStateAction<Props["currentDataType"]>>,
    showModal: boolean,
    setShowModal:  React.Dispatch<React.SetStateAction<boolean>>,
    handleSubmit: () => void
}

export const ModalComponent: React.FC<IProps> = ({ currentData, setCurrentData, setShowModal, handleSubmit }) => {

const {city, zip, code, caption} = currentData;

const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setCurrentData({
        ...currentData,
        caption: URL.createObjectURL(img)
      });
    }
};

  return (
    <div className="modal_container">
        <Container fluid>
            <h6 style={{marginBottom: "1em"}}>Ajouter une nouvelle destination</h6>
            <Row>
                <Col>
                    <Input 
                        name="city" 
                        placeholder="Nom de la destination"
                        currentData={currentData}
                        setCurrentData={setCurrentData}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Input 
                        name="address"
                        placeholder="Adresse"
                        autoFocus={true}
                        currentData={currentData}
                        setCurrentData={setCurrentData}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formFile" className="mb-3" style={{fontSize: "12px"}}>
                        <Form.Label >Lien de l'image</Form.Label>
                        <Form.Control 
                            style={{fontSize: "12px"}}
                            type="file" 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onImageChange(e)} 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>                    
                    <Input 
                        name="people" 
                        placeholder="Nb Habitants"
                        currentData={currentData}
                        setCurrentData={setCurrentData}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Input 
                            name="hotels" 
                            placeholder="Nb Hotels"
                            currentData={currentData}
                            setCurrentData={setCurrentData}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Input 
                            name="salaries" 
                            placeholder="Revenu Moy"
                            currentData={currentData}
                            setCurrentData={setCurrentData}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Input 
                            name="area" 
                            placeholder="Superficie"
                            currentData={currentData}
                            setCurrentData={setCurrentData}
                    />
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Activer"
                    />
                </Form>
            </Row>
            {/* Footer */}
            <Row>
                <Col style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button 
                        variant="light"
                        onClick={()=>setShowModal(false)} 
                        style={{ opacity:"0.5", fontWeight: "bold", fontSize: "0.8em" }}
                    >
                        CANCEL
                    </Button>
                    <Button
                        disabled={(city === "" || zip === "" || code === "") ? true: false}
                        variant="light"
                        style={{ marginLeft: "0.75em", color:"#38CC77", fontWeight: "bold", fontSize: "0.8em" }}
                        onClick={()=>handleSubmit()} 
                    >
                        CONFIRM
                    </Button>
                </Col>
            </Row>
        </Container>            
    </div>
  );
};
