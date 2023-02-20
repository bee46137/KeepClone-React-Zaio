import React, { useState } from "react";
import { uid } from 'uid';
import "./Form.css";

const Form = (props) => {
  // USER INPUT STATE VALUES WAY

  // const [userInput, setUserInput] = useState({
  //     title: "",
  //     text: ""
  // })

  // const titleChangeHandler = (event) => setUserInput((prevState) => {
  // return{
  //      ...prevState,
  //      title: event.target.value
  // }
  // });

  // const textChangeHandler = (event) => setUserInput((prevState) => {
  // return {
  //     ...prevState,
  //     text: event.target.value
  // }
  // });

  // const submitFormHandler = (event) => {
  //     event.preventDefault();
  //     // add data to array
  //     setUserInput({
  //         title: "",
  //         text: ""
  //     })
  // }

  // USESTATE OTHER WAY
  // VARIABLES & FUNCTIONS BELOW

  const { edit, selectedNote, toggleModal, editNote } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    setIsActiveForm(true);
  }

  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  }

  const submitFormHandler = (event) => {
      event.preventDefault();

      if (!edit){

        props.addNote({
          id: uid(),
          title,
          text,
        });
        
        setIsActiveForm(false)

      } else {

        editNote({
          id: selectedNote.id,
          title,
          text
        });
        toggleModal();
        
      }

    setTitle("");
    setText("");
  };

  const formClickHandler = () => {
    setIsActiveForm(true);
    
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form onSubmit={submitFormHandler} className={isActiveForm ? "form" : ""} action="">
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              className="note-title"
              placeholder="Title"
              type="text"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            className="note-text"
            placeholder="Take a note..."
            type="text"
          />

          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Background options</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add image</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>

              <button className="close-button">Close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New list</span>
              </div>

              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New note with drawing</span>
              </div>

              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New note with image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;


