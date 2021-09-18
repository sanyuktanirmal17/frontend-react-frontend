/* eslint-disable no-alert */
/**
 * @module       service
 * @file         user.js
 * @description  API
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        13/07/2021  
-----------------------------------------------------------------------------------------------*/

import Axios from 'axios'

const BASE_URL = "http://localhost:4000";
require('dotenv').config()
  Axios.defaults.baseURL = BASE_URL ;

console.log('url',BASE_URL)
let token = localStorage.getItem('token')
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
     return Axios.post('/login', loginDetails)

        // return Axios.post(BASE_URL+'/login', loginDetails)
    //     headers:{
    //         'token':token
    //     }
     
    };
}