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
}

  static forgotPassword =  (data) => {
      return Axios.post('/forgotPassword',data, header );

  }

  
  LogOut = () => {
    return Axios.post(` user/logout`, null, header);
  };

}

export default  UserAPI ;