import React from "react";
import Button from 'react-bootstrap/Button';
import { ModalComponent as Modal } from "./modal";

export interface IState {
    currentDataType: {
        city: string,
        address: string,
        caption: string,
        zip: string,
        code: string
    }
}

export const List = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [currentData, setCurrentData] = React.useState<IState["currentDataType"]>({
    city: "",
    address: "",
    caption: "",
    zip: "",
    code: ""
  });

  console.log(currentData);
  const handleSubmit: () => void = () => {
    console.log(currentData);
    let storedData = [{}];
    
    if (localStorage.getItem("data")) {
        storedData = JSON.parse(localStorage.getItem("data") || "");
    }
    storedData.push(currentData);
    localStorage.setItem("data", JSON.stringify(storedData));
    setShowModal(false);
  }

  const storedData = localStorage.getItem("data");

  return (
    <div className="list_container">
      {showModal && (
        <Modal 
            currentData={currentData} 
            setCurrentData={setCurrentData} 
            showModal={showModal}
            setShowModal={setShowModal}
            handleSubmit={handleSubmit}
        />

      )}
      <div className="btn-container">
        <p style={{fontWeight: "300"}}>Destinations</p>
        <Button
          size="sm"
          variant="success"
          onClick={() => setShowModal(!showModal)}
          style={{height: "80%", background: "#38CC77", border: "#ccc", textTransform: "uppercase", position:"relative", bottom: "8px"}}
        >
          + Ajouter
        </Button>
      </div>
      {/* {storedData && <p>En route vers ListItem ...</p>} */}
    </div>
  );
};
