import React, { useState } from "react";
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

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isActiveForm, setIsActiveForm] = useState(false);

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

    // add data to array

    const note = {
      id: Math.random(),
      title,
      text,
    };

    props.addNote(note);
    console.log(note);
    setTitle("");
    setText("");
    setIsActiveForm(false)
  };

  const formClickHandler = () => {
    setIsActiveForm(true);
    
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form onSubmit={submitFormHandler} className={isActiveForm ? "form" : ""} id="form" action="">
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              id="note-title"
              className="note-title"
              placeholder="Title"
              type="text"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            id="note-text"
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


