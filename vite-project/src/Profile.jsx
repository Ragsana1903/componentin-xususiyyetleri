import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import './Profile.css'

function Profile() {
  return (
    <>
    <div>Profile</div>
    <Name />
    <Email />
    <Address />
    <PersonalInfo />
    <br></br>
    <button>Enter</button>
    
    </>
  )
}

export default Profile