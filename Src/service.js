import { base_url } from "./api_config";
import store from '../Src/Store/index'

export const getApiCall = (params, CB) => {
    const token = store.getState().user.token
    alert(store.getState().user.token)
    console.log(store.getState().user.token)
    fetch(base_url + params.apiUrl, {

        headers: {
            // method: 'GET',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
        .then((responce) => responce.json())
        .then((responceJson) => {
            CB(responceJson)
            return true
        }
        ).catch(function (error) {
            console.log('There has been a problem with your fetch operation:' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}

export const postApiCallWithParams = (params, CB) => {
    const token = store.getState().user.token
    fetch(base_url + params.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },

    })
        .then((responce) => responce.json())
        .then((responceJson) => {
            CB(responceJson)
        }
        ).catch(function (error) {
            console.log('There has been a problem with your fetch operation:' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}

export const postApiCall = (params, CB) => {
    const token = store.getState().user.token
    fetch(base_url + params.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },

    })
        .then((responce) => responce.json())
        .then((responceJson) => {
            CB(responceJson)
        }
        ).catch(function (error) {
            console.log('There has been a problem with your fetch operation:' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}