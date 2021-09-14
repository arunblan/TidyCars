import alertHandler from "../../Compoents/AlertHandler"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postApiCall } from "../service"

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}
export const increment = () => ({
    type: 'INCREMENT',
    payload: 1
})
// export const login = (post, cb) => dispatch => {
//     postApiCall({ apiUrl: `/login?mobile=${post.mobile}` }, (responceJson) => {
//         console.log(responceJson.status)
//         cb(responceJson)
//         if (responceJson.status == 'success') {
//             let token = responceJson.data.token
//             storeData("token", token)
//             dispatch({
//                 type: 'SET_TOKEN',
//                 payload: token
//             })
//         }
//     })
// }
export const updateToken = (token) => {
    storeData("token", token)
    return({
        type: 'SET_TOKEN',
        payload: token
    })
}
