import React, { useContext } from "react";
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
    },
    setActive: (index: number) => void
}

const styles = {
  headerText: {fontWeight: "300"},
  addDestBtn:{height: "80%", background: "#38CC77", border: "#ccc", textTransform: "uppercase", position:"relative", bottom: "8px"},
  
}

const currentDataContext = React.createContext<IState["currentDataType"] | null>(null);
const setCurrentDataContext = React.createContext<React.Dispatch<React.SetStateAction<IState["currentDataType"]>> | null>(null);
const showModalContext = React.createContext< boolean | null>(null);
const setShowModalContext = React.createContext< React.Dispatch<React.SetStateAction<boolean>> | null>(null);
const handleSubmitContext = React.createContext< () => void | null>(()=>{});

export const useCurrentDataContext = () => {
  return React.useContext(currentDataContext);
}
export const useSetCurrentDataContext = () => {
  return React.useContext(setCurrentDataContext);
}
export const useShowModalContext = () => {
  return React.useContext(showModalContext);
}
export const useSetShowModalContext = () => {
  return React.useContext(setShowModalContext);
}
export const useHandleSubmitContext = () => {
  return React.useContext(handleSubmitContext);
}

const dataContext = React.createContext<IState["currentDataType"][] | null>(null);
const setActiveContext = React.createContext<IState["setActive"] | null>(null);

export const useDataContext = () => {
  return React.useContext(dataContext);
}
export const useSetActiveContext = () => {
  return React.useContext(setActiveContext);
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

  const MyHeader = () => {
    return(
      <div className="btn-container">
        <p data-testid="header-text" style={styles.headerText}>Destinations</p>
        <Button
          data-testid="add-destination-btn"
          size="sm"
          variant="success"
          onClick={() => setShowModal(!showModal)}
          style={{height: "80%", background: "#38CC77", border: "#ccc", textTransform: "uppercase", position:"relative", bottom: "8px"}}
        >
          + Ajouter
        </Button>
      </div>
    )
  }

  return (
    <div className="list_container">
      <MyHeader></MyHeader>
      {/* Add a destination */}
      {showModal && 
        <currentDataContext.Provider value={currentData}>
          <setCurrentDataContext.Provider value={setCurrentData}>
            <showModalContext.Provider value={showModal}>
              <setShowModalContext.Provider value={setShowModal}>
                <handleSubmitContext.Provider value={handleSubmit}>
                  <Modal />
                </handleSubmitContext.Provider>
              </setShowModalContext.Provider>
            </showModalContext.Provider>
          </setCurrentDataContext.Provider>
        </currentDataContext.Provider>
      }
      {/* Fetch and display destination */}
      {storedData &&
       <dataContext.Provider value={JSON.parse(storedData || "")}>
        <setActiveContext.Provider value={setActive}>
          <ListItem />
        </setActiveContext.Provider>
      </dataContext.Provider>}
    </div>
  );
};
