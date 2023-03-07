import axios from 'axios';
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN'

export const signUp = (formDatas) => {
    return async dispatch => {
        const data = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP82z2GcEbeoKBldyEELw2UaBHcpUqZ6U`, {
            email: formDatas.email,
            password: formDatas.password,
            returnSecureToken: true
        });
        console.log(formDatas)
        await axios.put(`https://nerdsecomerce-default-rtdb.firebaseio.com/users/${data.data.localId}.json`,{
            email:data.data.email,
            username: formDatas.name,
            adressInfo:{
                city: formDatas.city,
                adress:formDatas.adress
            },
            cardNumber: formDatas.card,
        });
        dispatch({type:SIGN_UP, firebase:data, form:formDatas})
        //saveData(data.data.token, data.data.localId)
        
    }
}

export const logIn = (email, password) => {
    return async dispatch => {
        console.log(email, password)
        const data = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP82z2GcEbeoKBldyEELw2UaBHcpUqZ6U`, {
            email: email,
            password:password,
            returnSecureToken: true,
        })
        console.log(data)
        const userDatas = await axios.get(`https://nerdsecomerce-default-rtdb.firebaseio.com/users/${data.data.localId}.json`)
        console.log('user',userDatas)
        dispatch({type:LOG_IN, firebase:data, userDatas:userDatas })
        //saveData(data.data.idToken, data.data.localId)
    }
}

const saveData = (token, userId) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token,
        userdId: userId,
    }))
}

export {SIGN_UP, LOG_IN};
