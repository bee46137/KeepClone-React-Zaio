import React, { useState } from "react";

const Note = (props) => {

  const { toggleModal, note, setSelectedNote} = props;

  const [isHover, setIsHover] = useState(false);

  const noteClickHandler = ()=> {
    toggleModal();
    setSelectedNote(note);
  }

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const handleArchiveNote = () => {
    props.archiveNote(note.id);
  }

  return (
    <div
      className="note"
      id={note.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick = {noteClickHandler}
    >
      {isHover && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}

      <div className="title-note">{note.title}</div>
      <div className="text-note">{note.text}</div>

      {isHover && (
        <div className="footer-note">
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
          <div className="tooltip archive" onClick={handleArchiveNote}>
            <span className="material-symbols-outlined hover small-icon">
              archive
            </span>
            <span className="tooltip-text">
              Archive
            </span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              more_vert
            </span>
            <span className="tooltip-text">More</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Note;
