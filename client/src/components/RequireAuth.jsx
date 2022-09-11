import React from 'react'
import LoginForm from './LoginForm'

function RequireAuth(props) {

const x = LoginForm()
if (!x.loggedIn){ return <div>Please Login</div> }
  return (
    <div>{props.children}</div>
  )
  
}

export default RequireAuth