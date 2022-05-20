import React from "react";
import { IState, IContextProps } from "../interfaces/inidex";
import { getArticles, updateArticles } from "../services/nodeActions";

const dataContext = React.createContext<IState["currentDataType"][] | null>(null);
const setActiveContext = React.createContext<IState["setActive"] | null>(null);

export const useDataContext = () => {
  return React.useContext(dataContext);
}
export const useSetActiveContext = () => {
  return React.useContext(setActiveContext);
}

const DisplayDestinationsContext: React.FC<IContextProps> = ({children, showModal}): JSX.Element => {
    const [storedData, setStoredData] = React.useState<IState["currentDataType"][]>([]);
    const [reload, setReload] = React.useState(false);
    React.useEffect( () => {
        console.log("Mounted !");
        async function fetchAllArticles () {
            const { data } = await getArticles();
            setStoredData(data);
        }
        fetchAllArticles();
    }, [showModal, reload]);

    const setActive: (index: number) => void = async (index) => {
        const article = storedData[index];
        article.active = !article.active;
        await updateArticles(article);
        // We need redux/toolkit by there so to not reload just for a switch that changed
        setReload(prev => !prev)
    }

    if (!storedData) return <></>
    return ( 
        <dataContext.Provider value={storedData}>
            <setActiveContext.Provider value={setActive}>
            {children}
            </setActiveContext.Provider>
        </dataContext.Provider>
    )
}

export default DisplayDestinationsContext;