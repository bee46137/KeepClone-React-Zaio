import React, { useState } from "react";

const Note = (props) => {
  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)
  const id = props.id;
 

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleArchiveNote = () => {
    console.log("ARCHIVE");
    props.archiveNote(props.id)
  }

  return (
    <div
      className="note"
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}

      <div className="title-note">{title}</div>
      <div className="text-note">{text}</div>

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
