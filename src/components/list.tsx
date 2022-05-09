import React from "react";
import Button from 'react-bootstrap/Button';
import ListItem from "./listItem";
import { ModalComponent as Modal } from "./modal";

export interface IState {
    currentDataType: {
        city: string,
        address: string,
        caption: string,
        people: string,
        hotels: string,
        salaries:string,
        area: string,
        active: boolean
    }
}

export const List = () => {
  const [showModal, setShowModal] = React.useState(false);

  const [storedData, setStoredData] = React.useState<string | null>("");

  const [currentData, setCurrentData] = React.useState<IState["currentDataType"]>({
    city: "",
    address: "",
    caption: "",
    people: "",
    hotels: "",
    salaries:"",
    area: "",
    active: false
  });
  React.useEffect(() => {
    localStorage.removeItem("adot-data");
    return () => {
      localStorage.removeItem("adot-data");
    }
  }, []);


  // const storedData = localStorage.getItem("adot-data");

  const setActive: (index: number) => void = (index) => {
    console.log("Switched");
    
    const parsedStoredData = JSON.parse(storedData || "");
    let destination = parsedStoredData[index];
    destination.active = !destination.active;

    parsedStoredData[index] = destination;
    localStorage.setItem("adot-data", JSON.stringify(parsedStoredData));
    setStoredData(localStorage.getItem("adot-data"))
  }

  const handleSubmit: () => void = () => {
    console.log(currentData);
    let data = [];
    
    if (localStorage.getItem("adot-data")) {
        data = JSON.parse(storedData || "");
    }
    data.push(currentData);
    localStorage.setItem("adot-data", JSON.stringify(data));
    setStoredData(localStorage.getItem("adot-data"));
    setShowModal(false);
  }


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
      {storedData && <ListItem data={JSON.parse(storedData || "")} setActive={setActive}/>}
    </div>
  );
};
