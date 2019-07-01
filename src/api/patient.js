import axios from "axios";
import {API_URL} from "../configs/API";
/*
* Method: POST
* Desc: Upload file
*
* Params:
* user         | form-data | string | (req)
* name         | form-data | string | (req)
* age         | form-data | string | (req)
* file         | form-data| file | (req)
* */
export const ImageUpload = async (params) => axios({
  method: 'POST',
  url: `${API_URL}test/create`,
  data: params,
});

/*
* Method: POST
* Desc: Upload file
*
* Params:
* */
export const getPatientResults = async (user_id) => axios({
  method: 'GET',
  url: `${API_URL}test?user=${user_id}`,
});

