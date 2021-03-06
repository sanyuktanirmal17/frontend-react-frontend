import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import NoteOptions from "../../component/noteOption/noteOption";
import Services from "../../Services/NoteServices";
import "./addNotes.scss";
// const service = new Services();

const useStyles = makeStyles((theme) => ({
  titleInput: {
    padding: "10px 15px",
    width: "70%",
    
  },
  noteInput: {
    padding: "10px 15px",
  },
  closeNotes: {
    padding: '10px 10px 10px 10px',
    fontSize: '17px',
    justifySelf: "flex-end",
    fontFamily: 'Google Sans ,Roboto,Arial,sans-serif',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}));

export default function AddNote(props) {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(props.editOpen);
  var [title, setTitle] = React.useState(props.editTitle);
  var [note, setNote] = React.useState(props.editDisc);
  const [edit, setEdit] = React.useState(props.setEdited);
  const [clr, setClr] = React.useState(props.editColor);
  const [noteId, setNoteId] = React.useState(props.editId);
  const [archive, setArchive] = React.useState(props.archive);
  const [trash, setTrash] = React.useState(props.trash);
  const[takeNote, setTakeNote] = React.useState(true);

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
      console.log("onclosedcalled");
      const formval = {
        title: title,
        description : note
     }
      Services
        .addNote(formval)
        .then((data) => {
          console.log("Add Notes: " + data);
          toast.success("Notes created");
          props.getall();
        })
        .catch((err) => {
          toast.error("Note not created");
          console.log("Error = " + err);
        });
    let formData = new FormData();
    if (title == undefined && note == undefined) {
      console.log("Please Enter Data");
      setClr("#fafafa");
      titleDisplay(false);
      return null;
    }
    formData.append("title", title);
    console.log("title",title);
    formData.append("description", note);
  //   const formval = {
  //    title: title,
  //    description : note
  // }
    if (edit) {
      //setClr(props.editColor);
      formData.append("color", clr);
      formData.append("noteId", noteId);
      Services
        .updateNotes(formData)
        .then((data) => {
          console.log("Update Data: " + data);
          props.getall();
        })
        .catch((err) => {
          console.log("Update Data Error = " + err);
        });
      titleDisplay(false);
      props.dialogOff();
    } 
    else {
    // formData.append("color", clr);
    // console.log("addnote",formData);
    Services
        .addNote(formData)
        .then((data) => {
          console.log("Add Notes: " + data);
          props.getall();
        })
        .catch((err) => {
          console.log("Error = " + err);
        });
      setTitle("");
      setNote("");
      setClr("#fafafa");
      titleDisplay(false);
    }
  };

  return (
    <div
      className="addNotesMain" data-testId="close"
      onClickAway={closeNote}
      style={{ backgroundColor: clr }}
    >
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div className="titleInput" data-testid="title" className={classes.titleInput}>
            <InputBase
              className={classes.input}
              placeholder="Title"
              value={title}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div class="simpleNoteShow">
          <div className="noteInput" data-testid="description">
            <InputBase
              className={classes.input}
              placeholder="Take a note..."
              value={note}
              fullWidth
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div style={{ display: showTitle ? "none" : "block" }}>
            <IconButton>
              <CheckBoxOutlinedIcon />
            </IconButton>
            <IconButton>
              <BrushOutlinedIcon />
            </IconButton>
            <IconButton>
              <ImageOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <ToastContainer position='top-center'/>
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions" data-testid="editId">
          <NoteOptions
            setClr={setClr}
            setEdited={edit}
            getall={props.getall}
            editId={props.editId}
            archive={archive}
            trash={trash}
            dialogOff={props.dialogOff}
            takeNote={takeNote}
          />
          {trash ? " " :
         <div className="closeNotes" data-testid="Save">  <IconButton  className={classes.closeNotes} onClick={closeNote}>
            SAVE
          </IconButton></div>}
          {<div className="closeNotes">  <IconButton  className={classes.closeNotes} >
            CLOSE
          </IconButton></div>}
          
        </div>
      </div>
    </div>
  );
}