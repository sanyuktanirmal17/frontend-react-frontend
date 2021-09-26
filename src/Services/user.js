/* eslint-disable no-alert */
/**
 * @module       service
 * @file         user.js
 * @description  API
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        13/07/2021  
-----------------------------------------------------------------------------------------------*/

// import Axios from 'axios';

// const BASE_URL = "http://localhost:4000";
// require('dotenv').config()
//   Axios.defaults.baseURL = BASE_URL ;
import  Axios from 'axios'
//require('dotenv').configFile()
Axios.defaults.baseURL = "http://localhost:4000"
const token = localStorage.getItem('token');
const header = {
    headers:{
        'token': token
  }};

// console.log('url',BASE_URL)
// let token = localStorage.getItem('token')
     export class User{
    /**
     * @description API integration for registration page
     * @param {*} userCredentials 
     */
    //eslint-disable-next-line

    userRegistration = (userCredentials) => {
     return Axios.post('/register', userCredentials)
    // return Axios.post('/register', userCredentials)
    };


    /**
     * @description API integration for login page
     * @param {*} loginDetails 
     */
    userLogin = (loginDetails) => {
     return Axios.post('/login', loginDetails, header) }


    //       AddNote = (data) => {
    //         let configFile = {
    //             headers: {
    //               "Content-Type": "multipart/form-data",
    //               Authorization: localStorage.getItem("token"),
    //             },
    //           };
    //         return axiosservice.postMethod(`${baseUrl}notes/addNotes`, data, configFile)
    //     }
    //     GetNote = () => {
    //         let config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': localStorage.getItem('token')
    //             }
    //         }
    //         return axiosservice.getMethod(`${baseUrl}notes/getNotesList`,  config)
    
    //     }
    //     ArchiveNote = (data) => {
    //         return axiosservice.postMethod(`${baseUrl}notes/archiveNotes`, data, config);
    //       }
    //     DeleteNote = (data) => {
    //         return axiosservice.postMethod(`${baseUrl}notes/trashNotes`, data, config);
    //     }
    //     ChangeColor = (data) => {
    //         return axiosservice.postMethod(`${baseUrl}notes/changesColorNotes`,data,config);
    //       };
    //     UpdateNotes = (data) => {
    //         return axiosservice.postMethod(`${baseUrl}notes/updateNotes`,data,config);
    //       };
        
    //     GetArchiveNotesList = () => {
    //         return axiosservice.getMethod(`${baseUrl}notes/getArchiveNotesList`,config);
    //       };
        
    //     GetTrashNotesList = () => {
    //         return axiosservice.getMethod(`${baseUrl}notes/getTrashNotesList`, config);
    //       };
    //       SearchUserList = (data) => {
    //         return axiosservice.postMethod(`${baseUrl}user/searchUserList`,data, config);
    //       };
        
    //       AddCollaborator = (id, data) => {return axiosservice.postMethod(`${baseUrl}notes/${id}/AddcollaboratorsNotes`, data,config);
    //       };
          
    //       RemoveCollaborator = (id, userId) => {return axiosservice.deleteMethod(`${baseUrl}notes/${id}/removeCollaboratorsNotes/${userId}`,config);
    //     };
     }


