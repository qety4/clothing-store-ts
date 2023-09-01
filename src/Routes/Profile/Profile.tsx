import React from 'react'
import './profile.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/User.context'
import { signOutUser } from '../../libs/firebase/firebase'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const { currentUserInfo, currentUser } = useContext(UserContext)
  console.log(currentUserInfo)
  console.log(currentUser)
  const navigate = useNavigate()
  const signOut = () => {
    navigate('/')
    signOutUser()
  }
  return (

    <>
      {
        currentUserInfo ?
          <>
            <div className='profile-info-container'>

              <p className='profile-title'><b>Profile
              </b>
              </p>
              <p className='name-profile'><b>Name:</b> {currentUserInfo.displayName}
              </p>
              <p className='email-profile'><b>Email:</b> {currentUserInfo.email}
              </p>
              <p className='date-profile'><b>Date Created at:</b> {(currentUserInfo.createdAt).toString()}
              </p>

            </div>
            <button className="sign-out-button" onClick={signOut}>Sign Out</button>
          </>
          : ''
      }
    </>
  )
}

export default Profile