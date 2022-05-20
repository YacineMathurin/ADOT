import React from 'react';
import Form from 'react-bootstrap/Form';
import { ISwitch } from "../interfaces/inidex";

export const Switch: React.FC<ISwitch> = ({ name, currentData, setCurrentData, ...props}) => {
    
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