import { resolve } from "path";
import React, { useEffect } from "react";
import { IState, IContextProps } from "../interfaces/inidex";
import { addArticle } from "../services/nodeActions";


const currentDataContext = React.createContext<IState["currentDataType"] | null>(null);
const setCurrentDataContext = React.createContext<React.Dispatch<React.SetStateAction<IState["currentDataType"]>> | null>(null);
const showModalContext = React.createContext< boolean | null>(null);
const setShowModalContext = React.createContext<React.Dispatch<React.SetStateAction<boolean>> | null>(null);
const handleSubmitContext = React.createContext< () => Promise<void> | any>(() => new Promise(resolve => resolve(0)));

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

const AddDestinationsContext: React.FC<IContextProps> = ({ children, showModal, setShowModal }):JSX.Element => {
    const [storedData, setStoredData] = React.useState<string | null>(null);
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
    useEffect(() => {
      setStoredData(localStorage.getItem("adot-data"));
    }, []);

    const handleSubmit = async (): Promise<void> => {
      // use a service to save image and get it's ref url
      // Then save the article itself with the ref url 
      // set custom id to articles in order to edit them if need in the future i.e. setActive
        console.log(currentData);
        const res = await addArticle(currentData);
        console.log(res);
        
        // let data = [];
        
        // if (storedData) {
        //     data = JSON.parse(storedData || "");
        // }
        // data.push(currentData);
        // localStorage.setItem("adot-data", JSON.stringify(data));
        if(setShowModal)
            setShowModal(false);
    }

    if(!setShowModal || !showModal || !handleSubmitContext) return <></>

    return (
        <currentDataContext.Provider value={currentData}>
          <setCurrentDataContext.Provider value={setCurrentData}>
            <showModalContext.Provider value={showModal}>
              <setShowModalContext.Provider value={setShowModal}>
                <handleSubmitContext.Provider value={handleSubmit}>
                  {children}
                </handleSubmitContext.Provider>
              </setShowModalContext.Provider>
            </showModalContext.Provider>
          </setCurrentDataContext.Provider>
        </currentDataContext.Provider>
    )
}

export default AddDestinationsContext;