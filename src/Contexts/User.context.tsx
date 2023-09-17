import { createContext, useEffect, useReducer } from "react"

import { authStateChangeListener, createUserDocumentFromAuth } from '../libs/firebase/firebase'
import { User } from 'firebase/auth'

type UserInfoPayload ={
    currentUserInfo:UserInfo | null
}
type UserPayload = {
    currentUser:User | null
}

type UserState = UserInfoPayload & UserPayload

export const UserContext = createContext({
    currentUser: null,
    currentUserInfo: null,
}as UserState)

export const enum USER_ACTION_TYPES {
    SET_CURRENT_USER,
    SET_USER_INFO
}


const INITIAL_STATE = {
    currentUser: null,
    currentUserInfo: null,
}


type UserAction = {
    type: USER_ACTION_TYPES,
    payload: UserPayload | UserInfoPayload
}





const userReducer = (state: UserState, action: UserAction): UserState => {
    const { type, payload } = action


    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                ...payload
            }
        case USER_ACTION_TYPES.SET_USER_INFO:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }

}



export const UserProvider = ({ children }: ChildrenType) => {

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser, currentUserInfo } = state


    const setCurrentUser = (user: User | null) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload:{
            currentUser:user
        }});
    }

    const setCurrentUserInfo = (userInfo: UserInfo | null) => {
    
        dispatch({
            type: USER_ACTION_TYPES.SET_USER_INFO,
            payload:{
                currentUserInfo: userInfo
            } 
        })
    }


    useEffect(() => {
        const stopListener = authStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
                    .then((user) => user && setCurrentUserInfo(user.data() as UserInfo))
            }
            setCurrentUser(user);
        }
        )

        return stopListener
    }, []);

    const value = {
        currentUser,
        currentUserInfo
    }


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>)
}