export interface IState {
    currentDataType: {
        city: string,
        address: string,
        caption: string,
        people: string,
        hotels: string,
        salaries:string,
        area: string,
        active: boolean,
        _id?: string
    },
    setActive: (index: number) => void
}
export interface IContextProps {
    children: JSX.Element,
    showModal?: boolean,
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IInput extends React.HTMLAttributes<HTMLElement> {
    ref?: React.MutableRefObject<null>,
    disabled?: boolean,
    label?: string,
    name: string,
    placeholder: string, 
    autoFocus?: boolean,
    currentData: IState["currentDataType"],
    setCurrentData: React.Dispatch<React.SetStateAction<IState["currentDataType"]>>
}
export interface ISwitch extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean,
    name: string,
    currentData: IState["currentDataType"],
    setCurrentData: React.Dispatch<React.SetStateAction<IState["currentDataType"]>>
}