import React from 'react';
import Form from 'react-bootstrap/Form';
import { IProps as Props } from "./modal";

interface IProps extends React.HTMLAttributes<HTMLElement> {
    ref?: React.MutableRefObject<null>,
    label?: string,
    name: string,
    placeholder: string, 
    autoFocus?: boolean,
    currentData: Props["currentData"],
    setCurrentData: React.Dispatch<React.SetStateAction<Props["currentData"]>>
}

export const Input = React.forwardRef<HTMLInputElement, IProps>((
        {label = "", name, placeholder, autoFocus = false, currentData, setCurrentData, ...props},
        ref
    ) => {

    return (
        <Form.Group className="mb-3" id={name}>
            {/* <Form.Label>{label}</Form.Label> */}
            <Form.Control
                style={{fontSize: "12px"}}
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={(e) => {
                    setCurrentData({
                        ...currentData,
                        [e.target.name]: e.target.value
                    });
                }}
                autoFocus={autoFocus}
                ref={ref}
                {...props}
            />
        </Form.Group>
    )
})

export default Input;