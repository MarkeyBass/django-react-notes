import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useParams, useNavigate } from "react-router-dom";

const NotePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  let noteId = params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;

    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/", { replace: true });
  };

  console.log({BODY: note?.body});
  let handleSubmit = () => {
    if (noteId !== "new" && note?.body?.trim() === "") {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (
      noteId === "new" &&
      note.body !== undefined &&
      note.body !== null &&
      note.body.trim() !== ""
    ) {
      createNote();
    }
    navigate("/", { replace: true });
  };

  let handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
    // console.log("Handle Change:", note);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
