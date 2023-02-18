import "./Modal.css";

const Modal = () => {
    
    return(
    
    <div className="modal">
        <div className="modal-content">
            <div className="form-container">
            
                <form className="form" id="modal-form" action="">
                    <input className="note-title" id = "modal-title" placeholder="Title"  type="text"/>
                    <input className="note-text" id = "modal-text" placeholder="Take a note..." type="text"/>
                   
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
    
                        <button className="close-button" id = "modal-button">Close</button>
    
                    </div>
                </form>
            </div>
        </div>
    </div>



    )
}

export default Modal;