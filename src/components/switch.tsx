import React from 'react';
import Form from 'react-bootstrap/Form';
import { IProps as Props } from "./modal";

interface IProps {
    name: string,
    currentData: Props["currentData"],
    setCurrentData: React.Dispatch<React.SetStateAction<Props["currentData"]>>
}
export const Switch: React.FC<IProps> = ({ name, currentData, setCurrentData, ...props}) => {
    
    return (
        <Form>
            <Form.Check 
                type="switch"
                label="Activer"
                name={name}
                onChange={(e) => {
                    setCurrentData({
                        ...currentData,
                        [e.target.name]: e.target.checked
                    });
                }}
                {...props}
            />
        </Form>
    )
};
export default Switch;