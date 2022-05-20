import React from "react";
import AddDestinationsContext from "./addDestination";
import DisplayDestinationsContext from "./displayDestinations";
import Header from "./header";
import ListItem from "./listItem";
import { ModalComponent as Modal } from "./modal";


export const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    // localStorage.removeItem("adot-data");
    // return () => {
    //   localStorage.removeItem("adot-data");
    // }
  }, []);
  React.useEffect(() => {
    // localStorage.removeItem("adot-data");
    // return () => {
    //   localStorage.removeItem("adot-data");
    // }
    console.log("UPD !");
    
  });

  return (
    <div className="list_container">
      <Header showModal={showModal} setShowModal={setShowModal} />

      <AddDestinationsContext showModal={showModal} setShowModal={setShowModal}>
        <Modal />
      </AddDestinationsContext>
      
      <DisplayDestinationsContext showModal={showModal}>
        <ListItem />
      </DisplayDestinationsContext>
    </div>
  );
};
