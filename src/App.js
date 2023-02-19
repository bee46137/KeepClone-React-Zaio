import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";


// const NOTES = [

// ];

function App() {


  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);


  const addNote = (note) => {
    if (note.text !== "")
      setNotes((prevNotes) => {
        return [...prevNotes, note];
      });

    console.log(notes);
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter (note => note.id !== id)
    })
  };

  const toggleModal =() => {
    setIsModalOpen ((prevModal) => {
      return !prevModal;
    })
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes} archiveNote={archiveNote} toggleModal = {toggleModal} setSelectedNote = {setSelectedNote}/>
      { isModalOpen && <Modal isModalOpen={isModalOpen} selectedNote = {selectedNote} toggleModal = {toggleModal} /> }
    </div>
  );
}

export default App;
