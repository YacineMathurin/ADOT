import React from 'react'
import Button from 'react-bootstrap/Button';

interface IProp {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const styles = {
    headerText: {fontWeight: "300"},
    addDestBtn:{height: "80%", background: "#38CC77", border: "#ccc", textTransform: "uppercase", position:"relative", bottom: "8px"},
}

const Header: React.FC<IProp> = ({ showModal, setShowModal }): JSX.Element => {
    return(
        <header className="btn-container">
        <span data-testid="header-text" style={styles.headerText}>Destinations</span>
        <Button
            data-testid="add-destination-btn"
            size="sm"
            variant="success"
            onClick={() => setShowModal(!showModal)}
            style={{height: "80%", background: "#38CC77", border: "#ccc", textTransform: "uppercase", position:"relative", bottom: "8px"}}
        >
            + Ajouter
        </Button>
        </header>
    )
}
export default Header;

