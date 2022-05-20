import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IState as Props} from "../interfaces/inidex";
import Input from "./input";
import Modal from 'react-bootstrap/Modal';
import Switch from "./switch";
import { useCurrentDataContext, 
    useSetCurrentDataContext, 
    useShowModalContext,
    useSetShowModalContext,
    useHandleSubmitContext
} from "./addDestination";
import { uploadImage } from "../services/firebasebActions";


export const ModalComponent: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const currentData = useCurrentDataContext();
    const setCurrentData = useSetCurrentDataContext();
    const showModal = useShowModalContext();
    const setShowModal = useSetShowModalContext();
    const handleSubmit = useHandleSubmitContext(); 

    if (!currentData ||
        !setCurrentData ||
        !showModal ||
        !setShowModal ||
        !handleSubmit
    ) {
        return <></>
    }
    const ref = React.createRef<HTMLInputElement>()
    const {city, address, caption, people, hotels, salaries, area} = currentData;

    const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setLoading(true);
            try {
                const imageStoredURL = await uploadImage(img);
                console.log("Image", imageStoredURL);
                setCurrentData({
                    ...currentData,
                    caption: imageStoredURL
                });
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            
        }
    };

  return (
    <div data-testid="modal">
        <Modal 
            show={showModal} 
            onHide={()=>setShowModal(false)} 
            onEntered={() => {
                if (ref.current) ref.current.focus();
            }}
        >
            <Modal.Body>
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
                                id={"focus-on"}
                                ref={ref}
                                name="address"
                                placeholder="Adresse"
                                autoFocus={true}
                                currentData={currentData}
                                setCurrentData={setCurrentData}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col disabled={true}>
                            <Form.Group controlId="formFile" className="mb-3" style={{fontSize: "12px"}}>
                                <Form.Label >
                                    <span>Lien de l'image <span style={{color: "#38CC77"}}>{loading ? ", chargement en cours, attendez svp ...":""}</span></span>
                                </Form.Label>
                                <Form.Control 
                                    style={{fontSize: "12px"}}
                                    type="file" 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onImageChange(e)} 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row disabled={true}>
                        <Col xs={12} md={3}>                    
                            <Input 
                                disabled={loading}
                                name="people" 
                                placeholder="Nb Habitants"
                                currentData={currentData}
                                setCurrentData={setCurrentData}
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Input 
                                    disabled={loading}
                                    name="hotels" 
                                    placeholder="Nb Hotels"
                                    currentData={currentData}
                                    setCurrentData={setCurrentData}
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Input 
                                    disabled={loading}
                                    name="salaries" 
                                    placeholder="Revenu Moy"
                                    currentData={currentData}
                                    setCurrentData={setCurrentData}
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Input 
                                    disabled={loading}
                                    name="area" 
                                    placeholder="Superficie"
                                    currentData={currentData}
                                    setCurrentData={setCurrentData}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Switch 
                            disabled={loading} 
                            name="active"
                            currentData={currentData}
                            setCurrentData={setCurrentData}
                        />
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
                                disabled={(city === "" ||
                                address === "" ||
                                caption === "" ||
                                people === "" ||
                                hotels === "" ||
                                salaries === "" ||
                                area === "") ? true: false}
                                variant="light"
                                style={{ marginLeft: "0.75em", color:"#38CC77", fontWeight: "bold", fontSize: "0.8em" }}
                                onClick={()=>handleSubmit()} 
                            >
                                CONFIRM
                            </Button>
                        </Col>
                    </Row>
                </Container>  
            </Modal.Body>   
        </Modal>      
    </div>
  );
};
