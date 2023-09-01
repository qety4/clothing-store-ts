import {firebaseToken} from './.firebaseToken'

import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence,
    inMemoryPersistence,
    browserLocalPersistence,
    User,
    NextOrObserver
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    QueryDocumentSnapshot
} from 'firebase/firestore'


const app = initializeApp({
   ...firebaseToken
});


const provider = new GoogleAuthProvider()
export const auth = getAuth()




export const signInWithEmail = async (email:string, password:string) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    return userCred.user
}

export const signIn = async (email:string,password:string,bool:boolean)=>{
    bool ?
    await setPersistence(auth,browserLocalPersistence)
    .then(()=>
    signInWithEmail(email,password)
    )
    :
    await setPersistence(auth,browserSessionPersistence)
    .then(()=>
    signInWithEmail(email,password))
}

export const signInWithGooglePopup = () => setPersistence(auth,browserSessionPersistence).then(()=>signInWithPopup(auth, provider))

export const signOutUser = async () => signOut(auth)

export const createAuthUser = async (email:string, password:string) => {
    
    return await createUserWithEmailAndPassword(auth, email, password)
    
}

export const authStateChangeListener = (callback:NextOrObserver<User>) => {
    
    onAuthStateChanged(auth, callback)
}


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth:User, additionalinformation = {}):Promise<void | QueryDocumentSnapshot<UserInfo>>  => {

    if(!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName } = userAuth
        const { email } = userAuth

        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalinformation
            })
        } catch (e) {
            console.log('error creating project', e)
        }
    }
    console.log(userSnapshot)
    return userSnapshot as QueryDocumentSnapshot<UserInfo>
};






