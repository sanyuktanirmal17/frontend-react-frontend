import  Axios from 'axios'
//require('dotenv').configFile()
Axios.defaults.baseURL = "http://localhost:4000"
const token = localStorage.getItem('token');
const header = {
    headers:{
        'token': token
  }};
//  import Axios from "../service/axisService";

// const Axios = new Axios();
// const baseURL = "http://localhost/4000";
// const config = {
//   headers: {
//     // "Content-Type": "application/json",
//       token: localStorage.getItem("token"),

//   },
// };

class UserAPI {
    // getAllNotes =  (allNoteDetails) => {
    //     return Axios.get('/notes/:notes', allNoteDetails,configFile )
    // }

    // SignIn = (data) => {
    //   return Axios.postMethod(`/user/login`, data, config);
    // };
    // SignUp = (data) => {
    //   return Axios.postMethod(`/register`, data, config);
    // };
  
    static addNote =  (data) => {
//  AddANote = (data) => {
  // let configFileFile = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //     Authorization: localStorage.getItem("token"),
  //   },
  // };
  return Axios.post(
      `/createNotes`,data,
      // configFile
      header
    );
  };

static getNotes =  () => {
  // GetNotesList = (data) => {
     return Axios.get(`notes/:notes`, header)
  //{
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: localStorage.getItem("token"),
  //   },
  // });
  }

  DeleteNote = (data) => {
    return Axios.delete(`/delete/:notesId`, data, 
    header)
  }

static updateNotes =  (data) =>{
  // UpdateNotes = (data) => {
    return Axios.put(
      `/note/${data.notesId}`,
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