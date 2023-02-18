import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, archiveNote } = props;
  

  return (
    <div className="notes">
        {/* METHOD 1 FOR CONDITIONAL LOGIC, GOOD WAY TO AVOID ERRORS */}

        {/* {
            notes.length === 0 && <p>Notes you create will appear here.</p>
        }
        {
            notes.length !== 0 && notes.map((note, index) => (
                <Note key={index} id={note.id} title={note.title} text={note.text} />
              ))
        } */}

      {/* METHOD 2 */}

      {/* if (notes.length === 0) {
            return (<p>Notes you create will appear here.</p>)
        }
        return {
            notes.map((note, index) => (
                <Note key={index} id={note.id} title={note.title} text={note.text} />
                ))
        } */}

      {/* METHOD 3 */}

      {
        notes.length === 0 ? (
        <p>Notes you create will appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            id={note.id}
            title={note.title}
            text={note.text}
            archiveNote={archiveNote}
          />
        )))
        }
    </div>
  );
};

export default Notes;
