import  Axios from 'axios'
//require('dotenv').config()
Axios.defaults.baseURL = "http://localhost:4000"
 

const token = localStorage.getItem('token');
const header = {
    headers:{
    'token': token
  }};

class UserAPI {
    getAllNotes =  (allNoteDetails) => {
        return Axios.get('/AllNotes', allNoteDetails,header )
    }

}

export default  UserAPI ;