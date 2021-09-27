import  Axios from 'axios'
//require('dotenv').configFile()
Axios.defaults.baseURL = "http://localhost:4000"
const token = localStorage.getItem('token');
const header = {
    headers:{
        'token': token
  }};


class UserAPI {
    
  
    static addNote =  (data) => {
  return Axios.post(
      `/createNotes`,data,
      // configFile
      header
    );
  };

static getNotes =  () => {
  // GetNotesList = (data) => {
     return Axios.get(`notes/:notes`, header)
  }

  static deleteNote = (data) => {
    return Axios.delete(`/notes/${data.notesId}`,  
    header)
  }

static updateNotes =  (data) =>{
  // UpdateNotes = (data) => {
    return Axios.put(`/note/${data.notesId}`,
      data,
      header
    );







  // ArchiveNote = (data) => {
  //   return Axios.post(
  //     `/notes/archiveNotes`,
  //     data,
  //     // config
  //   );
  // };

  // ChangeColor = (data) => {
  //   return Axios.post(
  //     `/notes/changesColorNotes`,
  //     data,
  //     header
  //   );
  // };

  
  };

  GetArchiveNotesList = (data) => {
    return Axios.get(`/notes/getArchiveNotesList`, data, header)
    // {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    // });

  };

  GetTrashNotesList = (data) => {
    return Axios.get(`notes/getTrashNotesList`, data, header)
    // {
    //    headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    // });
  };

  SearchUserList = (data) => {
    return Axios.post(
      `user/searchUserList`,
      data,
      header
    );
  };

  AddCollaborator = (id, data) => {
    return Axios.post(
      `notes/${id}/AddcollaboratorsNotes`,
      data,
      header
    );
  };

  RemoveCollaborator = (id, userId) => {
    return Axios.delete(
      `notes/${id}/removeCollaboratorsNotes/${userId}`,
      header
    );
  };
  LogOut = () => {
    return Axios.post(` user/logout`, null, header);
  };

}

export default  UserAPI ;