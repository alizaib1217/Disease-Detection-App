import axios from "axios";
import {API_URL} from "../configs/API";


/*
* Method: POST
* Desc: Register user
*
* Params:
* name            | body | string | (req)
* email           | body | string | (req)
* password        | body | string | (req)
* Occupation         | body | string | (req)
* */


export const userSignUp = async (params) =>
  axios({
    method: 'POST',
    url: `${API_URL}users/signup`,
    data: params,
    config: {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
  });


/*
* Method: POST
* Desc: Login user
*
* Params:
* email           | body | string | (req)
* password        | body | string | (req)
* */
export const userSignIn = async (params) =>
  axios({
    method: 'POST',
    url: `${API_URL}users/signin`,
    data: params,
    config: {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
  });

/*
* Method: POST
* Desc: Logout user
* */
export const userLogout = async (params) =>
  axios({
    method: 'POST',
    url: `${API_URL}users/logout`,
    data: params,
  });
